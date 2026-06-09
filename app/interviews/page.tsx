'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Clock, 
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

  const filteredQuestions = activeTab === 'All Questions'
    ? INTERVIEW_QUESTIONS_DATA
    : INTERVIEW_QUESTIONS_DATA.filter((q) => q.category === activeTab);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/95 backdrop-blur-sm border-b border-cyan-500/20' : 'bg-[#0f172a]/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-white tracking-tight">
            code2career<span className="text-cyan-400">_ai</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
              Blog
            </Link>
            <Link href="/interviews" className="text-sm text-cyan-400 font-bold">
              Interviews
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 min-h-screen bg-[#0f172a] flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full px-6 py-12 flex-grow">
          
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16 border-b border-slate-800/60 pb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Interview Prep Hub</span>
              <h1 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4 tracking-tight">
                GenAI & Agentic AI <span className="text-cyan-400">Interview Questions</span>
              </h1>
              <p className="text-slate-400 text-base max-w-xl leading-relaxed">
                Master production-level interview questions on Transformers, RAG, LLMs, LangChain, LangGraph, and Multi-Agent systems. From architecture deep-dives to hands-on agentic patterns.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/80 self-start xl:self-end">
              {INTERVIEW_CATEGORIES.map((cat) => (
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
            {filteredQuestions.map((question) => (
              <article key={question.slug} className={`group bg-[#111930] border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 ${question.borderHover}`}>
                <div className="relative w-full h-48 bg-[#090f20] border-b border-slate-800/80 overflow-hidden">
                  <img 
                    src={question.imageUrl} 
                    alt={question.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111930] via-transparent to-transparent opacity-40" />
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className={`text-[10px] font-black tracking-wider ${question.color}`}>
                      {question.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-black tracking-widest uppercase ${question.color}`}>
                        {question.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{question.questionCount}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors line-clamp-2 leading-snug mb-3">
                      {question.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {question.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className={`w-4 h-4 ${question.color}`} />
                      <span className={`text-[11px] font-bold ${question.color}`}>{question.difficulty}</span>
                    </div>
                    <Link href={`/interviews/${question.slug}`} className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors ${question.color}`}>
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-20 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#122244]/40 via-transparent to-transparent bg-[#0d1527] p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-2">Ready to ace your AI interviews?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Master these interview patterns with our mentor-led program. Get personalized guidance from engineers at top AI companies.
            </p>
            <Link href="/contact?plan=mentor" className="inline-block bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-black px-8 py-3.5 rounded-full text-xs tracking-widest uppercase shadow-lg shadow-cyan-500/10 hover:from-cyan-300 hover:to-sky-300 transition-all">
              Get Interview-Ready
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
