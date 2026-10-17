#!/usr/bin/env node
/**
 * Content-preservation check for the site redesign.
 *
 *   node scripts/page-text.mjs snapshot <baseUrl> <out.json>
 *   node scripts/page-text.mjs compare  <baseUrl> <baseline.json>
 *
 * snapshot: records the text nodes of every route (header, main, footer).
 * compare:  fails if any baseline text is missing from the new page; lists
 *           any text the new page adds (expected: none beyond decoration).
 */
import { readFileSync, writeFileSync } from "node:fs";

const [mode, base, file] = process.argv.slice(2);
const src = readFileSync(new URL("../lib/routes.ts", import.meta.url), "utf8");
const routes = [...src.slice(src.indexOf("ALL_ROUTES"), src.indexOf("];", src.indexOf("ALL_ROUTES"))).matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);
routes.push("/this-page-does-not-exist");

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;|&#160;/g, " ");

function nodes(html, tag) {
  const i = html.indexOf(`<${tag}`);
  if (i < 0) return [];
  const j = html.lastIndexOf(`</${tag}>`);
  const part = html.slice(i, j);
  return part
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, "")
    .split(/<[^>]+>/)
    .map((t) => decode(t).replace(/\s+/g, " ").trim())
    .filter(Boolean);
}
const flat = (arr) => arr.join(" ").replace(/\s+/g, " ");

async function grab(r) {
  const res = await fetch(base + r);
  const html = await res.text();
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] ?? "";
  return { status: res.status, title: decode(title), main: nodes(html, "main"), header: nodes(html, "header"), footer: nodes(html, "footer") };
}

if (mode === "snapshot") {
  const out = {};
  for (const r of routes) out[r] = await grab(r);
  writeFileSync(file, JSON.stringify(out, null, 1));
  console.log(`snapshot: ${routes.length} routes →`, file);
} else {
  const before = JSON.parse(readFileSync(file, "utf8"));
  let bad = 0;
  for (const r of Object.keys(before)) {
    const b = before[r];
    const a = await grab(r);
    const pageText = flat([...a.header, ...a.main, ...a.footer]);
    const problems = [];
    if (a.status !== b.status) problems.push(`status ${b.status} → ${a.status}`);
    if (a.title !== b.title) problems.push(`title "${b.title}" → "${a.title}"`);
    const mainText = flat(a.main);
    const missingMain = b.main.filter((t) => !mainText.includes(t));
    const missingChrome = [...b.header, ...b.footer].filter((t) => !pageText.includes(t));
    if (missingMain.length) problems.push("missing from page body: " + missingMain.map((t) => JSON.stringify(t)).join(", "));
    if (missingChrome.length) problems.push("missing from header/footer: " + missingChrome.map((t) => JSON.stringify(t)).join(", "));
    const beforeMain = flat(b.main);
    const added = a.main.filter((t) => !beforeMain.includes(t));
    if (problems.length) {
      bad++;
      console.log(`✗ ${r}\n   ${problems.join("\n   ")}`);
    } else {
      console.log(`✓ ${r}  (${b.main.length} body strings)${added.length ? `  + added: ${added.map((t) => JSON.stringify(t)).join(", ")}` : ""}`);
    }
  }
  process.exit(bad ? 1 : 0);
}
