import Reveal from "../Reveal";
import GridBackground from "../GridBackground";
import { ArrowRight, CircleCheck } from "../icons";
import type { Section } from "@/lib/content/types";

function Eyebrow({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <Reveal>
      <span className={`kicker ${dark ? "text-brand-light" : "text-brand-blue"}`}>
        {text}
      </span>
    </Reveal>
  );
}

function Title({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <Reveal delay={80}>
      <h2
        className={`mt-4 font-serif text-[30px] font-semibold leading-[36px] tracking-[-0.01em] lg:text-[40px] lg:leading-[48px] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {text}
      </h2>
    </Reveal>
  );
}

function Buttons({ ctas, dark }: { ctas?: { label: string; href: string }[]; dark?: boolean }) {
  if (!ctas?.length) return null;
  return (
    <Reveal delay={240}>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        {ctas.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            className={i === 0 ? "btn-primary-blue" : dark ? "btn-outline-light" : "btn-outline-dark"}
          >
            {c.label}
            {i === 0 && <ArrowRight className="h-4 w-4" />}
          </a>
        ))}
      </div>
    </Reveal>
  );
}

export function SectionRenderer({ section, index }: { section: Section; index: number }) {
  // Alternate light surfaces the way the source does; heroes and CTAs are navy.
  const light = index % 2 === 0 ? "bg-white" : "bg-mist-100";

  switch (section.kind) {
    case "hero":
      return (
        <section className="relative overflow-hidden bg-navy pt-14 text-white">
          <GridBackground />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(120% 80% at 15% 0%, rgba(0,120,212,0.20), transparent 55%)",
            }}
          />
          <div className="container-x relative py-24 lg:py-28">
            <div className="max-w-3xl">
              <Reveal>
                <span className="kicker text-brand-light">{section.eyebrow}</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 font-serif text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[48px] lg:text-[56px]">
                  {section.title}
                </h1>
              </Reveal>
              {section.body && (
                <Reveal delay={160}>
                  <p className="mt-6 text-[18px] leading-[1.6] text-brand-sky">
                    {section.body}
                  </p>
                </Reveal>
              )}
              <Buttons ctas={section.ctas} dark />
            </div>
          </div>
        </section>
      );

    case "challenge":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              <Title text={section.title} />
              {section.intro && (
                <Reveal delay={160}>
                  <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
                    {section.intro}
                  </p>
                </Reveal>
              )}
            </div>
            <ul className="mt-12 grid gap-4 md:grid-cols-2">
              {section.bullets.map((b, i) => (
                <Reveal key={b} delay={(i % 2) * 70}>
                  <li className="flex items-start gap-3 card p-5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-[11px] font-bold text-brand-blue">
                      !
                    </span>
                    <span className="text-[13px] leading-[19.5px] text-navy-500">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      );

    case "capabilities":
    case "features":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              {section.title && <Title text={section.title} />}
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((it, i) => (
                <Reveal key={it.title} delay={(i % 3) * 70}>
                  <div className="h-full card p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-card bg-mist-100 text-brand-blue">
                      <CircleCheck className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-[14px] font-semibold leading-[20px] text-navy">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-navy-500">
                      {it.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case "how":
      return (
        <section className="relative overflow-hidden bg-navy py-24 text-white">
          <GridBackground />
          <div className="container-x relative">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} dark />
              <Title text={section.title} dark />
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {section.steps.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 80}>
                  <li className="h-full rounded-card border border-[#1a3055] bg-[#112040] p-5">
                    <span className="font-mono text-[12px] font-bold text-brand-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-[13px] font-semibold leading-[18px] text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-[#7fafd8]">
                      {s.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      );

    case "outcomes":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              <Title text={section.title} />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {section.items.map((it, i) => (
                <Reveal key={it.title} delay={(i % 3) * 70}>
                  <div className="h-full card p-6">
                    <h3 className="text-[14px] font-semibold leading-[20px] text-navy">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-navy-500">
                      {it.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case "stats":
      return (
        <section className="bg-brand-blue py-20 text-white">
          <div className="container-x">
            {section.eyebrow && (
              <span className="kicker text-white/70">{section.eyebrow}</span>
            )}
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {section.items.map((it, i) => (
                <Reveal key={it.title} delay={i * 80}>
                  <div className="font-serif text-[48px] font-bold leading-none">
                    {it.value}
                  </div>
                  <div className="mt-3 text-[14px] font-semibold">{it.title}</div>
                  <div className="mt-1 text-[13px] text-white/70">{it.body}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case "platform":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              <Title text={section.title} />
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {section.links.map((l, i) => (
                <Reveal key={l.title} delay={(i % 3) * 70}>
                  <a
                    href={l.href}
                    className="group flex h-full flex-col card p-6 transition-colors hover:border-brand-light/50"
                  >
                    <h3 className="text-[14px] font-semibold leading-[20px] text-navy">
                      {l.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[12px] leading-relaxed text-navy-500">
                      {l.body}
                    </p>
                    <span className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-brand-blue">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case "flow":
      return (
        <section className="relative overflow-hidden bg-navy py-24 text-white">
          <GridBackground />
          <div className="container-x relative">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} dark />
              <Title text={section.title} dark />
              {section.intro && (
                <Reveal delay={160}>
                  <p className="mt-4 text-[17px] leading-relaxed text-brand-sky">
                    {section.intro}
                  </p>
                </Reveal>
              )}
            </div>
            <Reveal delay={200}>
              <div className="mt-12 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
                {section.nodes.map((n, i) => (
                  <div key={n.title} className="flex items-center gap-3 lg:flex-1">
                    <div className="flex-1 rounded-card border border-[#1a3055] bg-[#112040] p-4 text-center">
                      <div className="text-[13px] font-semibold text-white">{n.title}</div>
                      <div className="mt-1 text-[11px] text-[#4a6891]">{n.sub}</div>
                    </div>
                    {i < section.nodes.length - 1 && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-brand-light/50" aria-hidden />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      );

    case "deployment":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              <Title text={section.title} />
              {section.intro && (
                <Reveal delay={160}>
                  <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
                    {section.intro}
                  </p>
                </Reveal>
              )}
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {section.items.map((it, i) => (
                <Reveal key={it.title} delay={(i % 3) * 70}>
                  <div className="h-full card p-6">
                    <h3 className="text-[14px] font-semibold leading-[20px] text-navy">
                      {it.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-navy-500">
                      {it.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            {section.note && (
              <Reveal delay={200}>
                <p className="mt-6 text-[12px] text-navy-500">{section.note}</p>
              </Reveal>
            )}
          </div>
        </section>
      );

    case "note":
      return (
        <section className={`${light} py-20`}>
          <div className="container-x max-w-3xl">
            <Eyebrow text={section.eyebrow} />
            <Title text={section.title} />
            <Reveal delay={160}>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
                {section.body}
              </p>
            </Reveal>
            {section.cta && (
              <Reveal delay={200}>
                <a href={section.cta.href} className="btn-primary-blue mt-8">
                  {section.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            )}
          </div>
        </section>
      );

    case "components":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              <Title text={section.title} />
              {section.intro && (
                <Reveal delay={160}>
                  <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
                    {section.intro}
                  </p>
                </Reveal>
              )}
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {section.items.map((it, i) => (
                <Reveal key={it.title} delay={(i % 2) * 70}>
                  <div className="group flex h-full flex-col card p-6">
                    <h3 className="text-[14px] font-semibold leading-[20px] text-navy">
                      {it.title}
                    </h3>
                    <ul className="mt-4 flex-1 space-y-2">
                      {it.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[12px] leading-[18px] text-navy-500">
                          <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-azure" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a href={it.href} className="mt-5 flex items-center gap-1.5 text-[12px] font-semibold text-brand-blue">
                      {it.linkLabel ?? "View product"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case "table":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              <Title text={section.title} />
            </div>
            <Reveal delay={160}>
              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr>
                      {section.headers.map((h) => (
                        <th key={h} className="border-b border-[#e2eaf5] pb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((r, ri) => (
                      <tr key={ri}>
                        {r.map((c, ci) => (
                          <td key={ci} className={`border-b border-[#e2eaf5] py-4 pr-6 text-[13px] leading-[19px] ${ci === 0 ? "font-semibold text-navy" : "text-navy-500"}`}>
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      );

    case "checklist":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              {section.title && <Title text={section.title} />}
            </div>
            <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((it, i) => (
                <Reveal key={it} delay={(i % 3) * 60}>
                  <li className="flex items-start gap-3 card p-5">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-azure" />
                    <span className="text-[13px] leading-[19.5px] text-navy-500">{it}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      );

    case "people":
      return (
        <section className={`${light} py-24`}>
          <div className="container-x">
            <div className="max-w-3xl">
              <Eyebrow text={section.eyebrow} />
              <Title text={section.title} />
              {section.intro && (
                <Reveal delay={160}>
                  <p className="mt-4 text-[17px] leading-relaxed text-navy-500">
                    {section.intro}
                  </p>
                </Reveal>
              )}
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((m, i) => (
                <Reveal key={m.name + i} delay={(i % 3) * 70}>
                  <div className="h-full card p-6">
                    {m.category && (
                      <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                        {m.category}
                      </span>
                    )}
                    <h3 className="mt-3 text-[14px] font-semibold leading-[20px] text-navy">
                      {m.name}
                    </h3>
                    <div className="text-[12px] text-brand-blue">{m.role}</div>
                    <p className="mt-3 text-[12px] leading-relaxed text-navy-500">{m.bio}</p>
                    {m.note && (
                      <span className="mt-4 inline-block rounded-full bg-mist-100 px-2.5 py-1 text-[10px] font-medium text-navy-500">
                        {m.note}
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case "cta":
      return (
        <section className="relative overflow-hidden bg-navy py-24 text-white">
          <GridBackground />
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(90% 80% at 50% 0%, rgba(0,98,177,0.28), transparent 60%)",
            }}
          />
          <div className="container-x relative text-center">
            <Reveal>
              <h2 className="mx-auto max-w-3xl font-serif text-[30px] font-semibold leading-[1.15] lg:text-[40px]">
                {section.title}
              </h2>
            </Reveal>
            {section.body && (
              <Reveal delay={120}>
                <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-brand-sky">
                  {section.body}
                </p>
              </Reveal>
            )}
            {section.ctas?.length ? (
              <Reveal delay={200}>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  {section.ctas.map((c, i) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className={i === 0 ? "btn-primary-blue" : "btn-outline-light"}
                    >
                      {c.label}
                      {i === 0 && <ArrowRight className="h-4 w-4" />}
                    </a>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>
      );
  }
}

export default function Sections({ sections }: { sections: Section[] }) {
  let lightIndex = 0;
  return (
    <>
      {sections.map((s, i) => {
        const isLight =
          s.kind !== "hero" && s.kind !== "how" && s.kind !== "cta" && s.kind !== "stats" && s.kind !== "flow";
        const idx = isLight ? lightIndex++ : 0;
        return <SectionRenderer key={i} section={s} index={idx} />;
      })}
    </>
  );
}
