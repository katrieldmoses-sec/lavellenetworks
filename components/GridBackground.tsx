/**
 * The faint blueprint grid used behind every dark (navy) section.
 *
 * Reproduces the source design exactly: a 56×56 SVG line pattern stroked in
 * #3b9ef5 at 0.5px, with the whole layer held at opacity 0.055 — so the grid
 * reads as a barely-there texture rather than visible gridlines.
 */
export default function GridBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.055] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="lavelle-grid"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 56 0 L 0 0 0 56"
            fill="none"
            stroke="#3b9ef5"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lavelle-grid)" />
    </svg>
  );
}
