import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Icon } from '@/components/Icon';
import { pageMetadata } from '@/lib/seo';
import { SITE_NAME } from '@/lib/utils';

export const metadata: Metadata = pageMetadata({
  title: 'About — How We Vet AC Companies',
  description:
    'An independent directory of AC service providers in Dubai. Here is how we vet listings, calculate rankings and avoid pay-to-rank.',
  path: '/about',
});

const principles = [
  {
    icon: 'shield',
    title: 'No pay-to-rank',
    body: 'Default rankings are based on review volume, licence status and response times. Featured placements are clearly marked and never affect the default order.',
  },
  {
    icon: 'check',
    title: 'Licence verification',
    body: 'Verified listings carry an explicit DEWA contractor licence reference. Anything else is shown as unverified — you’ll see the badge clearly.',
  },
  {
    icon: 'star',
    title: 'Aggregated reviews',
    body: 'Ratings combine public review sources. We do not host reviews directly — and we do not accept compensation to remove or hide negative ones.',
  },
  {
    icon: 'clock',
    title: 'Real response data',
    body: 'Response time windows are based on stated commitments plus periodic mystery-shop calls during summer peaks.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`About ${SITE_NAME}`}
        description="An independent, vendor-neutral directory built to make finding good AC services in Dubai less stressful."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />
      <div className="container py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-ink-700">
              Finding a trustworthy AC company in Dubai is harder than it should be. There are thousands of providers,
              quality varies enormously, and the worst time to find out is when your apartment is at 36°C and the indoor
              unit is dripping water onto the floor.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              {SITE_NAME} exists to make that decision less stressful. We focus on a single market — Dubai — and a single
              question: <em>which AC company should you call?</em>
            </p>

            <h2 className="mt-10 font-display text-xl font-bold text-ink-900">How we vet listings</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {principles.map((p) => (
                <li key={p.title} className="card flex flex-col gap-3 p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink-900">{p.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-xl font-bold text-ink-900">How rankings work</h2>
            <p className="mt-3 leading-relaxed text-ink-700">
              Each listing has a composite score blending: aggregate rating (40%), review volume (25%), licence and certification
              status (20%), and stated response time (15%). The formula is intentionally simple and not negotiable — operators
              cannot pay to influence it.
            </p>

            <h2 className="mt-10 font-display text-xl font-bold text-ink-900">What we’re not</h2>
            <ul className="mt-3 space-y-2 text-ink-700">
              <li className="flex items-start gap-2"><Icon name="check" className="mt-1 h-4 w-4 text-emerald-600" /> Not a marketplace — we never take a cut of your booking.</li>
              <li className="flex items-start gap-2"><Icon name="check" className="mt-1 h-4 w-4 text-emerald-600" /> Not a lead-gen broker — your contact details stay with you.</li>
              <li className="flex items-start gap-2"><Icon name="check" className="mt-1 h-4 w-4 text-emerald-600" /> Not affiliated with DEWA, Dubai Municipality or any contractor body.</li>
            </ul>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="card p-6">
                <h3 className="font-display text-base font-bold text-ink-900">Run an AC business?</h3>
                <p className="mt-2 text-sm text-ink-600">
                  Submit your company to be considered for inclusion. We review every submission manually.
                </p>
                <Link href="/submit" className="btn-primary mt-4 w-full justify-center">
                  Submit a listing
                </Link>
              </div>
              <div className="card p-6">
                <h3 className="font-display text-base font-bold text-ink-900">Spot an error?</h3>
                <p className="mt-2 text-sm text-ink-600">
                  Email <a className="font-semibold text-brand-700" href="mailto:edits@ac-services-dubai.example">edits@ac-services-dubai.example</a> and we’ll review within 48 hours.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
