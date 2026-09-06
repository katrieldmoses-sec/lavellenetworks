import GridBackground from "../GridBackground";

/**
 * Placeholder page — mirrors pages that exist in the source design but only
 * render a heading. Kept so every real route in the source resolves here too.
 */
export default function StubPage({ heading }: { heading: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-navy pt-14 text-white">
      <GridBackground />
      <div className="container-x relative py-24">
        <h1 className="font-serif text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] lg:text-[48px]">
          {heading}
        </h1>
      </div>
    </section>
  );
}
