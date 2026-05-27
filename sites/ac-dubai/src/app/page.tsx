import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FeaturedListings } from '@/components/FeaturedListings';
import { AreaGrid } from '@/components/AreaGrid';
import { HowItWorks } from '@/components/HowItWorks';
import { BlogPreview } from '@/components/BlogPreview';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'AC Services Dubai — Find Trusted AC Repair, Installation & Maintenance',
  description:
    'Independent directory of vetted AC repair, installation, maintenance and emergency services across Dubai. Compare ratings, response times and licences.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <FeaturedListings />
      <AreaGrid />
      <HowItWorks />
      <BlogPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
