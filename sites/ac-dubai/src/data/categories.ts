export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    short: 'New unit fit-outs for homes, offices and villas.',
    description:
      'Specialists handling split, ducted, central and VRF installations across Dubai. Includes site survey, load calculation, mounting, copper piping, gas charging and commissioning.',
    icon: 'plug',
  },
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    short: 'Same-day diagnostics and fixes for any AC fault.',
    description:
      'From compressor failures to thermostat issues — repair providers tackle weak cooling, water leaks, ice build-up, electrical faults and unusual noises.',
    icon: 'wrench',
  },
  {
    slug: 'ac-maintenance',
    name: 'AC Maintenance',
    short: 'Routine servicing contracts to keep units efficient.',
    description:
      'Quarterly or biannual maintenance plans covering filter changes, coil checks, drain flushing, gas pressure tests and electrical inspections.',
    icon: 'gauge',
  },
  {
    slug: 'ac-cleaning',
    name: 'AC Cleaning & Sterilization',
    short: 'Deep cleaning of indoor units, coils and filters.',
    description:
      'Chemical wash, anti-bacterial sterilization and odour removal — recommended every 6 months in Dubai’s climate.',
    icon: 'sparkles',
  },
  {
    slug: 'duct-cleaning',
    name: 'Duct Cleaning',
    short: 'Removal of dust, debris and microbial build-up in ducts.',
    description:
      'High-pressure mechanical brushing and HEPA vacuum extraction of central AC ductwork — essential for villas and central-system apartments.',
    icon: 'wind',
  },
  {
    slug: 'chiller-services',
    name: 'Chiller Services',
    short: 'Maintenance and overhaul of chiller plants.',
    description:
      'Servicing of air-cooled and water-cooled chillers, condenser coil cleaning, refrigerant top-ups, and full annual maintenance contracts for towers and compounds.',
    icon: 'snowflake',
  },
  {
    slug: 'hvac-design',
    name: 'HVAC Design & Consultation',
    short: 'Load calculation and system design for new builds.',
    description:
      'Mechanical consultants providing heat load assessment, duct sizing, equipment selection, BMS specification and DEWA-compliant drawings.',
    icon: 'blueprint',
  },
  {
    slug: 'emergency-ac',
    name: 'Emergency AC Services',
    short: '24/7 callouts for total cooling failure.',
    description:
      'Round-the-clock teams for breakdowns during heatwaves. Typical response window: 60–120 minutes across central Dubai.',
    icon: 'siren',
  },
  {
    slug: 'commercial-ac',
    name: 'Commercial AC Services',
    short: 'Retail, F&B, warehouse and office cooling.',
    description:
      'Contract maintenance, FCU servicing and emergency support tailored to commercial operating hours and SLA requirements.',
    icon: 'building',
  },
  {
    slug: 'ac-gas-refilling',
    name: 'AC Gas Refilling',
    short: 'Leak detection and refrigerant top-up.',
    description:
      'R-22, R-410A and R-32 refilling with leak detection, vacuum pulling and post-charge pressure testing.',
    icon: 'flask',
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
