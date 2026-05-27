import Link from 'next/link';
import { categories } from '@/data/categories';
import { companiesInCategory } from '@/data/companies';
import { Icon } from './Icon';

export function CategoryGrid() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-eyebrow">Browse by service</p>
          <h2 className="section-title mt-2">What kind of AC help do you need?</h2>
          <p className="mt-2 max-w-2xl text-ink-600">
            From a one-off repair to a full villa installation — pick the service and we’ll show providers in your area.
          </p>
        </div>
        <Link href="/categories" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:inline-flex">
          See all services →
        </Link>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((c) => {
          const count = companiesInCategory(c.slug).length;
          return (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="card group flex items-start gap-4 p-5"
            >
              <div
                aria-hidden
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-700/10 text-brand-700 ring-1 ring-brand-100 group-hover:from-brand-500/20 group-hover:to-brand-700/20"
              >
                <Icon name={c.icon} className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
                    {c.name}
                  </h3>
                  <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-semibold text-ink-600">
                    {count}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-ink-600">{c.short}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
