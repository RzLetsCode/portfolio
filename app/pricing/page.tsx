import type { Metadata } from 'next';
import Link from 'next/link';
import Pricing from '../../components/Pricing';

export const metadata: Metadata = {
  title: 'Pricing & Plans | code2career_ai',
  description: 'Choose the plan that fits your AI learning journey. Start free with Explore, level up with Career Focus, or go deep with Mentor Loop.',
};

export default function PricingPage() {
  return (
    <>
      {/* Persistant Top Navbar Navigation */}
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
            <Link href="/blog/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              Blog
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

      {/* Main Pricing Section Wrapper */}
      <main className="pt-24 min-h-screen bg-[#0f172a] flex flex-col justify-between">
        <div className="flex-grow pb-16">
          <Pricing />
        </div>

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
