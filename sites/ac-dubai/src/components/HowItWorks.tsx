import { Icon } from './Icon';

const steps = [
  {
    icon: 'search',
    title: 'Search by service or area',
    body: 'Filter by what you need (repair, install, deep clean) and where you are. Results show only providers covering your neighbourhood.',
  },
  {
    icon: 'star',
    title: 'Compare ratings & response times',
    body: 'Each listing shows review counts, licence status, typical response window and whether 24/7 emergency cover is offered.',
  },
  {
    icon: 'phone',
    title: 'Contact directly',
    body: 'Call, WhatsApp or email the company straight from the listing. No platform fees, no booking middleman.',
  },
];

export function HowItWorks() {
  return (
    <section className="container py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="section-eyebrow">How it works</p>
        <h2 className="section-title mt-2">From hot apartment to cold air — in three steps</h2>
      </div>
      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="card relative p-6">
            <span className="absolute -top-3 left-6 inline-flex h-7 items-center rounded-full bg-ink-900 px-3 text-xs font-bold uppercase tracking-widest text-white">
              Step {i + 1}
            </span>
            <span className="mt-1 grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
              <Icon name={step.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{step.title}</h3>
            <p className="mt-2 text-sm text-ink-600">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
