export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingMinutes: number;
  author: string;
  category: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-often-should-you-service-your-ac-in-dubai',
    title: 'How often should you service your AC in Dubai?',
    excerpt:
      'A practical schedule for split, ducted and central AC systems in Dubai’s climate — and the warning signs that mean you should book sooner.',
    publishedAt: '2025-10-12',
    readingMinutes: 6,
    author: 'Editorial team',
    category: 'Maintenance',
    body: `Dubai’s summer puts AC systems under stress for 6–7 months a year. Most manufacturer guidance is written for temperate climates, so local servicing intervals should be tighter.

## Recommended cadence

- **Split systems (apartments):** Every 4–6 months. One service before summer (March–April) and another mid-summer (July–August).
- **Ducted villa systems:** Every 3–4 months during summer; once during the cooler season for duct inspection.
- **Central chillers:** Quarterly inspections plus an annual deep service.

## Warning signs you should book sooner

- Cooling has weakened in the last 2 weeks
- Water dripping from the indoor unit
- Musty smell when the unit starts
- Ice forming on copper pipework
- Sudden jump in DEWA bill

Most providers in this directory offer free site surveys before committing you to a contract.`,
  },
  {
    slug: 'choosing-between-ac-repair-and-replacement',
    title: 'When to repair vs replace an old AC unit',
    excerpt:
      'A simple cost rule of thumb plus a checklist of failure modes that signal it’s time to replace rather than keep fixing.',
    publishedAt: '2025-09-28',
    readingMinutes: 5,
    author: 'Editorial team',
    category: 'Buying advice',
    body: `If a quoted repair costs more than 40% of a comparable new unit, replacement is usually the better long-term choice. Dubai’s heat means inefficient units quickly pay back the cost of replacement in energy savings.

## Red flags pointing to replacement

- Compressor failure on a unit older than 8 years
- Refrigerant leaks that recur within 12 months
- Repeated gas top-ups
- Sheet-metal corrosion on outdoor unit
- The unit uses R-22 refrigerant (being phased out)

## When repair makes sense

- Unit is under 5 years old
- Faults are electrical (capacitor, contactor, fan motor)
- Cooling is otherwise strong
- DEWA bill has not crept upward year-on-year`,
  },
  {
    slug: 'duct-cleaning-checklist-for-dubai-villas',
    title: 'Duct cleaning checklist for Dubai villas',
    excerpt:
      'What a thorough duct cleaning service should include, what to ask providers, and how to verify the work afterwards.',
    publishedAt: '2025-09-14',
    readingMinutes: 7,
    author: 'Editorial team',
    category: 'Guides',
    body: `Villa duct systems collect dust, gypsum particles and organic build-up faster than most owners expect. A proper clean takes a half day for a 3-bedroom villa and should leave you with photo evidence.

## What to expect

1. Inspection of all return and supply registers
2. HEPA vacuum extraction at the air handler
3. Mechanical brushing of accessible duct runs
4. Sterilisation pass with anti-microbial spray
5. Filter replacement and AHU coil rinse

## Questions to ask before booking

- Will you provide before/after photos of each register?
- Do you remove and clean the AHU coil?
- Is sterilisation included or charged separately?
- What chemicals are used — and are they pet/child safe?`,
  },
  {
    slug: 'understanding-ac-gas-types-r22-r410a-r32',
    title: 'R-22, R-410A and R-32 — which gas does your AC use?',
    excerpt:
      'Quick guide to the three refrigerants you’ll encounter in Dubai homes and offices, plus what each top-up should cost.',
    publishedAt: '2025-08-30',
    readingMinutes: 4,
    author: 'Editorial team',
    category: 'Technical',
    body: `Refrigerant type matters because it affects cost, availability and the long-term value of your unit.

## R-22 (HCFC)

Older units (pre-2015 typically). Being phased out globally. If your unit needs R-22 top-ups it is approaching end of life — start budgeting for replacement.

## R-410A (HFC)

Standard for most splits installed between 2015 and 2022. Widely available, mid-priced.

## R-32

Newer, more efficient, lower GWP. Found in most premium units sold since 2022. Top-ups are cheaper per kg but require qualified handling.

You can find the refrigerant type on the silver sticker on the outdoor unit.`,
  },
  {
    slug: 'reducing-your-dewa-bill-with-ac-tuning',
    title: '7 ways to reduce your DEWA bill with AC tuning',
    excerpt:
      'Practical adjustments — most free or low-cost — that can shave 10–25% off your cooling bill across a Dubai summer.',
    publishedAt: '2025-08-08',
    readingMinutes: 6,
    author: 'Editorial team',
    category: 'Energy',
    body: `Cooling is typically 60–70% of a Dubai household’s DEWA bill. Small adjustments compound across a long summer.

1. **Set the thermostat to 24°C** — every degree below adds 6–8% to consumption.
2. **Clean filters monthly** during summer.
3. **Service before summer**, not during it.
4. **Seal duct leaks** in villa systems.
5. **Switch to a programmable thermostat** for set-back during work hours.
6. **Shade outdoor condensers** if exposed to direct sun.
7. **Audit for refrigerant leaks** if cooling has weakened.`,
  },
  {
    slug: 'choosing-an-ac-installer-in-dubai',
    title: 'How to choose an AC installer in Dubai',
    excerpt:
      'The questions to ask, the paperwork to verify, and the warranty terms that matter when installing new AC units.',
    publishedAt: '2025-07-22',
    readingMinutes: 8,
    author: 'Editorial team',
    category: 'Guides',
    body: `Installation quality determines a unit’s long-term reliability more than the brand itself. A great unit poorly installed will fail early; a mid-range unit installed well can run problem-free for a decade.

## Verify before signing

- DEWA contractor licence
- Dubai Municipality permit
- Public liability insurance
- Workmanship warranty (12 months minimum)
- Unit warranty registration handled on your behalf

## Red flags

- No site survey before quoting
- Quote significantly below market average
- Cash-only payment
- Reluctance to provide written warranty`,
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
