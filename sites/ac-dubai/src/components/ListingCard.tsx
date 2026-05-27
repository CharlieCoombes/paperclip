import Link from 'next/link';
import type { Company } from '@/data/companies';
import { getCategory } from '@/data/categories';
import { getArea } from '@/data/areas';
import { Icon } from './Icon';
import { formatRating } from '@/lib/utils';

export function ListingCard({ company, variant = 'default' }: { company: Company; variant?: 'default' | 'compact' }) {
  const primaryCategory = getCategory(company.categorySlugs[0]);
  const primaryArea = getArea(company.areaSlugs[0]);
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="card group flex flex-col gap-4 p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/15 to-brand-700/15 text-brand-700 ring-1 ring-brand-100"
          >
            <Icon name={primaryCategory?.icon ?? 'snowflake'} className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-base font-bold text-ink-900 group-hover:text-brand-700">
              {company.name}
            </h3>
            <p className="mt-0.5 text-xs text-ink-500">{primaryArea?.name} · {primaryCategory?.name}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="inline-flex items-center gap-1 rounded-md bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700">
            <Icon name="star" className="h-3.5 w-3.5" />
            {formatRating(company.rating)}
          </span>
          <span className="text-[10px] font-medium text-ink-400">{company.reviewCount} reviews</span>
        </div>
      </div>

      {variant !== 'compact' && (
        <p className="line-clamp-2 text-sm text-ink-600">{company.tagline}</p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {company.emergency24x7 && (
          <span className="chip-accent">
            <Icon name="siren" className="h-3 w-3" />
            24/7
          </span>
        )}
        {company.verified && (
          <span className="chip-green">
            <Icon name="check" className="h-3 w-3" />
            Verified
          </span>
        )}
        {company.featured && <span className="chip-brand">Featured</span>}
        <span className="chip">{company.priceRange}</span>
        <span className="chip">Since {company.yearFounded}</span>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-3 text-xs text-ink-500">
        <span className="inline-flex items-center gap-1">
          <Icon name="pin" className="h-3.5 w-3.5" />
          {company.areaSlugs.length} {company.areaSlugs.length === 1 ? 'area' : 'areas'} covered
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-brand-700 group-hover:text-brand-800">
          View profile
          <Icon name="arrowRight" className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
