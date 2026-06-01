import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 – Page Not Found | code2career_ai',
  description: 'The page you are looking for does not exist. Head back to code2career_ai to explore AI roadmaps, projects, and mentorship.',
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#f9fafb',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(34,211,238,0.15), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Brand */}
      <Link
        href="/"
        style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '2.5rem', textDecoration: 'none' }}
      >
        &lt;&gt; code2career_ai
      </Link>

      {/* 404 number */}
      <div
        style={{
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.05em',
          background: 'linear-gradient(135deg, #22d3ee, #38bdf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.5rem',
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 700,
          color: '#f9fafb',
          marginBottom: '0.75rem',
        }}
      >
        This page doesn&apos;t exist
      </h1>

      <p
        style={{
          fontSize: '1rem',
          color: '#94a3b8',
          maxWidth: '26rem',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}
      >
        Looks like you&apos;ve wandered off the roadmap. Let&apos;s get you back on track.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            background: 'linear-gradient(135deg, #22d3ee, #38bdf8)',
            color: '#020617',
            fontWeight: 700,
            padding: '0.75rem 1.75rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Back to Home
        </Link>
        <Link
          href="/blog"
          style={{
            background: 'rgba(15,23,42,0.9)',
            color: '#e5e7eb',
            fontWeight: 500,
            padding: '0.75rem 1.75rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: '1px solid rgba(51,65,85,0.8)',
          }}
        >
          Read the Blog
        </Link>
      </div>

      {/* Quick links */}
      <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { label: 'Roadmap', href: '/roadmap' },
          { label: 'Projects', href: '/#projects' },
          { label: 'Pricing', href: '/#pricing' },
          { label: 'YouTube', href: '/youtube' },
          { label: 'Contact', href: '/contact' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: '#64748b',
              fontSize: '0.85rem',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              transition: 'color 150ms',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
