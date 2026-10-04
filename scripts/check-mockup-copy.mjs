#!/usr/bin/env node
/**
 * Verifies that every homepage mockup carries the live homepage copy, word for
 * word, and that the shared content module matches the live homepage.
 *
 *   node scripts/check-mockup-copy.mjs [baseUrl] [n ...]
 *
 * baseUrl defaults to http://localhost:3999. With no numbers, checks 1-20.
 */
import { readFileSync } from "node:fs";

const base = process.argv[2] && !/^\d+$/.test(process.argv[2]) ? process.argv[2] : "http://localhost:3999";
const nums = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
const pages = nums.length ? nums : Array.from({ length: 20 }, (_, i) => i + 1);

const IGNORE = new Set(["lucide-react", "en-IN"]);

function literals(file) {
  const src = readFileSync(new URL(`../${file}`, import.meta.url), "utf8")
    // drop comments so quoted words in them don't count
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
  const out = [];
  for (const m of src.matchAll(/"((?:[^"\\]|\\.)*)"/g)) {
    const s = m[1];
    if (!s.trim() || IGNORE.has(s)) continue;
    if (s.startsWith("/") || s.startsWith("tel:") || s.startsWith("@/") || s.startsWith("./")) continue;
    out.push(s);
  }
  return out;
}

const home = literals("lib/content/home.ts");
const footer = literals("lib/content/footer.ts");
const nav = literals("lib/content/nav.ts");

// Strings the components derive from the module.
const derived = [
  "25,000+",
  "100+",
  "10+",
  ...["BFSI", "Retail", "Manufacturing", "Healthcare", "Government & PSU", "Education"].map(
    (n) => `View ${n} solutions`,
  ),
];

const required = [...new Set([...home, ...footer, ...nav, ...derived])];

function textOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    // React separates adjacent text nodes with empty comments
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ");
}

async function get(path) {
  const res = await fetch(base + path);
  if (!res.ok) throw new Error(`${path} → HTTP ${res.status}`);
  return textOf(await res.text());
}

let failed = 0;

// 1. Module vs live homepage (counters render 0 server-side there, so skip numerics).
{
  const live = await get("/");
  const missing = home.filter((s) => !/^\d|^[+,]/.test(s) && !live.includes(s));
  if (missing.length) {
    failed++;
    console.log(`✗ content module drifts from live homepage (${missing.length}):`);
    for (const s of missing) console.log("   -", s);
  } else {
    console.log(`✓ content module matches live homepage (${home.length} strings)`);
  }
}

// 2. Every mockup carries every string.
for (const n of pages) {
  try {
    const text = await get(`/mockup/${n}`);
    const missing = required.filter((s) => !text.includes(s));
    if (missing.length) {
      failed++;
      console.log(`✗ /mockup/${n} missing ${missing.length}:`);
      for (const s of missing.slice(0, 40)) console.log("   -", s);
    } else {
      console.log(`✓ /mockup/${n} — all ${required.length} strings present`);
    }
  } catch (e) {
    failed++;
    console.log(`✗ /mockup/${n} — ${e.message}`);
  }
}

process.exit(failed ? 1 : 0);
