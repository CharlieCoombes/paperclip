import type { Metadata } from 'next';
import { companies } from '@/data/companies';
import { categories } from '@/data/categories';
import { areas } from '@/data/areas';
import { ListingCard } from '@/components/ListingCard';
import { PageHeader } from '@/components/PageHeader';
import { SearchBar } from '@/components/SearchBar';
import Link from 'next/link';
import { pageMetadata, breadcrumbLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'All AC Companies in Dubai',
  description: `Browse ${companies.length}+ AC repair, installation and maintenance companies across Dubai. Compare ratings, response times and licences.`,
  path: '/companies',
});

type SearchParams = { q?: string; area?: string; category?: string };

function filterCompanies({ q, area, category }: SearchParams) {
  return companies.filter((c) => {
    if (area) {
      const matchArea = areas.some(
        (a) => a.slug === area.toLowerCase() || a.name.toLowerCase().includes(area.toLowerCase())
      );
      if (matchArea) {
        const matching = areas.find(
          (a) => a.slug === area.toLowerCase() || a.name.toLowerCase().includes(area.toLowerCase())
        );
        if (matching && !c.areaSlugs.includes(matching.slug)) return false;
      } else {
        if (!c.areaSlugs.some((s) => s.includes(area.toLowerCase()))) return false;
      }
    }
    if (category) {
      if (!c.categorySlugs.includes(category)) return false;
    }
    if (q) {
      const haystack = [
        c.name,
        c.tagline,
        c.description,
        ...c.features,
        ...c.categorySlugs.map((s) => categories.find((cat) => cat.slug === s)?.name ?? ''),
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(q.toLowerCase())) return false;
    }
    return true;
  });
}

export default function CompaniesPage({ searchParams }: { searchParams: SearchParams }) {
  const filtered = filterCompanies(searchParams);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', path: '/' },
              { name: 'Companies', path: '/companies' },
            ])
          ),
        }}
      />
      <PageHeader
        eyebrow="Directory"
        title="All AC companies in Dubai"
        description={`Browse all ${companies.length} listed providers. Filter by service or area, or run a free-text search.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Companies' }]}
      />

      <div className="container py-10">
        <SearchBar />

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-500">Service</h2>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      href="/companies"
                      className={`block rounded-md px-3 py-1.5 text-sm ${!searchParams.category ? 'bg-ink-900 text-white' : 'text-ink-700 hover:bg-ink-50'}`}
                    >
                      All services
                    </Link>
                  </li>
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/companies?category=${c.slug}`}
                        className={`block rounded-md px-3 py-1.5 text-sm ${searchParams.category === c.slug ? 'bg-ink-900 text-white' : 'text-ink-700 hover:bg-ink-50'}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-500">Areas</h2>
                <ul className="mt-3 grid grid-cols-2 gap-1 lg:grid-cols-1">
                  {areas.slice(0, 12).map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/companies?area=${a.slug}`}
                        className="block rounded-md px-3 py-1.5 text-sm text-ink-700 hover:bg-ink-50"
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/areas" className="mt-2 inline-block px-3 text-xs font-semibold text-brand-700">
                  See all areas →
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-ink-600">
                <span className="font-semibold text-ink-900">{filtered.length}</span> {filtered.length === 1 ? 'company' : 'companies'}
                {searchParams.area && (
                  <>
                    {' '}in <span className="font-semibold text-ink-900">{searchParams.area}</span>
                  </>
                )}
                {searchParams.category && (
                  <>
                    {' '}for <span className="font-semibold text-ink-900">{categories.find((c) => c.slug === searchParams.category)?.name ?? searchParams.category}</span>
                  </>
                )}
              </p>
              <div className="text-xs text-ink-500">
                Sorted by rating &amp; reviews
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="card p-10 text-center">
                <p className="font-display text-lg font-bold text-ink-900">No companies match your filters</p>
                <p className="mt-2 text-sm text-ink-600">Try widening the area or removing the search query.</p>
                <Link href="/companies" className="btn-ghost mt-5">Reset filters</Link>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {filtered
                  .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
                  .map((c) => (
                    <ListingCard key={c.slug} company={c} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
