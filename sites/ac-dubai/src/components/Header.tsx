import Link from 'next/link';
import { SITE_NAME } from '@/lib/utils';

const navLinks = [
  { href: '/companies', label: 'All Companies' },
  { href: '/categories', label: 'Services' },
  { href: '/areas', label: 'Areas' },
  { href: '/blog', label: 'Guides' },
  { href: '/about', label: 'About' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-100/80 bg-white/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-extrabold text-ink-900">{SITE_NAME}</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-ink-400">Directory · UAE</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/submit" className="btn-ghost hidden sm:inline-flex">
            List your business
          </Link>
          <Link href="/companies" className="btn-primary">
            Find an AC company
          </Link>
        </div>
      </div>
    </header>
  );
}
