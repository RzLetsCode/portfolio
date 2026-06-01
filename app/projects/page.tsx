import type { Metadata } from 'next';
import Link from 'next/link';
import { FolderOpen } from 'lucide-react';
import Projects from '../../components/Projects';

export const metadata: Metadata = {
  title: 'Production AI Project Ecosystem | code2career_ai',
  description: 'Explore our library of enterprise-grade AI project templates. Build systems utilizing RAG pipelines, Agentic workflows, and vector databases.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* Top Navbar Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
            <span className="text-gray-400">&lt;&gt;</span>
            <span>code2career_ai</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/resources/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Roadmaps
            </Link>
            <Link href="/pricing/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Pricing
            </Link>
          </div>
          <Link
            href="/contact/"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2 rounded-full text-sm transition-colors tracking-wide"
          >
            GET IN TOUCH
          </Link>
        </div>
      </nav>

      {/* Main Content Body */}
      <main className="pt-24 min-h-screen bg-[#0f172a] flex flex-col justify-between">
        
        {/* Project Component Ecosystem Block */}
        <div className="flex-grow pb-12">
          <Projects />
        </div>

        {/* Central Library Resource Block (Repositioned here from Front Page) */}
        <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-[#0d1b3e] to-slate-900 border-t border-b border-slate-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-md px-3 py-1 mb-4">
              <FolderOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Central Library</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Architect Your System Blueprint
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Gain immediate access to our sequential roadmap guidelines, open-source template repositories, and specialized career transformation asset modules.
            </p>
            <Link 
              href="/resources/" 
              className="inline-block bg-transparent hover:bg-cyan-500 border-2 border-cyan-500 text-cyan-400 hover:text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 tracking-wide shadow-lg shadow-cyan-500/5"
            >
              Access Engine Resources
            </Link>
          </div>
        </section>

        {/* Global Footer */}
        <footer className="border-t border-white/10 py-8 px-6 bg-[#090f1e]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-cyan-400 font-bold">code2career_ai</span>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
            <p className="text-gray-600 text-xs">Architected for Freshers &amp; AI Enthusiasts</p>
          </div>
        </footer>
      </main>
    </>
  );
}
