import type { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { companiesInCategory } from '@/data/companies';
import { Icon } from '@/components/Icon';
import { PageHeader } from '@/components/PageHeader';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'AC Services in Dubai — Browse by Category',
  description: `Browse all ${categories.length} AC service categories — repair, installation, maintenance, cleaning, ducts, chillers and more.`,
  path: '/categories',
});

export default function CategoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Browse AC services by category"
        description="Pick the type of help you need — from a routine maintenance visit to a full system installation."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />
      <div className="container py-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const count = companiesInCategory(c.slug).length;
            return (
              <Link key={c.slug} href={`/categories/${c.slug}`} className="card group p-6">
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden
                    className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-700/10 text-brand-700 ring-1 ring-brand-100"
                  >
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700">
                    {count} {count === 1 ? 'company' : 'companies'}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">
                  {c.name}
                </h2>
                <p className="mt-2 text-sm text-ink-600">{c.short}</p>
                <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Browse providers
                  <Icon name="arrowRight" className="h-4 w-4" />
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
