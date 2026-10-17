import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Globe from "@/components/kit/Globe";
import { GrainField } from "@/components/kit/Brand";
import { Btn, Kicker } from "@/components/site/ui";

/** 404 — the compact Signal hero with the earth (design.md §7.2). */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-3 pb-3 sm:px-5">
          <GrainField tone="blue" grain={0.32} className="mx-auto min-h-[70vh] max-w-[1400px] rounded-[24px] text-white">
            <div aria-hidden className="absolute right-[-6%] top-1/2 hidden aspect-square w-[min(80vh,640px)] -translate-y-1/2 opacity-90 md:block">
              <Globe dot="rgba(255,255,255,0.92)" dotSize={1.1} density={1.6} arcs="#C2DFF6" marker="#FFFFFF" lon={78} lat={18} speed={4} outline="rgba(255,255,255,0.25)" />
            </div>
            <div className="relative flex min-h-[70vh] flex-col justify-end p-6 lg:p-12">
              <div className="max-w-xl">
                <Kicker light>404 · Page not found</Kicker>
                <h1 className="mt-5 text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[56px] lg:text-[64px]">
                  This page has moved off the network.
                </h1>
                <p className="mt-6 max-w-md text-[17px] leading-[1.6] text-white/85">
                  The page you&apos;re looking for doesn&apos;t exist or has been relocated.
                </p>
                <div className="mt-9">
                  <Btn href="/" tone="white" arrow>
                    Back to home
                  </Btn>
                </div>
              </div>
            </div>
          </GrainField>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
