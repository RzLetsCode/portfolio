import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YouTube | code2career_ai — AI Tutorials & Project Walkthroughs',
  description:
    'Watch free AI tutorials, RAG system builds, agent walkthroughs, and career advice videos from code2career_ai on YouTube.',
  alternates: { canonical: 'https://code2careerai.com/youtube' },
  openGraph: {
    title: 'YouTube | code2career_ai',
    description: 'AI tutorials and project walkthroughs for freshers.',
    url: 'https://code2careerai.com/youtube',
    type: 'website',
  },
};

// ---------------------------------------------------------------
// Add your real YouTube video IDs and details here.
// To get a video ID from a YouTube URL:
//   https://youtube.com/watch?v=VIDEO_ID_HERE  <-- that part
// ---------------------------------------------------------------
const VIDEOS = [
  {
    id: 'dQw4w9WgXcQ', // <-- replace with your real video ID
    title: 'How to Build a RAG Chatbot from Scratch — Full Project Walkthrough',
    description: 'Step-by-step guide to building a production-style RAG system using LangChain, Pinecone, and a Next.js frontend.',
    category: 'Project Build',
    duration: '24:15',
    uploadDate: '2026-05-18',
  },
  {
    id: 'dQw4w9WgXcQ', // <-- replace with your real video ID
    title: 'AI Roadmap for Freshers in 2025 — Where to Actually Start',
    description: 'A clear, opinionated breakdown of what to learn first, what to skip, and what actually gets you hired in AI roles.',
    category: 'Career Advice',
    duration: '18:42',
    uploadDate: '2026-05-10',
  },
  {
    id: 'dQw4w9WgXcQ', // <-- replace with your real video ID
    title: 'GitHub Profile Audit for AI Freshers — What Recruiters Actually Look For',
    description: 'Live audit of a real fresher GitHub profile with actionable improvements to make your repos look production-ready.',
    category: 'Career Advice',
    duration: '15:08',
    uploadDate: '2026-04-28',
  },
  {
    id: 'dQw4w9WgXcQ', // <-- replace with your real video ID
    title: 'LangGraph Multi-Agent System — Build a Real Agentic Workflow',
    description: 'Hands-on walkthrough of building a multi-agent orchestration system with LangGraph and Python.',
    category: 'Project Build',
    duration: '31:50',
    uploadDate: '2026-04-15',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Project Build': '#22d3ee',
  'Career Advice': '#34d399',
  'Tutorial': '#818cf8',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function YouTubePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f9fafb' }}>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(51,65,85,0.5)', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1rem', textDecoration: 'none' }}>
          &lt;&gt; code2career_ai
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[['Home', '/'], ['Blog', '/blog'], ['Roadmap', '/roadmap'], ['Resources', '/resources'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={href} href={href} style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>{label}</Link>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748b' }}>YOUTUBE</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Free AI Tutorials
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '38rem', marginBottom: '1.5rem' }}>
            Practical walkthroughs of AI projects, career strategy, and tools that matter for getting hired. No fluff.
          </p>
          <a
            href="https://www.youtube.com/@Code2Career_AI"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#dc2626', color: '#fff', fontWeight: 700, padding: '0.6rem 1.25rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
            Subscribe on YouTube
          </a>
        </div>

        {/* Video Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {VIDEOS.map((video) => (
            <a
              key={video.id + video.title}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <article style={{ borderRadius: '16px', border: '1px solid rgba(51,65,85,0.9)', background: 'rgba(15,23,42,0.97)', overflow: 'hidden', height: '100%' }}>
                {/* Thumbnail */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#0f172a', overflow: 'hidden' }}>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                  />
                  {/* Play button overlay */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(220,38,38,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  {/* Duration badge */}
                  <span style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.8)', color: '#fff', fontSize: '0.72rem', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
                    {video.duration}
                  </span>
                </div>

                {/* Info */}
                <div style={{ padding: '1rem 1.1rem 1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CATEGORY_COLORS[video.category] || '#22d3ee', fontWeight: 600 }}>{video.category}</span>
                    <span style={{ fontSize: '0.72rem', color: '#475569' }}>{formatDate(video.uploadDate)}</span>
                  </div>
                  <h2 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f9fafb', lineHeight: 1.4, marginBottom: '0.5rem' }}>{video.title}</h2>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55 }}>{video.description}</p>
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* Channel CTA */}
        <div style={{ marginTop: '4rem', borderRadius: '20px', border: '1px solid rgba(220,38,38,0.3)', background: 'radial-gradient(circle at top left, rgba(220,38,38,0.08), transparent 60%), rgba(15,23,42,0.97)', padding: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>New videos every week</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Subscribe to get notified when new AI project tutorials and career guides drop.</p>
          <a href="https://www.youtube.com/@Code2Career_AI" target="_blank" rel="noopener noreferrer" style={{ background: '#dc2626', color: '#fff', fontWeight: 700, padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Subscribe Now
          </a>
        </div>
      </div>
    </main>
  );
}
