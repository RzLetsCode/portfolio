'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Menu, 
  X,
  BookOpen,
  Award
} from 'lucide-react';
import { INTERVIEW_QUESTIONS_DATA, INTERVIEW_CATEGORIES } from '../../lib/interview-data';

export default function InterviewsPage() {
  const [activeTab, setActiveTab] = useState('All Questions');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tracks window scroll position to dynamically apply glassmorphic styles to the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredQuestions = activeTab === 'All Questions'
    ? INTERVIEW_QUESTIONS_DATA
    : INTERVIEW_QUESTIONS_DATA.filter((q) => q.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30">
      
      {/* ==================== NAVIGATION BAR ==================== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/20' 
          : 'bg-[#0f172a]/90 backdrop-blur-sm py-5'
      }`}>
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-white tracking-tight hover:opacity-90 transition-opacity">
            code2career<span className="text-cyan-400">_ai</span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
              Blog
            </Link>
            <Link href="/interviews" className="text-sm text-cyan-400 font-bold relative after:absolute after:bottom-[-22px] after:left-0 after:right-0 after:h-[2px] after:bg-cyan-500">
              Interviews
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/50 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation View */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f172a]/98 backdrop-blur-md border-b border-slate-800/80 p-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-base text-slate-400 hover:text-white font-medium transition-colors py-1">
              Home
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-base text-slate-400 hover:text-white font-medium transition-colors py-1">
              Blog
            </Link>
            <Link href="/interviews" onClick={() => setMobileMenuOpen(false)} className="text-base text-cyan-400 font-bold transition-colors py-1">
              Interviews
            </Link>
          </div>
        )}
      </nav>

      {/* ==================== MAIN BODY CONTENT ==================== */}
      <main className="pt-28 flex-grow">
        <div className="max-w-7xl mx-auto w-full px-6 py-12">
          
          {/* Header & Category Tab Filters */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16 border-b border-slate-800/60 pb-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Interview Prep Hub</span>
              <h1 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4 tracking-tight leading-tight">
                GenAI & Agentic AI <span className="text-cyan-400">Interview Questions</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Master production-level interview questions on Transformers, RAG, LLMs, LangChain, LangGraph, and Multi-Agent systems. From architecture deep-dives to hands-on agentic patterns.
              </p>
            </div>
            
            {/* Filter Buttons Segment Control */}
            <div className="flex flex-wrap gap-2 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/80 self-start xl:self-end shadow-inner">
              {INTERVIEW_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === cat 
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/10 font-black' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout Cards */}
          {filteredQuestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredQuestions.map((question) => (
                <article 
                  key={question.slug} 
                  className={`group bg-[#111930]/70 backdrop-blur-sm border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${question.borderHover}`}
                >
                  
                  {/* Standard Image Frame (Bypasses Next.js Optimization domain check failures) */}
                  <div className="relative w-full h-48 bg-[#090f20] border-b border-slate-800/80 overflow-hidden">
                    <img 
                      src={question.imageUrl} 
                      alt={question.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111930] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-800/40">
                      <span className={`text-[10px] font-black tracking-wider uppercase ${question.color}`}>
                        {question.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[10px] font-black tracking-widest uppercase ${question.color}`}>
                          {question.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>{question.questionCount} Questions</span>
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors line-clamp-2 leading-snug mb-2">
                        {question.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                        {question.excerpt}
                      </p>
                    </div>
                    
                    {/* Card Actions Footer Area */}
                    <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className={`w-4 h-4 ${question.color}`} />
                        <span className={`text-[11px] font-bold tracking-wide uppercase ${question.color}`}>
                          {question.difficulty}
                        </span>
                      </div>
                      <Link 
                        href={`/interviews/${question.slug}`} 
                        className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-colors group-hover:brightness-110 ${question.color}`}
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-slate-800 rounded-2xl max-w-xl mx-auto">
              <p className="text-slate-400 text-sm">No questions found under this category tab framework layout.</p>
            </div>
          )}
          
          {/* Bottom Call-To-Action Banner Component */}
          <div className="mt-24 rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/50 to-slate-900/10 backdrop-blur-sm p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">Ready to ace your AI interviews?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm md:text-base leading-relaxed">
              Master these interview patterns with our mentor-led program. Get personalized guidance from engineers at top AI companies.
            </p>
            <Link 
              href="/contact?plan=mentor" 
              className="inline-block bg-cyan-500 text-slate-950 font-black px-8 py-4 rounded-xl text-xs tracking-widest uppercase shadow-lg shadow-cyan-500/10 hover:bg-cyan-400 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Interview-Ready
            </Link>
          </div>

        </div>
      </main>

      {/* ==================== FOOTER BAR ==================== */}
      <footer className="border-t border-slate-900 bg-[#0b1120] py-6 px-6 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Code2Career_AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
