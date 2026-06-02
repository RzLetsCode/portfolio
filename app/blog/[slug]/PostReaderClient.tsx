'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Clock, 
  ArrowLeft, 
  Calendar, 
  Menu, 
  X 
} from 'lucide-react';
import { BlogPost } from '../../../lib/blog-data';

interface PostReaderClientProps {
  post: BlogPost;
}

export default function PostReaderClient({ post }: PostReaderClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', dynamicPage: true },
    { label: 'Roadmaps & Resources', href: '/resources/', dynamicPage: true },
    { label: 'Projects', href: '/projects/', dynamicPage: true },
    { label: 'Pricing', href: '/pricing/', dynamicPage: true },
  ];

  return (
    <>
      {/* Top Fixed Header Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-sm border-b border-cyan-500/20' : 'bg-[#0f172a]/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 text-cyan-400 font-bold text-base sm:text-lg shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <span className="text-gray-400">&lt;&gt;</span>
            <span>code2career_ai</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">{item.label}</Link>
            ))}
          </div>
          <Link href="/contact/" className="hidden lg:block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2 rounded-full text-sm transition-colors tracking-wide">GET IN TOUCH</Link>
          <button type="button" onClick={() => setMobileMenuOpen((p) => !p)} className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-cyan-500/30 text-cyan-400 bg-[#111c3a]/80">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 bg-[#0b1220]/98 p-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 px-4 py-3 text-sm font-medium rounded-xl hover:bg-cyan-500/10">{item.label}</Link>
            ))}
            <Link href="/contact/" onClick={() => setMobileMenuOpen(false)} className="bg-cyan-500 text-black text-center font-bold py-3 rounded-full text-sm mt-2">GET IN TOUCH</Link>
          </div>
        )}
      </nav>

      {/* Main Content Layout Container */}
      <main className="pt-24 min-h-screen bg-[#0f172a] flex flex-col justify-between">
        <div className="max-w-4xl mx-auto w-full px-6 py-12 flex-grow">
          
          <Link href="/blog/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-cyan-400 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Chronicles</span>
          </Link>

          <header className="mb-10">
            <span className={`text-xs font-black tracking-widest uppercase ${post.color} bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/80`}>
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mt-6 mb-4 tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-500 text-xs font-mono pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Published: {post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          {/* Master Post Cover Hero Image Container */}
          <div className="w-full relative rounded-2xl overflow-hidden border border-slate-800 bg-[#090f20] mb-12 shadow-xl">
            <img 
              src={post.imageUrl} 
              alt={post.imageAlt}
              className="w-full h-auto max-h-[440px] object-cover mx-auto"
            />
          </div>

          {/* Conditional Layout Parser Rendering Unlimited Text & Structural Images */}
          <article className="space-y-8 text-slate-300 text-base md:text-lg leading-relaxed font-normal tracking-wide border-b border-slate-800/60 pb-16">
            {post.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="first-letter:text-xl first-letter:font-bold first-letter:text-white">
                    {block.text}
                  </p>
                );
              }

              if (block.type === 'image') {
                return (
                  <div key={index} className="my-10 w-full group">
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090f20] shadow-md transition-all duration-300 group-hover:border-slate-700/60">
                      <img 
                        src={block.imageUrl} 
                        alt={block.imageAlt || 'Technical layout blueprint schematic'} 
                        className="w-full h-auto max-h-[500px] object-contain mx-auto block"
                        loading="lazy"
                      />
                    </div>
                    {block.caption && (
                      <p className="mt-3 text-center text-xs font-mono text-slate-500 tracking-wide max-w-2xl mx-auto leading-normal">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </article>

          {/* Call to Action Layer */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 via-[#0a142e] to-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Ready to design this architecture live?</h3>
              <p className="text-slate-400 text-xs">Schedule an implementation critique review session directly with enterprise AI developers.</p>
            </div>
            <Link href="/contact?ref=blog-deep-dive" className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-6 py-3 rounded-full text-xs tracking-widest uppercase whitespace-nowrap shadow-lg shadow-cyan-500/10 transition-colors">
              Request System Audit
            </Link>
          </div>

        </div>

        {/* Dynamic Static-Safe Footer */}
        <footer className="border-t border-white/10 py-8 px-6 bg-[#090f1e] w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-cyan-400 font-bold">code2career_ai</span>
            <p className="text-gray-500 text-sm" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
            <p className="text-gray-600 text-xs">Architected for Freshers &amp; AI Enthusiasts</p>
          </div>
        </footer>
      </main>
    </>
  );
}
