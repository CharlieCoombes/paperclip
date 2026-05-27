import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section className="bg-ink-50/60 py-16 sm:py-20">
      <div className="container">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow">Guides &amp; advice</p>
            <h2 className="section-title mt-2">Pick the right AC service with confidence</h2>
            <p className="mt-2 max-w-2xl text-ink-600">
              Practical articles on maintenance schedules, fair pricing and what good installation looks like in Dubai.
            </p>
          </div>
          <Link href="/blog" className="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:inline-flex">
            All guides →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col p-6">
              <span className="chip-brand w-fit">{post.category}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink-600">{post.excerpt}</p>
              <p className="mt-5 text-xs text-ink-400">
                {post.readingMinutes} min read · {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
