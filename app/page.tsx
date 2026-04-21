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
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#020617]/80 backdrop-blur-md border-slate-800 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
              <Code className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">code2career_ai</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Career Path', 'YouTube', 'Blog'].map((item) => (
              <Link
                key={item}
                href={
                  item === 'YouTube'
                    ? 'https://www.youtube.com/@code2career_ai'
                    : item === 'Blog'
                    ? 'https://hashnode.com/@code2career-ai'
                    : item === 'Career Path'
                    ? '#journey'
                    : `#${item.toLowerCase().replace(' ', '-')}`
                }
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                {...((item === 'YouTube' || item === 'Blog') && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {item}
              </Link>
            ))}
    

            <Link
  href="/contact"
  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-xs font-bold tracking-[0.16em] uppercase hover:from-cyan-400 hover:to-blue-400 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
>
  Get in Touch
</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero – wrapped in same container as original layout */}
        <section id="about" className="pt-40 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Hero />
          </div>
        </section>

          {/* Audience */}
          <section id="audience" className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <Audience />
            </div>
          </section>

        {/* Journey – component version, but keep anchor id for nav */}
        <section id="journey" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <Journey />
          </div>
        </section>

        {/* Projects – component version, same spacing as before */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <Mentorship />
          </div>
        </section>

    

       {/* CTA Section */}
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto relative">
    {/* Soft background glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-transparent to-blue-600/15 blur-[90px] rounded-[40px]" />

    <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[36px] px-8 py-10 md:px-12 md:py-12 text-center shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
      {/* Eyebrow */}
      <p className="text-[11px] font-bold tracking-[0.28em] text-cyan-400 uppercase mb-4">
        Take the next step
      </p>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-[1.05]">
        Ready to build the
        <br />
        <span className="text-cyan-400">Next Generation</span> of AI?
      </h2>

      {/* Supporting copy */}
      <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-8">
        Whether you&apos;re starting from scratch or leveling up your AI projects,
        we can turn vague goals into a concrete roadmap, portfolio and narrative.
      </p>

      {/* Primary CTA + micro proof */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <Link
          href="/contact"
          className="px-10 py-3.5 bg-white text-slate-950 rounded-2xl font-black text-sm md:text-base hover:bg-cyan-400 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] inline-flex items-center gap-2 uppercase tracking-[0.18em] shadow-xl shadow-white/5"
        >
          Initiate Contact
          <Mail className="w-4 h-4" />
        </Link>

        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
          Response within 24 hours • 1:1 guidance
        </p>
      </div>

      {/* Social row (kept, but visually lighter) */}
      <div className="flex items-center justify-center gap-8 pt-5 border-t border-slate-800/50">
        <Link
          href="https://www.youtube.com/@code2career_ai"
          target="_blank"
          className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-110 flex flex-col items-center gap-1"
        >
          <Youtube className="w-6 h-6" />
          <span className="text-[9px] font-bold uppercase tracking-widest">
            YouTube
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/rzletscode/"
          target="_blank"
          className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-110 flex flex-col items-center gap-1"
        >
          <Linkedin className="w-6 h-6" />
          <span className="text-[9px] font-bold uppercase tracking-widest">
            LinkedIn
          </span>
        </Link>
        <Link
          href="https://github.com/RzLetsCode"
          target="_blank"
          className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-110 flex flex-col items-center gap-1"
        >
          <Github className="w-6 h-6" />
          <span className="text-[9px] font-bold uppercase tracking-widest">
            GitHub
          </span>
        </Link>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
              <Code className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white tracking-tighter">
              code2career_ai
            </span>
          </div>
          <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
          <div className="text-[10px] text-slate-500 font-medium">
            Architected for Freshers &amp; AI Enthusiasts
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
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
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
