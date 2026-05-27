import Link from 'next/link';
import { categories } from '@/data/categories';
import { areas } from '@/data/areas';
import { SITE_NAME } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-ink-100 bg-ink-50/60">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
                </svg>
              </span>
              <span className="font-display text-base font-extrabold text-ink-900">{SITE_NAME}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-ink-600">
              An independent directory of AC repair, installation and maintenance providers across Dubai. Vetted listings,
              transparent ratings, no pay-to-rank.
            </p>
            <div className="mt-5 flex gap-2">
              <Link href="/submit" className="btn-ghost">List your business</Link>
              <Link href="/about" className="btn-ghost">How we vet</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-900">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink-600">
              {categories.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link href={`/categories/${c.slug}`} className="hover:text-ink-900">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-900">Popular areas</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink-600">
              {areas.slice(0, 8).map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="hover:text-ink-900">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-900">Directory</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink-600">
              <li><Link href="/companies" className="hover:text-ink-900">All companies</Link></li>
              <li><Link href="/categories" className="hover:text-ink-900">Browse by service</Link></li>
              <li><Link href="/areas" className="hover:text-ink-900">Browse by area</Link></li>
              <li><Link href="/blog" className="hover:text-ink-900">Guides &amp; advice</Link></li>
              <li><Link href="/about" className="hover:text-ink-900">About</Link></li>
              <li><Link href="/submit" className="hover:text-ink-900">Submit a listing</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-100 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {year} {SITE_NAME}. Independent directory — not affiliated with DEWA or Dubai Municipality.
          </p>
          <p className="text-xs text-ink-500">
            Listings are independently submitted. Verify licences before any work.
          </p>
        </div>
      </div>
    </footer>
  );
}
