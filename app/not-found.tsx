import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-navy px-6 text-center text-white">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-light">
          404 · Page not found
        </span>
        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          This page has moved off the network.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or has been
          relocated.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-brand-light px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
