import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Roadmap for Freshers 2025 | code2career_ai',
  description:
    'A clear, structured AI learning roadmap for students and freshers in India. From Python basics to building RAG systems and landing your first AI role.',
  alternates: { canonical: 'https://code2careerai.com/roadmap' },
  openGraph: {
    title: 'AI Roadmap for Freshers 2025 | code2career_ai',
    description: 'Step-by-step AI roadmap from zero to job-ready.',
    url: 'https://code2careerai.com/roadmap',
    type: 'website',
  },
};

const PHASES = [
  {
    phase: '01',
    label: 'Foundation',
    duration: '4–6 weeks',
    color: '#22d3ee',
    steps: [
      { title: 'Python for AI', desc: 'Variables, loops, functions, OOP. Focus on Pandas, NumPy, and writing clean, readable code.', resources: ['Python.org Docs', 'CS50P (free)'] },
      { title: 'Math Essentials', desc: 'Linear algebra (vectors/matrices), basic calculus (gradients), and probability. You only need the intuition, not proofs.', resources: ['3Blue1Brown', 'Khan Academy'] },
      { title: 'Data Manipulation', desc: 'Pandas DataFrames, data cleaning, exploratory data analysis, and visualisation with Matplotlib/Seaborn.', resources: ['Kaggle Pandas Course (free)'] },
    ],
  },
  {
    phase: '02',
    label: 'Core ML',
    duration: '4–6 weeks',
    color: '#818cf8',
    steps: [
      { title: 'Classical Machine Learning', desc: 'Linear regression, logistic regression, decision trees, random forests. Build and evaluate models with Scikit-learn.', resources: ['Scikit-learn Docs', 'fast.ai Practical ML'] },
      { title: 'Model Evaluation', desc: 'Train/val/test splits, cross-validation, bias-variance tradeoff, metrics (accuracy, F1, AUC).', resources: ['Scikit-learn User Guide'] },
      { title: 'Your First ML Project', desc: 'Build a real predictor (house prices, churn, spam detection). Deploy it. Write a clear README.', resources: ['Kaggle Datasets', 'Streamlit for deployment'] },
    ],
  },
  {
    phase: '03',
    label: 'Deep Learning & LLMs',
    duration: '6–8 weeks',
    color: '#34d399',
    steps: [
      { title: 'Neural Networks', desc: 'Perceptrons, activation functions, backpropagation, batch normalisation. Implement in PyTorch.', resources: ['fast.ai Deep Learning', 'Andrej Karpathy’s makemore'] },
      { title: 'Transformers & LLMs', desc: 'Attention mechanism, transformer architecture, how GPT/BERT work. You don’t need to train from scratch.', resources: ['Attention is All You Need (paper)', 'Hugging Face Course'] },
      { title: 'Prompt Engineering', desc: 'System prompts, few-shot examples, chain-of-thought. Learn to get reliable outputs from LLMs.', resources: ['OpenAI Cookbook', 'Anthropic Prompt Library'] },
    ],
  },
  {
    phase: '04',
    label: 'Applied AI (Portfolio Stage)',
    duration: '6–8 weeks',
    color: '#f59e0b',
    steps: [
      { title: 'RAG Systems', desc: 'Embeddings, vector databases (Pinecone/Chroma), retrieval pipelines with LangChain. Build a document Q&A system.', resources: ['LangChain Docs', 'Pinecone Quickstart'] },
      { title: 'AI Agents', desc: 'ReAct agents, tool use, memory, multi-agent systems with LangGraph. Build an agent that does something real.', resources: ['LangGraph Docs', 'Anthropic Agent Patterns'] },
      { title: 'Production Deployment', desc: 'Package your project, write a proper README, deploy to Streamlit/Vercel/Hugging Face Spaces. Optimise for interviews.', resources: ['Vercel Docs', 'Streamlit Cloud'] },
    ],
  },
  {
    phase: '05',
    label: 'Career Execution',
    duration: 'Ongoing',
    color: '#f97316',
    steps: [
      { title: 'GitHub Portfolio Polish', desc: 'Clean README, architecture diagram, demo link. Make every repo tell a story that recruiters can follow.', resources: ['code2career_ai GitHub Audit Service'] },
      { title: 'LinkedIn + Resume', desc: 'Reframe experience in AI terms. Highlight RAG, agents, and production thinking. ATS-optimise your resume.', resources: ['code2career_ai AI-Optimised Narrative'] },
      { title: 'Interview Preparation', desc: 'ML system design, code-level explanations of your projects, behavioural framing for AI roles.', resources: ['code2career_ai Mock Interviews'] },
    ],
  },
];

export default function RoadmapPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'AI Learning Roadmap for Freshers 2025',
    description: 'A step-by-step roadmap from Python basics to landing an AI job.',
    step: PHASES.map((p) => ({ '@type': 'HowToSection', name: p.label, itemListElement: p.steps.map((s) => ({ '@type': 'HowToStep', name: s.title, text: s.desc })) })),
  };

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f9fafb' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(51,65,85,0.5)', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1rem', textDecoration: 'none' }}>&lt;&gt; code2career_ai</Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[['Blog', '/blog'], ['YouTube', '/youtube'], ['Resources', '/resources'], ['Contact', '/contact']].map(([l, h]) => (
            <Link key={h} href={h} style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        <div style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748b' }}>ROADMAP 2025</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0.5rem 0 0.75rem' }}>AI Learning Path for Freshers</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '38rem', lineHeight: 1.7 }}>A structured, opinionated sequence from Python basics to shipping your first production AI project and getting hired. 5 phases. ~6 months.</p>
        </div>

        {PHASES.map((phase, idx) => (
          <div key={phase.phase} style={{ marginBottom: '3rem', position: 'relative' }}>
            {idx < PHASES.length - 1 && (
              <div style={{ position: 'absolute', left: '1.25rem', top: '3.5rem', bottom: '-1.5rem', width: '2px', background: `linear-gradient(to bottom, ${phase.color}44, transparent)` }} />
            )}

            {/* Phase header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: `${phase.color}22`, border: `2px solid ${phase.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, color: phase.color, flexShrink: 0 }}>{phase.phase}</div>
              <div>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f9fafb', margin: 0 }}>{phase.label}</h2>
                <span style={{ fontSize: '0.75rem', color: '#475569' }}>{phase.duration}</span>
              </div>
            </div>

            {/* Steps */}
            <div style={{ paddingLeft: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {phase.steps.map((step) => (
                <div key={step.title} style={{ borderRadius: '14px', border: '1px solid rgba(51,65,85,0.8)', background: 'rgba(15,23,42,0.95)', padding: '1.1rem 1.25rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f9fafb', marginBottom: '0.4rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '0.6rem' }}>{step.desc}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {step.resources.map((r) => (
                      <span key={r} style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', border: `1px solid ${phase.color}44`, color: phase.color, letterSpacing: '0.04em' }}>{r}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ marginTop: '3rem', borderRadius: '20px', border: '1px solid rgba(30,64,175,0.7)', background: 'radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 60%), rgba(15,23,42,0.97)', padding: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>Want a personalized version of this roadmap?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>We tailor it to your current level, available time, and target companies.</p>
          <Link href="/contact?plan=explore" style={{ background: 'linear-gradient(135deg, #22d3ee, #38bdf8)', color: '#020617', fontWeight: 700, padding: '0.75rem 2rem', borderRadius: '999px', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Get My Custom Roadmap
          </Link>
        </div>
      </div>
    </main>
  );
}
