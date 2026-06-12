import type { Metadata } from 'next';
import Link from 'next/link';
import { Map, Code, Cpu, Layers, ChevronRight } from 'lucide-react';
import Pricing from '../../components/Pricing';

export const metadata: Metadata = {
  title: 'Pricing & Plans | code2career_ai',
  description: 'Choose the plan that fits your AI learning journey. Start free with Explore, level up with Career Focus, or go deep with Mentor Loop.',
};

export default function PricingPage() {
  return (
    <>
      {/* Persistent Top Navbar Navigation */}
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
            <Link href="/projects/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Projects
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

      {/* Main Container */}
      <main className="pt-24 min-h-screen bg-[#0f172a] flex flex-col justify-between">
        
        {/* Core Pricing Component Area */}
        <div className="pb-12">
          <Pricing />
        </div>

        {/* Dynamic Eyecatching Value Proposition Block (Bottom Anchor Placement) */}
        <section className="py-24 px-6 border-t border-slate-800/60 bg-[#0b1329]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                What Learners Actually Get
              </h2>
              <p className="text-cyan-400 font-semibold text-lg tracking-wide">
                A definitive execution path—not just another playlist of video courses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Roadmaps */}
              <div className="bg-[#121b36] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Structured AI Roadmaps</h3>
                <p className="text-gray-400 leading-relaxed">
                  Move systematically from <em className="text-cyan-300 not-italic font-medium">"I'm lost in AI"</em> to a clear, calculated order of high-income skills, architectural topics, and milestones tailored to your engineering stage.
                </p>
              </div>

              {/* Card 2: Portfolios */}
              <div className="bg-[#121b36] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Production-Ready Portfolios</h3>
                <p className="text-gray-400 leading-relaxed">
                  Stop compiling toy scripts. Construct enterprise systems you can proudly ship to GitHub, confidently break down during technical interviews, and systematically upscale over time.
                </p>
              </div>

              {/* Card 3: Mentorship */}
              <div className="bg-[#121b36] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Career-Focused Mentorship</h3>
                <p className="text-gray-400 leading-relaxed">
                  Navigate career engineering pivots with highly targeted profile positioning, technical resume optimization, and engineering-first architecture code reviews.
                </p>
              </div>

              {/* Card 4: Ecosystem */}
              <div className="bg-[#121b36] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Connected Learning Ecosystem</h3>
                <p className="text-gray-400 leading-relaxed">
                  Experience total alignment across engineering media. Our production platform, public GitHub repos, specialized technical blog, and YouTube assets combine into a singular narrative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Structural Footer */}
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
