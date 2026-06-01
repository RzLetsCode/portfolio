import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllSlugs, blogPosts } from '../../../lib/blog-data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | code2career_ai`,
    description: post.excerpt,
    alternates: { canonical: `https://code2careerai.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://code2careerai.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

const CATEGORY_COLORS: Record<string, string> = {
  Roadmap: '#22d3ee',
  Technical: '#818cf8',
  Career: '#34d399',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'code2career_ai', url: 'https://code2careerai.com' },
    publisher: { '@type': 'Organization', name: 'code2career_ai', url: 'https://code2careerai.com' },
    url: `https://code2careerai.com/blog/${slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f9fafb' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(51,65,85,0.5)', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1rem', textDecoration: 'none' }}>
          &lt;&gt; code2career_ai
        </Link>
        <Link href="/blog" style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>
          &larr; All Posts
        </Link>
      </nav>

      <article style={{ maxWidth: '740px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        {/* Meta row */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: CATEGORY_COLORS[post.category] || '#22d3ee', fontWeight: 600, border: `1px solid ${CATEGORY_COLORS[post.category] || '#22d3ee'}33`, borderRadius: '999px', padding: '0.2rem 0.6rem' }}>
            {post.category}
          </span>
          <span style={{ color: '#475569', fontSize: '0.8rem' }}>{formatDate(post.date)}</span>
          <span style={{ color: '#334155', fontSize: '0.8rem' }}>·</span>
          <span style={{ color: '#475569', fontSize: '0.8rem' }}>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.25rem', color: '#f9fafb' }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem', borderLeft: '3px solid #22d3ee', paddingLeft: '1rem' }}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{ fontSize: '0.72rem', padding: '0.25rem 0.65rem', borderRadius: '999px', border: '1px solid rgba(51,65,85,0.8)', color: '#64748b', letterSpacing: '0.06em' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#cbd5e1',
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(51,65,85,0.5)', margin: '3rem 0' }} />

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #22d3ee, #38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 800, color: '#020617', flexShrink: 0 }}>R</div>
          <div>
            <p style={{ fontWeight: 600, color: '#f9fafb', fontSize: '0.9rem', margin: 0 }}>code2career_ai</p>
            <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>AI Career Platform for Freshers &bull; Hinjawadi, Pune</p>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div>
            <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#64748b', marginBottom: '1rem' }}>Related Articles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none', borderRadius: '12px', border: '1px solid rgba(51,65,85,0.7)', background: 'rgba(15,23,42,0.8)', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: '#f9fafb', fontWeight: 500 }}>{r.title}</span>
                  <span style={{ color: '#22d3ee', flexShrink: 0 }}>&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: '3.5rem', borderRadius: '20px', border: '1px solid rgba(30,64,175,0.7)', background: 'radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 60%), rgba(15,23,42,0.97)', padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Want a personalized AI roadmap?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.25rem', fontSize: '0.9rem' }}>Start free. No credit card required.</p>
          <Link href="/contact?plan=explore" style={{ background: 'linear-gradient(135deg, #22d3ee, #38bdf8)', color: '#020617', fontWeight: 700, padding: '0.7rem 1.75rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Start Free
          </Link>
        </div>
      </article>

      {/* Blog post content styles */}
      <style>{`
        article h2 { font-size: 1.4rem; font-weight: 700; color: #f9fafb; margin: 2rem 0 0.75rem; letter-spacing: -0.02em; }
        article h3 { font-size: 1.1rem; font-weight: 600; color: #e5e7eb; margin: 1.5rem 0 0.5rem; }
        article p { margin-bottom: 1.25rem; }
        article ul, article ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
        article li { margin-bottom: 0.5rem; }
        article a { color: #22d3ee; text-decoration: underline; text-underline-offset: 3px; }
        article strong { color: #f9fafb; font-weight: 700; }
      `}</style>
    </main>
  );
}
