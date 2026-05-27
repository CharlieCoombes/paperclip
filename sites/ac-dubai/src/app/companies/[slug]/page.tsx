import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { companies, getCompany, companiesInArea, companiesInCategory } from '@/data/companies';
import { categories, getCategory } from '@/data/categories';
import { areas, getArea } from '@/data/areas';
import { Icon } from '@/components/Icon';
import { ListingCard } from '@/components/ListingCard';
import { PageHeader } from '@/components/PageHeader';
import { breadcrumbLd, localBusinessLd, pageMetadata } from '@/lib/seo';
import { formatRating } from '@/lib/utils';

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const c = getCompany(params.slug);
  if (!c) return {};
  return pageMetadata({
    title: `${c.name} — ${c.tagline}`,
    description: `${c.name}: ${c.tagline} Rated ${formatRating(c.rating)}/5 from ${c.reviewCount} reviews. Servicing ${c.areaSlugs.length} Dubai areas.`,
    path: `/companies/${c.slug}`,
  });
}

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const c = getCompany(params.slug);
  if (!c) notFound();

  const companyCategories = c.categorySlugs.map((s) => getCategory(s)).filter(Boolean);
  const companyAreas = c.areaSlugs.map((s) => getArea(s)).filter(Boolean);

  // Related: top in same primary category, exclude self
  const related = companiesInCategory(c.categorySlugs[0])
    .filter((x) => x.slug !== c.slug)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd(c)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', path: '/' },
              { name: 'Companies', path: '/companies' },
              { name: c.name, path: `/companies/${c.slug}` },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow={companyCategories[0]?.name}
        title={c.name}
        description={c.tagline}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Companies', href: '/companies' },
          { label: c.name },
        ]}
      />

      <div className="container py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="card p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-accent-50 px-2.5 py-1 text-sm font-semibold text-accent-700">
                  <Icon name="star" className="h-4 w-4" />
                  {formatRating(c.rating)} · {c.reviewCount} reviews
                </span>
                {c.verified && (
                  <span className="chip-green">
                    <Icon name="check" className="h-3.5 w-3.5" />
                    Verified provider
                  </span>
                )}
                {c.emergency24x7 && (
                  <span className="chip-accent">
                    <Icon name="siren" className="h-3.5 w-3.5" />
                    24/7 emergency
                  </span>
                )}
                <span className="chip">Since {c.yearFounded}</span>
                <span className="chip">Price: {c.priceRange}</span>
              </div>

              <h2 className="mt-6 font-display text-xl font-bold text-ink-900">About {c.name}</h2>
              <p className="mt-3 text-ink-700">{c.description}</p>

              <h3 className="mt-8 font-display text-base font-bold text-ink-900">Services offered</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {companyCategories.map((cat) => (
                  <li key={cat!.slug}>
                    <Link href={`/categories/${cat!.slug}`} className="flex items-start gap-3 rounded-lg p-2 hover:bg-ink-50">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                        <Icon name={cat!.icon} className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink-900">{cat!.name}</span>
                        <span className="block text-xs text-ink-500">{cat!.short}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-display text-base font-bold text-ink-900">Highlights</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {c.certifications.length > 0 && (
                <>
                  <h3 className="mt-8 font-display text-base font-bold text-ink-900">Certifications</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.certifications.map((cert) => (
                      <span key={cert} className="chip-brand">
                        <Icon name="shield" className="h-3.5 w-3.5" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <h3 className="mt-8 font-display text-base font-bold text-ink-900">Areas covered</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {companyAreas.map((a) => (
                  <Link
                    key={a!.slug}
                    href={`/areas/${a!.slug}`}
                    className="chip hover:bg-ink-200"
                  >
                    <Icon name="pin" className="h-3.5 w-3.5" />
                    {a!.name}
                  </Link>
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-xl font-bold text-ink-900">
                  Similar {companyCategories[0]?.name} providers
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => (
                    <ListingCard key={r.slug} company={r} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="card p-6">
                <h2 className="font-display text-base font-bold text-ink-900">Contact {c.name}</h2>
                <p className="mt-1 text-xs text-ink-500">Direct contact — no booking fees.</p>

                <div className="mt-4 space-y-2">
                  <a
                    href={`tel:${c.phone.replace(/\s/g, '')}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-3 text-sm font-semibold text-white hover:bg-ink-800"
                  >
                    <Icon name="phone" className="h-4 w-4" />
                    Call {c.phone}
                  </a>
                  {c.whatsapp && (
                    <a
                      href={`https://wa.me/${c.whatsapp.replace(/[^\d]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      <Icon name="whatsapp" className="h-4 w-4" />
                      WhatsApp
                    </a>
                  )}
                  <a
                    href={`mailto:${c.email}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-ink-800 ring-1 ring-ink-200 hover:bg-ink-50"
                  >
                    <Icon name="mail" className="h-4 w-4" />
                    Email
                  </a>
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-ink-800 ring-1 ring-ink-200 hover:bg-ink-50"
                  >
                    Visit website
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </a>
                </div>

                <dl className="mt-6 space-y-3 border-t border-ink-100 pt-5 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-ink-400">Address</dt>
                      <dd className="text-ink-700">{c.address}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-ink-400">Hours</dt>
                      <dd className="text-ink-700">{c.hours}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="verified" className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-ink-400">Founded</dt>
                      <dd className="text-ink-700">{c.yearFounded}</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">Tip</p>
                <p className="mt-2 text-sm text-ink-700">
                  Always confirm DEWA contractor licence before any major install. Ask for a written quote and warranty terms in advance.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
