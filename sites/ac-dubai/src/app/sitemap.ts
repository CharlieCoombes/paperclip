import type { MetadataRoute } from 'next';
import { companies } from '@/data/companies';
import { categories } from '@/data/categories';
import { areas } from '@/data/areas';
import { blogPosts } from '@/data/blog';
import { SITE_URL } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/companies`, lastModified: now, priority: 0.9, changeFrequency: 'daily' },
    { url: `${SITE_URL}/categories`, lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/areas`, lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/submit`, lastModified: now, priority: 0.5, changeFrequency: 'monthly' },
  ];

  return [
    ...staticPages,
    ...companies.map((c) => ({
      url: `${SITE_URL}/companies/${c.slug}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    })),
    ...categories.map((c) => ({
      url: `${SITE_URL}/categories/${c.slug}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    })),
    ...areas.map((a) => ({
      url: `${SITE_URL}/areas/${a.slug}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    })),
    ...blogPosts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    })),
  ];
}
