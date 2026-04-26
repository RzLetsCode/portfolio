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
  FileText  // Or this
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
  const [isChatOpen, setIsChatOpen] = useState(false);

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
      title: '90-Day AI Blueprint',
      desc: 'Kill the confusion. We’ll map out exactly what you need to learn to land a high-paying AI role in 3 months.',
      tools: ['Roadmap to Hire'],
      bullets: [
        'Stop gathering certificates; start building production-ready apps.',
        'Focus 100% on the tech that actually gets people hired right now.',
      ],
    },
    {
      title: 'Hiring-Filter Bypass',
      desc: 'Your LinkedIn and Resume are likely getting ghosted by AI filters. We’ll fix that so you actually get the interview.',
      tools: ['ATS Signal-Booster'],
      bullets: [
        'Turn “I know Python” into “I build Agentic AI Workflows.”',
        'Position your RAG projects as essential business solutions.',
      ],
    },
    {
      title: 'GitHub “Senior-Level” Audit',
      desc: 'We’ll tear down your code and rebuild it. Move from “student projects” to code that looks like professional work.',
      tools: ['Code Quality Polish'],
      bullets: [
        'Architecture reviews that prove you understand scale and security.',
        'Make your repos the reason recruiters say “Yes.”',
      ],
    },
  ];

  // Nav items — external links open in new tab, anchor links scroll on-page
  const navItems = [
    { label: 'About', href: '#about', external: false },
    { label: 'Career Path', href: '#career-path', external: false },
    { label: 'Projects', href: '#projects', external: false },    
    { label: 'Pricing', href: '#pricing', external: false },
  ];

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0f172a]/95 backdrop-blur-sm border-b border-cyan-500/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/portfolio/" className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
            <span className="text-gray-400">&lt;&gt;</span>
            <span>code2career_ai</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Link
            href="/portfolio/contact/"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2 rounded-full text-sm transition-colors"
          >
            GET IN TOUCH
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        {/* About / Hero */}
        <section id="about" style={{ scrollMarginTop: '70px' }}>
          <Hero />
        </section>

        {/* Audience */}
        <section id="audience" style={{ scrollMarginTop: '70px' }}>
          <Audience />
        </section>

        {/* Career Path / Journey */}
        <section id="career-path" style={{ scrollMarginTop: '70px' }}>
          <Journey />
        </section>

        {/* Projects */}
        <section id="projects" style={{ scrollMarginTop: '70px' }}>
          <Projects />
        </section>

        {/* Mentorship */}
        <section id="youtube" style={{ scrollMarginTop: '70px' }}>
          <Mentorship />
        </section>

        {/* Blog anchor */}
        <div id="blog" style={{ scrollMarginTop: '70px' }} />

        {/* Pricing */}
        <section id="pricing" style={{ scrollMarginTop: '70px' }}>
          <Pricing />
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Take the next step</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to build the{' '}
              <span className="relative inline-block">
                <span className="text-cyan-400">Next Generation</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400/50" />
              </span>
              {' '}of AI?
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re starting from scratch or leveling up your AI projects, we can turn vague goals into a concrete roadmap, portfolio and narrative.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/portfolio/contact/"
                className="group bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 flex items-center gap-2"
              >
                Initiate Contact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-gray-500 text-sm">Response within 24 hours &bull; 1:1 guidance</p>
            </div>

            <div className="flex items-center justify-center gap-6 mt-16">
              <a href="https://www.youtube.com/@Code2Career_AI" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/code2career-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
                
              </a>
              {/* <a href="https://github.com/RzLetsCode" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" /> */}
              {/* Replace the old GitHub block with this Hashnode block */}
              <a href="https://hashnode.com/@code2career-ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
              <Globe className="w-5 h-5" /> 
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-cyan-400 font-bold">code2career_ai</span>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
          <p className="text-gray-600 text-xs">Architected for Freshers &amp; AI Enthusiasts</p>
        </div>
      </footer>

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
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
