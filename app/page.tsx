'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Linkedin,
  ArrowRight,
  Youtube,
  Globe,
  ChevronRight,
  BookOpen,
  PlayCircle,
  Menu,
  X
} from 'lucide-react';

import Hero from '../components/Hero';
import Journey from '../components/Journey';
import Audience from '../components/Audience';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'About', href: '#about', external: false },
    { label: 'Roadmaps & Resources', href: '/resources/', external: false, dynamicPage: true },
    { label: 'Projects', href: '/projects/', external: false, dynamicPage: true },
    { label: 'Tech Blog', href: '/blog/', external: false, dynamicPage: true },
    { label: 'Interviews', href: '/interviews/', external: false, dynamicPage: true },
    { label: 'YouTube', href: '/youtube/', external: false, dynamicPage: true },
    { label: 'Pricing', href: '/pricing/', external: false, dynamicPage: true },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f172a]/95 backdrop-blur-sm border-b border-cyan-500/20'
            : 'bg-[#0f172a]/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-cyan-400 font-bold text-base sm:text-lg shrink-0"
            onClick={closeMobileMenu}
          >
            <span className="text-gray-400">&lt;&gt;</span>
            <span>code2career_ai</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.dynamicPage ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:flex">
            <Link
              href="/contact/"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2 rounded-full text-sm transition-colors tracking-wide"
            >
              GET IN TOUCH
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-cyan-500/30 text-cyan-400 bg-[#111c3a]/80 hover:bg-[#16213f] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 bg-[#0b1220]/98 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) =>
                item.dynamicPage ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-gray-200 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm font-medium rounded-xl px-4 py-3"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={closeMobileMenu}
                    className="text-gray-200 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm font-medium rounded-xl px-4 py-3"
                  >
                    {item.label}
                  </a>
                )
              )}

              <Link
                href="/contact/"
                onClick={closeMobileMenu}
                className="mt-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-3 rounded-full text-sm transition-colors tracking-wide text-center"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20 bg-[#0f172a]">
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

        {/* Mid-Page Ecosystem Gateways */}
        <section className="py-20 px-6 bg-[#0f172a] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Blog Gateway */}
              <div className="border border-slate-800 bg-[#111c3a]/40 rounded-2xl p-8 flex flex-col justify-between items-start">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-md px-3 py-1 mb-4">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Tech Blog</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Production AI Insights</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Deep-dive articles on building production AI systems — RAG pipelines,
                    multi-agent architectures, vector databases, and real-world engineering
                    decisions explained for builders at every level.
                  </p>
                </div>
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group mt-4"
                >
                  Explore written articles
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* YouTube Gateway */}
              <div className="border border-slate-800 bg-[#111c3a]/40 rounded-2xl p-8 flex flex-col justify-between items-start">
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-md px-3 py-1 mb-4">
                    <PlayCircle className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Video Hub</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Code2Career_AI on YouTube</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Watch full end-to-end build sessions — from blank repo to deployed AI system.
                    Architecture walkthroughs, live coding, and career-focused breakdowns
                    for freshers and career switchers.
                  </p>
                </div>
                <Link
                  href="/youtube/"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group mt-4"
                >
                  Watch step-by-step builds
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Call To Action Block */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Take the next step
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your AI portfolio{' '}
              <span className="relative inline-block">
                <span className="text-cyan-400">starts here.</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400/50" />
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a fresher finding your path or a professional pivoting into AI —
              get a concrete roadmap, production-grade portfolio projects, and 1:1 mentorship
              built around your goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact/"
                className="group bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 flex items-center gap-2"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-gray-500 text-sm">
                Free 30-min call &bull; Response within 24 hours &bull; No commitment
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 mt-16">
              <a
                href="https://www.youtube.com/@Code2Career_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/code2career-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <Link
                href="/blog/"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 bg-[#090f1e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-cyan-400 font-bold">code2career_ai</span>
          <p className="text-gray-500 text-sm" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
          <p className="text-gray-600 text-xs">Built for Freshers &amp; AI Career Builders</p>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
