export type Area = {
  slug: string;
  name: string;
  blurb: string;
};

export const areas: Area[] = [
  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    blurb: 'High-rise apartments and hotels around Burj Khalifa and Dubai Mall.',
  },
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    blurb: 'Waterfront towers with split and central AC systems.',
  },
  {
    slug: 'jlt',
    name: 'Jumeirah Lake Towers',
    blurb: 'Mixed-use cluster of residential and office towers.',
  },
  {
    slug: 'jbr',
    name: 'Jumeirah Beach Residence',
    blurb: 'Beachfront residences requiring coastal-grade AC servicing.',
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    blurb: 'Office and serviced apartment district along the canal.',
  },
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    blurb: 'Luxury villas and hotel apartments on the iconic palm.',
  },
  {
    slug: 'deira',
    name: 'Deira',
    blurb: 'Older mid-rise buildings often needing duct and chiller work.',
  },
  {
    slug: 'bur-dubai',
    name: 'Bur Dubai',
    blurb: 'Mixed residential and commercial with legacy HVAC systems.',
  },
  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    blurb: 'Villas and low-rise apartments near Mall of the Emirates.',
  },
  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    blurb: 'Coastal villa communities along Jumeirah Road.',
  },
  {
    slug: 'dubai-silicon-oasis',
    name: 'Dubai Silicon Oasis',
    blurb: 'Tech-park residences and offices in the south-east.',
  },
  {
    slug: 'dubai-sports-city',
    name: 'Dubai Sports City',
    blurb: 'Suburban residential clusters around stadiums.',
  },
  {
    slug: 'mirdif',
    name: 'Mirdif',
    blurb: 'Family villa neighbourhoods in eastern Dubai.',
  },
  {
    slug: 'arabian-ranches',
    name: 'Arabian Ranches',
    blurb: 'Gated villa community with central and split systems.',
  },
  {
    slug: 'international-city',
    name: 'International City',
    blurb: 'High-density residential clusters across the south-east.',
  },
  {
    slug: 'dubai-hills',
    name: 'Dubai Hills Estate',
    blurb: 'New-build villas and townhouses with modern VRF systems.',
  },
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
