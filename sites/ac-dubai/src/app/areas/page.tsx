import type { Metadata } from 'next';
import Link from 'next/link';
import { areas } from '@/data/areas';
import { companiesInArea } from '@/data/companies';
import { Icon } from '@/components/Icon';
import { PageHeader } from '@/components/PageHeader';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'AC Services by Area in Dubai',
  description: `Find AC repair, installation and maintenance providers across ${areas.length} Dubai neighbourhoods — Marina, JLT, Downtown, Business Bay and more.`,
  path: '/areas',
});

export default function AreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coverage"
        title="AC services by area in Dubai"
        description="Pick your neighbourhood to see providers covering your community."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Areas' }]}
      />
      <div className="container py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => {
            const count = companiesInArea(a.slug).length;
            return (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="card group p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon name="pin" className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
                      {a.name}
                    </h2>
                  </div>
                  <span className="rounded-full bg-ink-100 px-2 py-0.5 text-xs font-semibold text-ink-700">
                    {count}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-600">{a.blurb}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
