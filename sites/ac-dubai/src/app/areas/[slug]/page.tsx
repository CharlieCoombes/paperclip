import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { areas, getArea } from '@/data/areas';
import { companiesInArea } from '@/data/companies';
import { categories } from '@/data/categories';
import { ListingCard } from '@/components/ListingCard';
import { Icon } from '@/components/Icon';
import { PageHeader } from '@/components/PageHeader';
import { breadcrumbLd, pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const a = getArea(params.slug);
  if (!a) return {};
  const count = companiesInArea(a.slug).length;
  return pageMetadata({
    title: `AC Services in ${a.name} — ${count} Local Providers`,
    description: `Find AC repair, installation and maintenance providers covering ${a.name}, Dubai. ${count} listed companies. Ratings and licences shown.`,
    path: `/areas/${a.slug}`,
  });
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const a = getArea(params.slug);
  if (!a) notFound();

  const providers = companiesInArea(a.slug).sort((x, y) => y.rating - x.rating || y.reviewCount - x.reviewCount);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', path: '/' },
              { name: 'Areas', path: '/areas' },
              { name: a.name, path: `/areas/${a.slug}` },
            ])
          ),
        }}
      />
      <PageHeader
        eyebrow="Area"
        title={`AC services in ${a.name}, Dubai`}
        description={a.blurb}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Areas', href: '/areas' },
          { label: a.name },
        ]}
      />

      <div className="container py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-500">Filter by service</h2>
                <ul className="mt-3 space-y-1">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/companies?area=${a.slug}&category=${c.slug}`}
                        className="block rounded-md px-3 py-1.5 text-sm text-ink-700 hover:bg-ink-50"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-500">Other areas</h2>
                <ul className="mt-3 space-y-1">
                  {areas
                    .filter((x) => x.slug !== a.slug)
                    .slice(0, 10)
                    .map((x) => (
                      <li key={x.slug}>
                        <Link
                          href={`/areas/${x.slug}`}
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
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-display text-base font-bold text-ink-900">
                  {providers.length} {providers.length === 1 ? 'company covers' : 'companies cover'} {a.name}
                </p>
                <p className="text-xs text-ink-500">Ranked by rating &amp; review volume</p>
              </div>
            </div>

            {providers.length === 0 ? (
              <div className="card mt-6 p-10 text-center">
                <p className="font-display text-lg font-bold text-ink-900">No providers listed yet</p>
                <p className="mt-2 text-sm text-ink-600">Help us grow the directory — know a great AC company in {a.name}?</p>
                <Link href="/submit" className="btn-ghost mt-5">Submit a listing</Link>
              </div>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {providers.map((p) => (
                  <ListingCard key={p.slug} company={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
