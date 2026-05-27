import { faqLd } from '@/lib/seo';

const faqs = [
  {
    q: 'How much does AC repair cost in Dubai?',
    a: 'A standard service visit typically ranges from AED 150–400 for diagnostics and minor fixes. Gas refilling adds AED 250–600 depending on refrigerant type. Compressor or PCB replacements are quoted separately. Providers in this directory publish their pricing structures where available.',
  },
  {
    q: 'How often should I service my AC in Dubai?',
    a: 'For Dubai’s climate, a 4–6 month service interval is recommended for split systems. Villa ducted systems benefit from quarterly checks during summer. A pre-summer service in March–April catches most issues before they become emergencies.',
  },
  {
    q: 'What should I look for in an AC company?',
    a: 'Check DEWA contractor licence, Dubai Municipality permit, written warranty terms (12 months minimum on workmanship), and clear pricing. Avoid cash-only operators and quotes that don’t include a site survey.',
  },
  {
    q: 'Do AC companies in Dubai offer 24/7 emergency service?',
    a: 'Many do — look for the “24/7” tag on listings. Typical emergency response time across central Dubai is 60–120 minutes during summer peaks. Out-of-hours call-out fees apply with most providers.',
  },
  {
    q: 'Is duct cleaning necessary?',
    a: 'For villas with central AC systems, yes — once every 18–24 months. Apartments with split units rarely need full duct cleaning, but indoor unit chemical wash is recommended twice a year.',
  },
  {
    q: 'How is this directory funded?',
    a: 'Through optional featured-listing placements clearly marked as such. Ranking in default search results is based on review volume, licence status and response times — never paid placement.',
  },
];

export function FaqSection() {
  return (
    <section className="container py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(faqs)) }}
      />
      <div className="grid gap-10 lg:grid-cols-3">
        <div>
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title mt-2">Common questions about AC services in Dubai</h2>
          <p className="mt-3 text-ink-600">
            Quick answers to what most people ask before booking. Need more depth? Browse the&nbsp;
            <a href="/blog" className="font-semibold text-brand-700 hover:text-brand-800">guides</a>.
          </p>
        </div>
        <div className="lg:col-span-2">
          <ul className="space-y-3">
            {faqs.map((f) => (
              <li key={f.q} className="card p-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-900">
                    {f.q}
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-ink-100 text-ink-600 transition-transform group-open:rotate-45">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
