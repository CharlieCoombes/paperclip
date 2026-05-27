import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { Icon } from './Icon';
import { companies } from '@/data/companies';
import { categories } from '@/data/categories';
import { areas } from '@/data/areas';

const popularSearches = [
  { label: 'AC not cooling', q: 'AC not cooling' },
  { label: 'Gas refill', q: 'gas refill' },
  { label: 'Annual maintenance', q: 'maintenance' },
  { label: 'Duct cleaning', q: 'duct cleaning' },
  { label: '24/7 emergency', q: 'emergency' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-50">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-32 -z-0 h-[480px] bg-[radial-gradient(circle_at_30%_20%,rgba(49,159,255,0.18),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(251,107,19,0.12),transparent_55%)]"
      />
      <div className="container relative z-10 grid gap-12 pb-20 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7">
          <span className="chip-brand">
            <Icon name="verified" className="h-3.5 w-3.5" />
            Independent · {companies.length}+ vetted providers
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Find a trusted AC company in&nbsp;
            <span className="bg-gradient-to-r from-brand-700 to-accent-500 bg-clip-text text-transparent">
              Dubai
            </span>{' '}
            — in under a minute.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-600">
            Compare ratings, response times and certifications for AC repair, installation, maintenance, cleaning and emergency services across {areas.length}+ Dubai neighbourhoods.
          </p>
          <div className="mt-8">
            <SearchBar />
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-ink-500">
            <span className="font-medium uppercase tracking-widest">Popular:</span>
            {popularSearches.map((s) => (
              <Link
                key={s.q}
                href={`/companies?q=${encodeURIComponent(s.q)}`}
                className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-ink-100 hover:bg-white"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-ink-400">Companies</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink-900">{companies.length}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-ink-400">Services</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink-900">{categories.length}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-ink-400">Areas</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-ink-900">{areas.length}</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {/* Floating trust card */}
            <div className="card flex items-start gap-3 p-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                <Icon name="shield" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">DEWA-licence checked</p>
                <p className="mt-0.5 text-xs text-ink-500">Verified listings carry an explicit contractor licence reference.</p>
              </div>
            </div>
            <div className="card flex items-start gap-3 p-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-50 text-accent-700">
                <Icon name="clock" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">Response times shown</p>
                <p className="mt-0.5 text-xs text-ink-500">See typical arrival windows per area — not generic promises.</p>
              </div>
            </div>
            <div className="card flex items-start gap-3 p-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700">
                <Icon name="star" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">Real customer reviews</p>
                <p className="mt-0.5 text-xs text-ink-500">Aggregated from independent sources, not paid placement.</p>
              </div>
            </div>
            <div className="card flex items-start gap-3 p-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-ink-100 text-ink-700">
                <Icon name="phone" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">Direct contact</p>
                <p className="mt-0.5 text-xs text-ink-500">No middle layer — call or WhatsApp companies directly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
