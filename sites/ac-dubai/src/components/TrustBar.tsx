import { Icon } from './Icon';

const items = [
  { icon: 'check', label: 'Licence-verified providers' },
  { icon: 'star', label: 'Independent reviews' },
  { icon: 'clock', label: 'Response times published' },
  { icon: 'shield', label: 'No pay-to-rank' },
];

export function TrustBar() {
  return (
    <section className="border-y border-ink-100 bg-white">
      <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm text-ink-600">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-700">
              <Icon name={item.icon} className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
