import Link from 'next/link';
import { areas } from '@/data/areas';
import { companiesInArea } from '@/data/companies';
import { Icon } from './Icon';

export function AreaGrid() {
  return (
    <section className="bg-ink-50/60 py-16 sm:py-20">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow">Browse by area</p>
            <h2 className="section-title mt-2">AC companies near you in Dubai</h2>
            <p className="mt-2 max-w-2xl text-ink-600">
              Coverage spans {areas.length} neighbourhoods — from waterfront towers to villa communities.
            </p>
          </div>
          <Link href="/areas" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:inline-flex">
            See all areas →
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {areas.map((a) => {
            const count = companiesInArea(a.slug).length;
            return (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="card group flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-100">
                    <Icon name="pin" className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-ink-900 group-hover:text-brand-700">
                      {a.name}
                    </h3>
                    <p className="text-xs text-ink-500">{count} companies</p>
                  </div>
                </div>
                <Icon name="arrowRight" className="h-4 w-4 text-ink-300 group-hover:text-brand-700" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
