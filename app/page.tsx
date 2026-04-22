'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Database,
  Zap,
  Youtube,
  Globe,
  ChevronRight,
  Compass,
  Map,
  Cpu,
  Layers,
  Workflow,
  MessagesSquare,
  RefreshCw,
} from 'lucide-react';

// Section components
import Hero from '../components/Hero';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import Audience from '../components/Audience';
import Mentorship from '../components/Mentorship';
import Pricing from '../components/Pricing';

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // reserved if you re-add Chatbot later

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const mentorshipSteps = [
    {
      title: 'Career Pivot Audit',
      desc: 'A 30-minute high-impact session to map your background to a 3-month actionable AI plan.',
      tools: ['Personalized Roadmap'],
      bullets: ['Kill the tutorial hell confusion.', 'Focus only on what the market needs.'],
    },
    {
      title: 'AI-Optimized Narrative',
      desc: 'Transforming your LinkedIn and Resume to pass the specific filters of modern AI firms.',
      tools: ['ATS Mastery', 'Storytelling'],
      bullets: ['Highlight RAG & Agentic expertise.', 'Fix mistakes that block shortlisting.'],
    },
    {
      title: 'Production Code Review',
      desc: 'Code-level scrutiny of your GitHub repos. We ensure your projects look like professional work.',
      tools: ['Code Quality', 'Architecture'],
      bullets: ['Make your projects recruiter-ready.', 'Validate scalability and security.'],
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 300ms ease, backdrop-filter 300ms ease',
          background: scrolled ? 'rgba(5,6,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <Code size={20} color="#22d3ee" />
          <span style={{ fontWeight: 700, color: '#f9fafb', fontSize: '1rem', letterSpacing: '-0.01em' }}>code2career_ai</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {['About', 'Projects', 'Career Path', 'YouTube', 'Blog', 'Pricing'].map((item) => (
            <Link
              key={item}
              href={item === 'Pricing' ? '#pricing' : `#${item.toLowerCase().replace(' ', '-')}`}
              style={{
                padding: '0.4rem 0.75rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'color 200ms',
              }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              marginLeft: '0.5rem',
              padding: '0.5rem 1.25rem',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
              color: '#020617',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}
          >
            GET IN TOUCH
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <Hero />

        {/* Audience */}
        <Audience />

        {/* Journey */}
        <section id="journey">
          <Journey />
        </section>

        {/* Projects */}
        <Projects />

        {/* Mentorship */}
        <Mentorship />

        {/* Pricing */}
        <Pricing />

        {/* CTA Section */}
        <section
          style={{
            padding: '6rem 1.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Soft background glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at center, rgba(34,211,238,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Eyebrow */}
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#22d3ee',
              marginBottom: '1rem',
            }}
          >
            Take the next step
          </p>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#f9fafb',
              marginBottom: '1.5rem',
            }}
          >
            Ready to build the{' '}
            <br />
            <span style={{ color: '#22d3ee' }}>Next Generation</span>
            <br />
            of AI?
          </h2>

          {/* Supporting copy */}
          <p
            style={{
              fontSize: '1rem',
              color: '#94a3b8',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.65,
            }}
          >
            Whether you&apos;re starting from scratch or leveling up your AI projects, we can turn
            vague goals into a concrete roadmap, portfolio and narrative.
          </p>

          {/* Primary CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                color: '#020617',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Initiate Contact <ArrowRight size={16} />
            </Link>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
              Response within 24 hours &bull; 1:1 guidance
            </span>
          </div>

          {/* Social row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '3rem',
            }}
          >
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', textDecoration: 'none', fontSize: '0.85rem' }}>
              <Youtube size={16} /> YouTube
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', textDecoration: 'none', fontSize: '0.85rem' }}>
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/RzLetsCode" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', textDecoration: 'none', fontSize: '0.85rem' }}>
              <Github size={16} /> GitHub
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            padding: '2rem 1.5rem',
            textAlign: 'center',
            borderTop: '1px solid rgba(51,65,85,0.5)',
          }}
        >
          <p style={{ fontWeight: 700, color: '#f9fafb', marginBottom: '0.25rem' }}>code2career_ai</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.75rem', color: '#475569' }}>
            <span>&copy; {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
            <span>Architected for Freshers &amp; AI Enthusiasts</span>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}
