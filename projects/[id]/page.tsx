import Link from 'next/link';
import { ArrowLeft, Zap, Server, Globe, Github, Linkedin } from 'lucide-react';

const projectData = {
  'rag-system': {
    title: 'Enterprise AI RAG System',
    description: 'A sophisticated Retrieval-Augmented Generation pipeline designed for secure, large-scale enterprise knowledge management.',
    tech: ['Python', 'LangChain', 'Pinecone', 'Azure OpenAI', 'Docker'],
    architecture: 'Multi-stage pipeline featuring semantic hybrid search, dynamic re-ranking, and citation-backed response generation.',
    scalability: 'Horizontally scalable microservices deployed on Azure Kubernetes Service, processing thousands of documents concurrently.',
    impact: 'Implemented for a Fortune 500 financial institution, reducing document retrieval time by 85% and improving answer accuracy by 60%.',
    features: [
      'Hybrid Semantic Search with Pinecone',
      'Secure Document Chunking & Embedding',
      'Contextual Citation Generation',
      'Enterprise-grade Security & PII Masking'
    ]
  },
  'multi-agent': {
    title: 'Multi-Agent AI Orchestration',
    description: 'An autonomous agent framework that orchestrates specialized LLM agents to solve complex business process automations.',
    tech: ['Python', 'Agent Framework', 'Snowflake', 'Azure', 'FastAPI'],
    architecture: 'Hierarchical agent architecture with a central manager and specialized worker agents for research, execution, and validation.',
    scalability: 'Distributed task queue system capable of handling hundreds of parallel agentic workflows across different cloud providers.',
    impact: 'Automated 70% of insurance claim verification processes, resulting in millions of dollars in operational savings annually.',
    features: [
      'Dynamic Task Decomposition',
      'Agent Memory & State Management',
      'Human-in-the-loop Validation',
      'Cross-platform Tool Integration'
    ]
  },
  'healthcare-analytics': {
    title: 'Healthcare AI Analytics Platform',
    description: 'A high-performance analytics engine that leverages predictive modeling to improve patient outcomes and operational efficiency.',
    tech: ['Azure AI', 'Python', 'Snowflake', 'PyTorch', 'PowerBI'],
    architecture: 'Real-time data streaming and batch processing architecture with automated feature engineering and model monitoring.',
    scalability: 'Elastic compute clusters on Azure Machine Learning, capable of training models on multi-terabyte healthcare datasets.',
    impact: 'Reduced patient readmission rates by 22% through early risk detection and personalized intervention recommendations.',
    features: [
      'Predictive Risk Stratification',
      'Automated HIPAA-compliant Data Masking',
      'Interactive Clinical Dashboards',
      'Model Drift Detection & Retraining'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({
    id: id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-black mb-6">Project Not Found</h1>
        <Link href="/" className="text-cyan-400 flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent underline decoration-cyan-500/30">
            Rajesh Kumar
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-20 px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6">
            <Zap size={12} /> Featured Project
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight">{project.title}</h1>
          <p className="text-xl text-slate-400 leading-relaxed font-medium mb-10">{project.description}</p>
          
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tech.map((t, i) => (
              <span key={i} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-12">
          <section className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
              <Server className="text-cyan-400" /> Architecture & Engineering
            </h2>
            <p className="text-slate-300 leading-relaxed font-medium mb-6">{project.architecture}</p>
            <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800/50">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Scalability</p>
              <p className="text-slate-400 text-sm italic">{project.scalability}</p>
            </div>
          </section>

          <section className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl border-l-cyan-500/50 border-l-4">
            <h2 className="text-2xl font-black mb-6 text-cyan-400">Business Impact</h2>
            <p className="text-xl font-bold text-white mb-8">{project.impact}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-20 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl transition-all border border-slate-800 flex items-center gap-2">
            <ArrowLeft size={18} /> View All Projects
          </Link>
          <div className="flex gap-4">
            <Link href="https://github.com/RzLetsCode" target="_blank" className="p-4 bg-slate-900 rounded-xl hover:text-cyan-400 transition-colors border border-slate-800">
              <Github size={20} />
            </Link>
            <Link href="https://www.linkedin.com/company/code2career-ai/?viewAsMember=true" target="_blank" className="p-4 bg-slate-900 rounded-xl hover:text-cyan-400 transition-colors border border-slate-800">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-slate-900 text-center text-slate-500 text-[10px] font-black tracking-widest uppercase">
        © 2026 Rajesh Kumar • Enterprise AI Architecture
      </footer>
    </div>
  );
}
