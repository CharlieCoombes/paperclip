import Link from 'next/link';
import { Icon } from './Icon';

export function CtaSection() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 text-white sm:px-12">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(49,159,255,0.35),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(251,107,19,0.3),transparent_45%)]"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="chip bg-white/10 text-white">For AC companies</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Run an AC service business in Dubai? Get found.
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Add your company to the directory — share your service areas, licences and response times. Listings are free; verification is optional and clearly marked.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <Link href="/submit" className="btn-accent">
              List your business
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
            <Link href="/about" className="text-sm font-semibold text-white/80 hover:text-white">
              How we vet listings →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
