import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Icon } from '@/components/Icon';
import { categories } from '@/data/categories';
import { areas } from '@/data/areas';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'List Your AC Business in Dubai',
  description:
    'Submit your AC company for inclusion in our independent Dubai directory. Free listings, manual review, no pay-to-rank.',
  path: '/submit',
});

export default function SubmitPage() {
  return (
    <>
      <PageHeader
        eyebrow="For providers"
        title="List your AC business in Dubai"
        description="Free listings. Manual review. We’ll get back to you within 5 business days."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Submit' }]}
      />
      <div className="container py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <form className="card space-y-6 p-8">
              <fieldset>
                <legend className="font-display text-base font-bold text-ink-900">Business basics</legend>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Business name" name="name" required />
                  <Field label="Year founded" name="year" type="number" />
                  <Field label="Owner / contact name" name="owner" required />
                  <Field label="Designation" name="designation" placeholder="e.g. Operations Manager" />
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-display text-base font-bold text-ink-900">Contact details</legend>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="WhatsApp" name="whatsapp" type="tel" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Website" name="website" type="url" />
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-display text-base font-bold text-ink-900">Services</legend>
                <p className="mt-1 text-xs text-ink-500">Tick everything you actively offer in the Dubai market.</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {categories.map((c) => (
                    <label key={c.slug} className="flex items-center gap-2 rounded-lg border border-ink-100 p-2.5 text-sm text-ink-700 hover:border-brand-300">
                      <input type="checkbox" name="services" value={c.slug} className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
                      {c.name}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-display text-base font-bold text-ink-900">Areas covered</legend>
                <p className="mt-1 text-xs text-ink-500">Where do your teams typically work?</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {areas.map((a) => (
                    <label key={a.slug} className="flex items-center gap-2 rounded-lg border border-ink-100 p-2.5 text-sm text-ink-700 hover:border-brand-300">
                      <input type="checkbox" name="areas" value={a.slug} className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
                      {a.name}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-display text-base font-bold text-ink-900">Operations</legend>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Operating hours" name="hours" placeholder="e.g. Sun–Sat · 8:00–22:00" />
                  <Field label="DEWA contractor licence #" name="dewa" />
                  <Field label="Dubai Municipality permit #" name="permit" />
                  <Field label="Typical price tier" name="priceTier" placeholder="$ · $$ · $$$" />
                </div>
                <label className="mt-4 flex items-center gap-2 text-sm text-ink-700">
                  <input type="checkbox" name="emergency24x7" className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-500" />
                  Offers 24/7 emergency response
                </label>
              </fieldset>

              <fieldset>
                <legend className="font-display text-base font-bold text-ink-900">About your business</legend>
                <textarea
                  name="description"
                  rows={5}
                  placeholder="In 2–3 sentences — what makes your company a good choice for Dubai customers?"
                  className="mt-4 w-full rounded-lg border border-ink-200 p-3 text-sm text-ink-800 outline-none placeholder:text-ink-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </fieldset>

              <div className="flex flex-col items-start gap-3 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-ink-500">Free submission. We verify all listings before publishing.</p>
                <button type="submit" className="btn-primary">
                  Submit listing
                  <Icon name="arrowRight" className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="card p-6">
                <h3 className="font-display text-base font-bold text-ink-900">What happens next?</h3>
                <ol className="mt-4 space-y-3 text-sm text-ink-700">
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">1</span>
                    We review your submission and verify licence references.
                  </li>
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">2</span>
                    Our team may call to mystery-shop your stated response times.
                  </li>
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">3</span>
                    Approved listings go live with a Verified badge.
                  </li>
                </ol>
              </div>
              <div className="card p-6">
                <h3 className="font-display text-base font-bold text-ink-900">Featured placement</h3>
                <p className="mt-2 text-sm text-ink-600">
                  Optional. Featured listings appear at the top of category pages with a clear “Featured” label. Default rankings are never affected.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-ink-500">
        {label} {required && <span className="text-accent-500">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm text-ink-800 outline-none placeholder:text-ink-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}
