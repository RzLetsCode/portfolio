import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free AI Resources | code2career_ai',
  description: 'Free AI learning resources, cheatsheets, project templates, and guides curated for freshers and students entering AI careers.',
  alternates: { canonical: 'https://code2careerai.com/resources' },
};

const RESOURCES = [
  {
    category: 'Cheatsheets',
    color: '#22d3ee',
    items: [
      { title: 'Python for AI Cheatsheet', desc: 'Key Pandas, NumPy, and Scikit-learn syntax in one page. Perfect for interviews.', cta: 'Download Free', href: '/contact?plan=explore' },
      { title: 'LangChain Quick Reference', desc: 'LCEL syntax, chain types, agent tools, and retriever patterns. Covers v0.2+.', cta: 'Download Free', href: '/contact?plan=explore' },
      { title: 'RAG Architecture Patterns', desc: 'Visual diagram of naive RAG, advanced RAG, and agentic RAG flows.', cta: 'Download Free', href: '/contact?plan=explore' },
    ],
  },
  {
    category: 'Project Templates',
    color: '#818cf8',
    items: [
      { title: 'RAG Chatbot Starter', desc: 'Next.js frontend + LangChain backend + Pinecone. Clone and deploy in under an hour.', cta: 'View on GitHub', href: 'https://github.com/RzLetsCode' },
      { title: 'AI Resume Matcher Template', desc: 'Python script to score a resume against a job description using cosine similarity.', cta: 'View on GitHub', href: 'https://github.com/RzLetsCode' },
    ],
  },
  {
    category: 'Career Guides',
    color: '#34d399',
    items: [
      { title: 'AI Job Description Decoder', desc: 'What do JDs actually mean when they say "LLM experience" or "RAG pipelines"? We break it down.', cta: 'Read the Blog Post', href: '/blog' },
      { title: 'GitHub Profile Audit Checklist', desc: 'A 12-point checklist to audit your own GitHub before applying for AI roles.', cta: 'Read the Blog Post', href: '/blog' },
      { title: 'AI Interview Prep Guide', desc: 'Common ML system design questions + how to explain your projects in STAR format.', cta: 'Download Free', href: '/contact?plan=explore' },
    ],
  },
  {
    category: 'Curated Learning',
    color: '#f59e0b',
    items: [
      { title: 'Best Free AI Courses (2025)', desc: 'Fast.ai, DeepLearning.AI, Hugging Face, CS50AI — ranked and annotated for freshers.', cta: 'Read the Blog Post', href: '/blog' },
      { title: 'YouTube Playlist: RAG from Scratch', desc: 'Curated playlist of the best RAG tutorial videos — no fluff, in the right order.', cta: 'Watch on YouTube', href: '/youtube' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f9fafb' }}>
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(51,65,85,0.5)', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1rem', textDecoration: 'none' }}>&lt;&gt; code2career_ai</Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[['Blog', '/blog'], ['YouTube', '/youtube'], ['Roadmap', '/roadmap'], ['Contact', '/contact']].map(([l, h]) => (
            <Link key={h} href={h} style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748b' }}>FREE RESOURCES</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0.5rem 0 0.75rem' }}>Tools to Accelerate Your AI Journey</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '38rem' }}>Cheatsheets, project templates, and career guides. All free. No email wall for most resources.</p>
        </div>

        {RESOURCES.map((section) => (
          <div key={section.category} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: section.color, marginBottom: '1.25rem', fontWeight: 700 }}>{section.category}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {section.items.map((item) => (
                <div key={item.title} style={{ borderRadius: '14px', border: '1px solid rgba(51,65,85,0.9)', background: 'rgba(15,23,42,0.97)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f9fafb' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                  <Link href={item.href} style={{ fontSize: '0.8rem', color: section.color, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.06em' }}>
                    {item.cta} &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: '3rem', borderRadius: '20px', border: '1px solid rgba(30,64,175,0.7)', background: 'radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 60%), rgba(15,23,42,0.97)', padding: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>Need something specific?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Get in touch and we will point you to the right resource for your stage.</p>
          <Link href="/contact" style={{ background: 'linear-gradient(135deg, #22d3ee, #38bdf8)', color: '#020617', fontWeight: 700, padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Get in Touch</Link>
        </div>
      </div>
    </main>
  );
}
