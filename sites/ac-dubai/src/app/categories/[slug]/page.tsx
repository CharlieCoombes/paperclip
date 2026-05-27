import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getCategory } from '@/data/categories';
import { companiesInCategory } from '@/data/companies';
import { areas } from '@/data/areas';
import { ListingCard } from '@/components/ListingCard';
import { Icon } from '@/components/Icon';
import { PageHeader } from '@/components/PageHeader';
import { breadcrumbLd, pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const c = getCategory(params.slug);
  if (!c) return {};
  const count = companiesInCategory(c.slug).length;
  return pageMetadata({
    title: `${c.name} in Dubai — ${count} Trusted Providers`,
    description: `${c.short} Compare ${count} ${c.name.toLowerCase()} providers across Dubai. Ratings, response times and licences shown.`,
    path: `/categories/${c.slug}`,
  });
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const c = getCategory(params.slug);
  if (!c) notFound();

  const providers = companiesInCategory(c.slug).sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/categories' },
              { name: c.name, path: `/categories/${c.slug}` },
            ])
          ),
        }}
      />
      <PageHeader
        eyebrow="Service"
        title={`${c.name} in Dubai`}
        description={c.description}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/categories' },
          { label: c.name },
        ]}
      />

      <div className="container py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-500">Filter by area</h2>
                <ul className="mt-3 space-y-1">
                  {areas.slice(0, 14).map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/companies?category=${c.slug}&area=${a.slug}`}
                        className="block rounded-md px-3 py-1.5 text-sm text-ink-700 hover:bg-ink-50"
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-500">Other services</h2>
                <ul className="mt-3 space-y-1">
                  {categories
                    .filter((x) => x.slug !== c.slug)
                    .slice(0, 8)
                    .map((x) => (
                      <li key={x.slug}>
                        <Link
                          href={`/categories/${x.slug}`}
                          className="block rounded-md px-3 py-1.5 text-sm text-ink-700 hover:bg-ink-50"
                        >
                          {x.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="card flex flex-wrap items-center gap-4 p-5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-display text-base font-bold text-ink-900">{providers.length} {c.name.toLowerCase()} providers</p>
                <p className="text-xs text-ink-500">Ranked by rating &amp; review volume</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {providers.map((p) => (
                <ListingCard key={p.slug} company={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
