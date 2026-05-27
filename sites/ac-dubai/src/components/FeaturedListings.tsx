import Link from 'next/link';
import { featuredCompanies } from '@/data/companies';
import { ListingCard } from './ListingCard';

export function FeaturedListings() {
  const featured = featuredCompanies(6);
  return (
    <section className="container py-16 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-eyebrow">Top-rated providers</p>
          <h2 className="section-title mt-2">Featured AC companies this month</h2>
          <p className="mt-2 max-w-2xl text-ink-600">
            Ranked by review volume, response times and licence status — refreshed monthly.
          </p>
        </div>
        <Link href="/companies" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:inline-flex">
          View all companies →
        </Link>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((c) => (
          <ListingCard key={c.slug} company={c} />
        ))}
      </div>
    </section>
  );
}
