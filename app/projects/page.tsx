'use client';

import { useState } from 'react';
import { 
  Terminal, 
  ArrowUpRight, 
  ShieldCheck, 
  GitFork,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const PROJECT_CATEGORIES = ['All Tiers', 'Tier 1: Core AI', 'Tier 2: Advanced RAG', 'Tier 3: Enterprise Agents'];

const PROJECTS_DATA = [
  // TIER 1: CORE AI & DATA ENGINEERING (5 Projects)
  {
    title: 'Semantic Search Engine from Scratch',
    tier: 'Tier 1: Core AI',
    desc: 'Move past keyword matching. Build a dense vector search engine that maps user intent using sentence-transformers and cosine similarity computations.',
    tech: ['Python', 'Sentence-Transformers', 'FAISS', 'NumPy'],
    impact: 'Teaches high-dimensional vector math and embedding management.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'AI Resume Keyword Optimizer',
    tier: 'Tier 1: Core AI',
    desc: 'An automated parsing pipeline evaluating raw text resumes against enterprise job descriptions, scoring skill gaps using mathematical similarity metrics.',
    tech: ['Python', 'Scikit-Learn', 'NLTK', 'Tokenizers'],
    impact: 'Mastery over data extraction, tokenization, and vector space profiling.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'LLM Dataset Synthetic Generator',
    tier: 'Tier 1: Core AI',
    desc: 'Build a rigorous backend pipeline using seed prompts to generate high-quality synthetic instruction fine-tuning datasets matching specific domain text distribution formatting.',
    tech: ['Python', 'OpenAI API', 'Pydantic', 'Pandas'],
    impact: 'Teaches data formatting validation, rate-limiting handlers, and cost extraction.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'Real-time Content Categorizer',
    tier: 'Tier 1: Core AI',
    desc: 'Engineered pipeline ingestion system that pulls incoming news or code feeds and labels them into semantic topics dynamically via zero-shot classification pipelines.',
    tech: ['Python', 'Hugging Face Hub', 'FastAPI', 'PyTorch'],
    impact: 'Hands-on orchestration of localized open-source model inference cycles.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'Vector Database Migration Ingestion Engine',
    tier: 'Tier 1: Core AI',
    desc: 'A robust ETL data utility built to extract structured data files, generate token blocks, and safely batch-upload data items into managed remote clouds.',
    tech: ['Python', 'ChromaDB', 'Pinecone', 'Docker'],
    impact: 'Teaches data chunking patterns, upsert concurrency processing, and system optimization.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },

  // TIER 2: ADVANCED RAG & ENTERPRISE CONTEXT (5 Projects)
  {
    title: 'Advanced Production RAG Pipeline',
    tier: 'Tier 2: Advanced RAG',
    desc: 'A complete retrieval pipeline managing thousands of complex enterprise PDFs. Integrates layout-aware chunking, hybrid keyword/dense vectors, and re-ranking layers.',
    tech: ['Next.js', 'LangChain', 'Pinecone', 'Azure Blob', 'Cohere'],
    impact: 'Resolves critical industry problems like LLM hallucination and context window limits.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'Healthcare Payer Policy Guard Assistant',
    tier: 'Tier 2: Advanced RAG',
    desc: 'A context-aware AI engine accessing massive insurance plan coverage blueprints. Implements strict custom guardrails to secure private user metrics.',
    tech: ['Python', 'OpenAI API', 'ChromaDB', 'Streamlit'],
    impact: 'Demonstrates zero-shot/few-shot boundary alignment and structural prompt design.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'SQL database Natural Language UI (Text-to-SQL)',
    tier: 'Tier 2: Advanced RAG',
    desc: 'An automated analytical middleware engine enabling safe text questions to translate into syntactically valid relational database query executions.',
    tech: ['LangChain', 'PostgreSQL', 'SQLAlchemy', 'Gradio'],
    impact: 'Teaches dynamic structural metadata loading and query isolation security rules.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'Multi-Modal Architectural Code Companion',
    tier: 'Tier 2: Advanced RAG',
    desc: 'An ingestion assistant that references structural text sheets alongside technical flow charts to process system queries accurately.',
    tech: ['Python', 'LlamaIndex', 'Qdrant', 'GPT-4o'],
    impact: 'Teaches vision-token extraction layouts and multi-vector pairing indexes.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'GraphRAG Knowledge Mapping Hub',
    tier: 'Tier 2: Advanced RAG',
    desc: 'Extract complex domain entities and structural relationships from unorganized documentation folders, arranging them into queryable entity networks.',
    tech: ['Python', 'Neo4j', 'LangChain', 'LlamaIndex'],
    impact: 'Mastering semantic entity linkage, graph query logic, and recursive search strategies.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },

  // TIER 3: AUTONOMOUS AGENTS & ECOSYSTEMS (5 Projects)
  {
    title: 'Multi-Agent Code Review Engine',
    tier: 'Tier 3: Enterprise Agents',
    desc: 'An automated Agentic ecosystem triggered by GitHub webhooks. One agent lint-checks code, another evaluates security vulnerabilities, and a supervisor compiles reviews.',
    tech: ['LangGraph', 'Python', 'FastAPI', 'Docker', 'GitHub API'],
    impact: 'Advanced state machine routing and asynchronous agent orchestration.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'Autonomous Competitive Intelligence Agent',
    tier: 'Tier 3: Enterprise Agents',
    desc: 'An autonomous agent network that takes a user query, targets live internet vectors, extracts raw data components, validates facts, and generates structured market reports.',
    tech: ['CrewAI', 'Python', 'Tavily API', 'Pydantic'],
    impact: 'Teaches self-directed tooling loops, task subdivision, and error recovery handling.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'Agentic Customer Support Ticketing Network',
    tier: 'Tier 3: Enterprise Agents',
    desc: 'A production multi-agent graph architecture designed to handle client complaints, update databases, and dynamically ping humans if an edge-case emerges.',
    tech: ['LangGraph', 'Python', 'Redis', 'PostgreSQL'],
    impact: 'Teaches persistent checkpointing memory loops and human-in-the-loop validation blocks.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'Autonomous Financial Data Synthesizer',
    tier: 'Tier 3: Enterprise Agents',
    desc: 'A workflow processing complex earnings spreadsheets and parsing public statements to calculate ratios and produce investor-ready audit logs.',
    tech: ['Autogen', 'Python', 'YFinance API', 'OpenAI'],
    impact: 'Mastery over multi-agent conversational design patterns and sandboxed code execution.',
    github: 'https://github.com/RzLetsCode/portfolio'
  },
  {
    title: 'Enterprise API Orchestration Swarm',
    tier: 'Tier 3: Enterprise Agents',
    desc: 'An executive scheduling coordinator agent reading dynamic REST openAPI documentation profiles to auto-build multi-step software integration jobs.',
    tech: ['LangChain Agents', 'Python', 'FastAPI', 'Pydantic V2'],
    impact: 'Teaches advanced dynamic parameter generation and zero-shot planning frameworks.',
    github: 'https://github.com/RzLetsCode/portfolio'
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All Tiers');

  const filteredProjects = activeTab === 'All Tiers' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.tier === activeTab);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="projects-portal">
      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-md px-3 py-1 mb-3">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Production Labs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            The AI Architecture Blueprint
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-sm leading-relaxed">
            Stop building generic tutorial apps. Master the exact technical stacks required to design, scale, and ship enterprise generative AI platforms.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/80 self-start md:self-end">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === category
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {category.split(': ')[1] || category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group relative bg-[#111930] border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md bg-slate-950/80 border ${
                  project.tier.includes('Tier 1') ? 'text-cyan-400 border-cyan-500/10' :
                  project.tier.includes('Tier 2') ? 'text-indigo-400 border-indigo-500/10' :
                  'text-emerald-400 border-emerald-500/10'
                }`}>
                  {project.tier.split(': ')[0]}
                </span>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors mb-2">
                {project.title}
              </h3>
              
              <p className="text-xs leading-relaxed text-slate-400 mb-4">
                {project.desc}
              </p>
            </div>

            {/* Bottom Meta Assembly */}
            <div className="mt-4 pt-4 border-t border-slate-800/50">
              <div className="flex items-start gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-500 italic leading-snug">
                  <strong className="text-slate-400 not-italic font-semibold">Focus:</strong> {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* SMART USER ENGAGEMENT CARD: Bring Your Own Project (BYOP) */}
        <div className="relative bg-gradient-to-br from-[#132549] to-[#0b101f] border-2 border-dashed border-cyan-500/20 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 group hover:border-cyan-500/40">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-[10px] font-black tracking-widest uppercase bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                Ecosystem Upgrade
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              Have an Existing Project?
            </h3>
            
            <p className="text-xs leading-relaxed text-slate-400 mb-4">
              Do you already have a student portfolio project, hackathon build, or local script that feels generic or raw? Don't delete it. We can help you scale it.
            </p>

            <ul className="text-[11px] text-slate-400 space-y-1.5 list-disc list-inside">
              <li>Inject proper layout-aware chunking</li>
              <li>Migrate local arrays to vector clouds</li>
              <li>Refactor flat scripts into asynchronous graphs</li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/60 w-full">
            <Link 
              href="/contact?ref=project-upgrade"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Upgrade Your Code Base</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
