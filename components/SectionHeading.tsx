import Reveal from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
  /** "lg" = 48px/60px (default), "md" = 36px/40px. */
  size?: "lg" | "md";
};

export default function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  dark = false,
  size = "lg",
}: Props) {
  const centered = align === "center";
  const titleSize =
    size === "md"
      ? "text-[30px] leading-[36px] lg:text-[36px] lg:leading-[40px]"
      : "text-[36px] leading-[45px] lg:text-[48px] lg:leading-[60px]";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <span className={`kicker ${dark ? "text-brand-light" : "text-brand-blue"}`}>
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`mt-4 font-serif font-semibold tracking-[-0.01em] ${titleSize} ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p
            className={`mt-4 text-[17px] leading-relaxed ${
              dark ? "text-brand-sky" : "text-navy-500"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
