import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog | code2career_ai — AI Career Insights & Tutorials',
  description:
    'Practical articles on AI roadmaps, RAG systems, portfolio building, and career strategies for freshers breaking into AI roles in India.',
  alternates: { canonical: 'https://code2careerai.com/blog' },
  openGraph: {
    title: 'Blog | code2career_ai',
    description: 'AI career insights, tutorials, and project guides for freshers.',
    url: 'https://code2careerai.com/blog',
    type: 'website',
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  Roadmap: '#22d3ee',
  Technical: '#818cf8',
  Career: '#34d399',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f9fafb' }}>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(51,65,85,0.5)', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1rem', textDecoration: 'none', letterSpacing: '0.02em' }}>
          &lt;&gt; code2career_ai
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {[['Home', '/'], ['YouTube', '/youtube'], ['Roadmap', '/roadmap'], ['Resources', '/resources'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={href} href={href} style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none', letterSpacing: '0.04em' }}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748b' }}>THE BLOG</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            AI Career Insights
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '36rem' }}>
            Practical guides on learning AI, building real projects, and navigating the path from fresher to hired.
          </p>
        </div>

        {/* Featured Posts */}
        {featured.length > 0 && (
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#64748b', marginBottom: '1.25rem' }}>Featured</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {featured.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <article style={{ borderRadius: '16px', border: '1px solid rgba(51,65,85,0.9)', background: 'rgba(15,23,42,0.97)', padding: '1.5rem', height: '100%', transition: 'border-color 200ms', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: CATEGORY_COLORS[post.category] || '#22d3ee', fontWeight: 600 }}>{post.category}</span>
                      <span style={{ fontSize: '0.75rem', color: '#475569' }}>{post.readingTime}</span>
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f9fafb', marginBottom: '0.6rem', lineHeight: 1.35 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '1rem' }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: '#475569' }}>{formatDate(post.date)}</span>
                      <span style={{ fontSize: '0.8rem', color: '#22d3ee', fontWeight: 600 }}>Read &rarr;</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        {rest.length > 0 && (
          <section>
            <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#64748b', marginBottom: '1.25rem' }}>All Articles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article style={{ borderRadius: '14px', border: '1px solid rgba(51,65,85,0.7)', background: 'rgba(15,23,42,0.8)', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: CATEGORY_COLORS[post.category] || '#22d3ee', fontWeight: 600 }}>{post.category}</span>
                        <span style={{ fontSize: '0.72rem', color: '#475569' }}>{formatDate(post.date)}</span>
                      </div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f9fafb' }}>{post.title}</h3>
                    </div>
                    <span style={{ color: '#22d3ee', fontSize: '1.1rem', flexShrink: 0 }}>&rarr;</span>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div style={{ marginTop: '4rem', borderRadius: '20px', border: '1px solid rgba(30,64,175,0.7)', background: 'radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 60%), rgba(15,23,42,0.97)', padding: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>Want personalized AI career guidance?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Start with our free Explore plan. No credit card required.</p>
          <Link href="/contact?plan=explore" style={{ background: 'linear-gradient(135deg, #22d3ee, #38bdf8)', color: '#020617', fontWeight: 700, padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Start Free
          </Link>
        </div>
      </div>
    </main>
  );
}
