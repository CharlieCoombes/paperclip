import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container py-24 text-center">
      <p className="section-eyebrow">404</p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
        We couldn’t find that page
      </h1>
      <p className="mx-auto mt-3 max-w-md text-ink-600">
        The link may have moved or the listing was removed. Try searching the directory instead.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn-ghost">Go home</Link>
        <Link href="/companies" className="btn-primary">Browse companies</Link>
      </div>
    </section>
  );
}
