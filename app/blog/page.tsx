'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Terminal, 
  Menu, 
  X, 
  Image as ImageIcon 
} from 'lucide-react';

const BLOG_CATEGORIES = ['All Articles', 'AI Roadmaps', 'System Design', 'Career Strategy'];

const BLOG_POSTS_DATA = [
  // CATEGORY 1: AI ROADMAPS (5 Articles)
  {
    title: 'The Definitive 90-Day AI Engineer Roadmap for 2026',
    category: 'AI Roadmaps',
    excerpt: 'Skip the endless math textbook sandboxes. Learn the exact sequence of programming skills, LLM orchestration, and cloud patterns required to transition into production roles.',
    slug: '90-day-ai-engineer-roadmap-2026',
    date: '2026-05-28',
    readingTime: '8 min read',
    imgPlaceholder: 'Flow Diagram: Skill Progression Pipeline from Foundation to Advanced Graph State Engines',
    color: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40'
  },
  {
    title: 'Python Beyond Scripts: OOP & Concurrency in AI Systems',
    category: 'AI Roadmaps',
    excerpt: 'Why standard data science notebooks fail in software deployments. Master asynchronous execution frameworks, rate-limiting, and state validation queues.',
    slug: 'python-concurrency-production-ai',
    date: '2026-05-14',
    readingTime: '6 min read',
    imgPlaceholder: 'Architecture Blueprint: Asynchronous Thread Scheduling Handling API Rate Limits',
    color: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40'
  },
  {
    title: 'Deconstruct Open-Source Foundations: Local LLM Infrastructure',
    category: 'AI Roadmaps',
    excerpt: 'Step-by-step setup guide for orchestrating open weight models locally. Dive into Hugging Face transformers architectures, quantization profiles, and inference memory constraints.',
    slug: 'local-llm-infrastructure-quantization',
    date: '2026-04-22',
    readingTime: '10 min read',
    imgPlaceholder: 'Hardware Layout: VRAM Allocation Matrix Across FP16 vs INT4 Tensors',
    color: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40'
  },
  {
    title: 'The Mathematics of Vector Spaces for Non-Mathematicians',
    category: 'AI Roadmaps',
    excerpt: 'Demystifying high-dimensional geometry. A visual breakdown of cosine similarity, dot products, and dense representation layer weights.',
    slug: 'vector-space-embeddings-math',
    date: '2026-03-11',
    readingTime: '5 min read',
    imgPlaceholder: 'Geometric Chart: Dimensional Angular Distances within a 3D Tensor Projection Space',
    color: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40'
  },
  {
    title: 'Transition from Web Developer to Generative AI Engineer',
    category: 'AI Roadmaps',
    excerpt: 'How to cleanly map your existing fullstack Next.js and API skills onto cognitive orchestration layer development tracks.',
    slug: 'web-dev-to-ai-engineer-pivot',
    date: '2026-02-19',
    readingTime: '7 min read',
    imgPlaceholder: 'System Stack Map: Layer Replacement Alignment (Database to Vector Store)',
    color: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40'
  },

  // CATEGORY 2: SYSTEM DESIGN (5 Articles)
  {
    title: 'Production RAG: Layout-Aware Chunking Strategies',
    category: 'System Design',
    excerpt: 'Stop relying on character counters. Learn semantic metadata-driven chunk parsing over messy enterprise multi-column PDF layouts to eliminate hallucinations.',
    slug: 'production-rag-layout-chunking',
    date: '2026-05-25',
    readingTime: '9 min read',
    imgPlaceholder: 'Data Pipeline: PDF Hierarchical Node Tree Breaking Elements into Parent-Child Objects',
    color: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40'
  },
  {
    title: 'Orchestrating Stateful Agent Swarms with LangGraph',
    category: 'System Design',
    excerpt: 'Move away from basic sequential chains. Design multi-agent system state trees, handling cyclical feedback logic loops and conditional edge routing.',
    slug: 'langgraph-stateful-agent-swarms',
    date: '2026-05-02',
    readingTime: '12 min read',
    imgPlaceholder: 'State Graph Canvas: Multi-Agent Asynchronous Supervisor Execution Tree Loop',
    color: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40'
  },
  {
    title: 'Hybrid Vector Search Scaling Patterns over Pinecone & Azure',
    category: 'System Design',
    excerpt: 'Combining BM25 keyword matching mechanics with dense neural vector lookups. Fine-tune your retrieval structures to optimize enterprise retrieval precision scores.',
    slug: 'hybrid-search-pinecone-azure',
    date: '2026-04-10',
    readingTime: '8 min read',
    imgPlaceholder: 'Cloud Topology: Reciprocal Rank Fusion (RRF) Blending Layer Architecture',
    color: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40'
  },
  {
    title: 'Text-to-SQL Systems: Preventing Relational Exploitation Drops',
    category: 'System Design',
    excerpt: 'How to safely build dynamic database querying interfaces. Shield backend infrastructures utilizing schema isolation patterns and sandboxed verification boundaries.',
    slug: 'text-to-sql-security-guardrails',
    date: '2026-03-29',
    readingTime: '7 min read',
    imgPlaceholder: 'Security Matrix Flow: Input Prompt Filtering Preventing Query Drops and Unauthorized Injections',
    color: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40'
  },
  {
    title: 'GraphRAG Unpacked: Mapping Entity Relations via Neo4j',
    category: 'System Design',
    excerpt: 'Diving into entity relation extractions. Build structured context indexes over complex unorganized technical libraries.',
    slug: 'graph-rag-neo4j-entity-mapping',
    date: '2026-02-05',
    readingTime: '11 min read',
    imgPlaceholder: 'Knowledge Graph Visualization: Linked Structural Nodes and Attribute Link Properties',
    color: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40'
  },

  // CATEGORY 3: CAREER STRATEGY (5 Articles)
  {
    title: 'Tear Down Your Tutorial Code: Building "Senior-Level" Portfolios',
    category: 'Career Strategy',
    excerpt: 'Recruiters are tired of seeing identical weather apps and generic chat clones. Learn how to design unique production systems that prove architectural capabilities.',
    slug: 'senior-level-ai-portfolio-teardown',
    date: '2026-05-20',
    readingTime: '6 min read',
    imgPlaceholder: 'Portfolio Blueprint: Structuring Repositories for Linting, Testing, and System Deployment Layouts',
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40'
  },
  {
    title: 'Bypass the ATS Filter: Position Your Resume for AI Architecture Roles',
    category: 'Career Strategy',
    excerpt: 'Stop listing vague descriptions like "Interested in Machine Learning". Re-engineer profiles to emphasize explicit business metrics and system orchestration capabilities.',
    slug: 'bypass-ats-ai-resume-positioning',
    date: '2026-04-18',
    readingTime: '5 min read',
    imgPlaceholder: 'Resume Comparative Matrix: Highlighting Ineffective Phrase Transformations to Dynamic Structural Keywords',
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40'
  },
  {
    title: 'How to Structure and Break Down Your AI Code in Technical Interviews',
    category: 'Career Strategy',
    excerpt: 'A comprehensive engineering guide on articulating runtime execution limits, evaluation validation metrics, and token consumption mitigation patterns.',
    slug: 'articulate-ai-code-technical-interviews',
    date: '2026-03-15',
    readingTime: '7 min read',
    imgPlaceholder: 'STAR Format Workflow: System Architecture Decomposition Blueprint Mapping Grid',
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40'
  },
  {
    title: 'Navigating Senior Tech Career Pivots Without Starting Over',
    category: 'Career Strategy',
    excerpt: 'A practical roadmap for senior full-stack developers and data analysts looking to re-brand and pivot directly into specialized AI engineering tracks.',
    slug: 'senior-tech-career-pivots-ai',
    date: '2026-02-27',
    readingTime: '8 min read',
    imgPlaceholder: 'Career Growth Mapping: Intersecting Core Legacy Strengths with Advanced Cognitive Architecture Models',
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40'
  },
  {
    title: 'The AI Engineering Interview Question Bank for 2026',
    category: 'Career Strategy',
    excerpt: 'A review of verified scenario design questions gathered directly from leading production engineering team interviews across the country.',
    slug: 'ai-engineering-interview-questions-2026',
    date: '2026-01-14',
    readingTime: '9 min read',
    imgPlaceholder: 'Technical Rubric Map: Evaluation Benchmarks Measuring Production System Engineering Readiness',
    color: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40'
  }
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('All Articles');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredPosts = activeTab === 'All Articles'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter((p) => p.category === activeTab);

  return (
    <>
      {/* Dynamic Global Top Navigation bar */}
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

      {/* Main Container Core */}
      <main className="pt-24 min-h-screen bg-[#0f172a] flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full px-6 py-12 flex-grow">
          
          {/* Header Introduction Area */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16 border-b border-slate-800/60 pb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">The Insights Engine</span>
              <h1 className="text-3xl md:text-5xl font-black text-white mt-2 mb-4 tracking-tight">Production AI Chronicles</h1>
              <p className="text-slate-400 text-base max-w-xl leading-relaxed">Technical guides, system blueprints, and deployment frameworks outlining the transition from fresher to hired engineer.</p>
            </div>

            {/* Dynamic Interactive Category Tab Filters */}
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

          {/* Core Article Canvas Grid Array */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className={`group bg-[#111930] border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 ${post.borderHover}`}>
                
                {/* Visual Image Display Component Area */}
                <div className="relative w-full h-44 bg-[#090f20] border-b border-slate-800/80 p-4 flex flex-col justify-center items-center text-center group-hover:bg-[#0c142c] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-500 mb-3 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-medium text-slate-500 max-w-xs px-4 leading-normal group-hover:text-slate-400 transition-colors">
                    {post.imgPlaceholder}
                  </span>
                </div>

                {/* Text Summary Data Content Block */}
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

                  {/* Route Action Anchor Elements */}
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

          {/* Interactive Dynamic Bottom Callout Module */}
          <div className="mt-20 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#122244]/40 via-transparent to-transparent bg-[#0d1527] p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-2">Want personalized system review tracking?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">Join our Mentor Loop setup to scale project logic maps directly with enterprise engineers.</p>
            <Link href="/contact?plan=mentor" className="inline-block bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-black px-8 py-3.5 rounded-full text-xs tracking-widest uppercase shadow-lg shadow-cyan-500/10 hover:from-cyan-300 hover:to-sky-300 transition-all">
              Initialize Mentorship
            </Link>
          </div>

        </div>

        {/* Unified Standard Dynamic Copyright Site Footer */}
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
