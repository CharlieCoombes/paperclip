import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getPost } from '@/data/blog';
import { PageHeader } from '@/components/PageHeader';
import { breadcrumbLd, pageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function renderMarkdown(body: string) {
  return body.split('\n').map((line, i) => {
    if (line.startsWith('## ')) {
      return (
        <h2 key={i} className="mt-8 font-display text-xl font-bold text-ink-900">
          {line.replace('## ', '')}
        </h2>
      );
    }
    if (/^\d+\.\s/.test(line)) {
      const text = line.replace(/^\d+\.\s/, '');
      return (
        <li key={i} className="ml-5 list-decimal text-ink-700">
          {renderInline(text)}
        </li>
      );
    }
    if (line.startsWith('- ')) {
      return (
        <li key={i} className="ml-5 list-disc text-ink-700">
          {renderInline(line.replace('- ', ''))}
        </li>
      );
    }
    if (line.trim() === '') return <div key={i} className="h-2" />;
    return (
      <p key={i} className="mt-3 leading-relaxed text-ink-700">
        {renderInline(line)}
      </p>
    );
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-ink-900">
        {part.replace(/\*\*/g, '')}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', path: '/' },
              { name: 'Guides', path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            author: { '@type': 'Organization', name: post.author },
            datePublished: post.publishedAt,
          }),
        }}
      />

      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="container py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-xs text-ink-500">
              {post.readingMinutes} min read · {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })} · {post.author}
            </p>
            <div className="mt-6">{renderMarkdown(post.body)}</div>

            <div className="mt-12 rounded-2xl bg-ink-900 p-8 text-white">
              <h3 className="font-display text-lg font-bold">Need an AC company in Dubai?</h3>
              <p className="mt-2 text-sm text-white/70">
                Browse vetted providers in your area — compare ratings, response times and licences in one place.
              </p>
              <Link href="/companies" className="btn-accent mt-4 w-fit">Browse companies</Link>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="card p-5">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-500">More guides</h2>
                <ul className="mt-3 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="block hover:bg-ink-50 rounded-lg p-2">
                        <span className="block text-sm font-semibold text-ink-900">{r.title}</span>
                        <span className="mt-1 block text-xs text-ink-500">{r.readingMinutes} min read</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
