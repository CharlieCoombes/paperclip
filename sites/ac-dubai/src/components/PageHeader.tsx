import Link from 'next/link';
import { Icon } from './Icon';

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-ink-100 bg-gradient-to-b from-ink-50/60 to-white">
      <div className="container py-12">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-500">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-ink-900">{c.label}</Link>
                  ) : (
                    <span className="text-ink-700">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <Icon name="arrowRight" className="h-3 w-3 text-ink-300" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-ink-600">{description}</p>
        )}
      </div>
    </section>
  );
}
