import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { PageHeader } from '@/components/PageHeader';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'AC Service Guides for Dubai Residents',
  description:
    'Practical, vendor-neutral guides on AC maintenance, repair, installation and energy savings — written for the Dubai climate.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guides"
        title="AC service guides for Dubai residents"
        description="Plain-language articles on what to ask, what to pay and what to watch out for."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Guides' }]}
      />
      <div className="container py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col p-6">
              <span className="chip-brand w-fit">{post.category}</span>
              <h2 className="mt-4 font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-ink-600">{post.excerpt}</p>
              <p className="mt-5 text-xs text-ink-400">
                {post.readingMinutes} min read · {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
