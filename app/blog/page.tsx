'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Clock, 
  ArrowRight, 
  Menu, 
  X 
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '../../lib/blog-data';

const BLOG_CATEGORIES = ['All Articles', 'AI Roadmaps', 'System Design', 'Career Strategy'];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('All Articles');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredPosts = activeTab === 'All Articles'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter((p) => p.category === activeTab);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-sm border-b border-cyan-500/20' : 'bg-[#0f172a]/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 text-cyan-400 font-bold text-base sm:text-lg shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <span className="text-gray-400">&lt;&gt;</span>
            <span>code2career_ai</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Home</Link>
            <Link href="/resources/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Roadmaps</Link>
            <Link href="/projects/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Projects</Link>
            <Link href="/pricing/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">Pricing</Link>
          </div>
          <Link href="/contact/" className="hidden lg:block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2 rounded-full text-sm transition-colors tracking-wide">GET IN TOUCH</Link>
          <button type="button" onClick={() => setMobileMenuOpen((p) => !p)} className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-cyan-500/30 text-cyan-400 bg-[#111c3a]/80">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cyan-500/20 bg-[#0b1220]/98 p-4 flex flex-col gap-2">
            {[['Home', '/'], ['Roadmaps & Resources', '/resources/'], ['Projects', '/projects/'], ['Pricing', '/pricing/']].map(([l, h]) => (
              <Link key={h} href={h} onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 px-4 py-3 text-sm font-medium rounded-xl hover:bg-cyan-500/10">{l}</Link>
            ))}
            <Link href="/contact/" onClick={() => setMobileMenuOpen(false)} className="bg-cyan-500 text-black text-center font-bold py-3 rounded-full text-sm mt-2">GET IN TOUCH</Link>
          </div>
        )}
      </nav>

      <main className="pt-24 min-h-screen bg-[#0f172a] flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full px-6 py-12 flex-grow">
          
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16 border-b border-slate-800/60 pb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">The Insights Engine</span>
              <h1 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4 tracking-tight">Production AI Chronicles</h1>
              <p className="text-slate-400 text-base max-w-xl leading-relaxed">Technical guides, system blueprints, and deployment frameworks outlining the transition from fresher to hired engineer.</p>
            </div>

            <div className="flex flex-wrap gap-2 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/80 self-start xl:self-end">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeTab === cat ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className={`group bg-[#111930] border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 ${post.borderHover}`}>
                
                {/* Visual Image Render Layout Area */}
                <div className="relative w-full h-48 bg-[#090f20] border-b border-slate-800/80 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111930] via-transparent to-transparent opacity-40" />
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-black tracking-widest uppercase ${post.color}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors line-clamp-2 leading-snug mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-500 font-mono">{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors ${post.color}`}>
                      <span>Read Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#122244]/40 via-transparent to-transparent bg-[#0d1527] p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-2">Want personalized system review tracking?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">Join our Mentor Loop setup to scale project logic maps directly with enterprise engineers.</p>
            <Link href="/contact?plan=mentor" className="inline-block bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-black px-8 py-3.5 rounded-full text-xs tracking-widest uppercase shadow-lg shadow-cyan-500/10 hover:from-cyan-300 hover:to-sky-300 transition-all">
              Initialize Mentorship
            </Link>
          </div>

        </div>

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
