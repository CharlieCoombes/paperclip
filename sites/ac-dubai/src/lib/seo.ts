import type { Metadata } from 'next';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from './utils';
import type { Company } from '@/data/companies';

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function pageMetadata({ title, description, path = '/', image, noIndex }: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    areaServed: { '@type': 'City', name: 'Dubai' },
  };
}

export function localBusinessLd(company: Company) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: company.name,
    description: company.tagline,
    url: `${SITE_URL}/companies/${company.slug}`,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: company.rating,
      reviewCount: company.reviewCount,
    },
    priceRange: company.priceRange,
    openingHours: company.hours,
  };
}

export function breadcrumbLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
