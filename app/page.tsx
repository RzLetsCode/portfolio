'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// 1. Import your new Hero component
import Hero from '../components/Hero'; 
import { 
  Github, Linkedin, Mail, ArrowRight, Code, Database, Zap, 
  Youtube, Server, Globe, ChevronRight, Sparkles, Compass, 
  Map, Cpu, Layers, Workflow, MessagesSquare, RefreshCw,
  MessageCircle, X, Send
} from 'lucide-react';

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showJourney, setShowJourney] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const journeySteps = [
    { num: '01', title: 'Understand the Path', desc: 'Foundations → ML → DL → LLMs → RAG → MLOps.', icon: <Map className="w-5 h-5" />, tools: ['Python', 'Data', 'Git'], bullets: ['Identify industry tools.', 'Clear "AI Engineer" roadmap.'] },
    { num: '02', title: 'Learn with Systems', desc: 'Study simplified versions of real production systems.', icon: <Cpu className="w-5 h-5" />, tools: ['LangChain', 'Pinecone', 'Azure'], bullets: ['RAG pipelines.', 'Multi‑agent orchestration.'] },
    { num: '03', title: 'Build Your Projects', desc: 'Design projects at a student‑appropriate scale.', icon: <Layers className="w-5 h-5" />, tools: ['Architecture', 'Metrics'], bullets: ['Mini RAG apps.', 'Agentic workflows.'] },
    { num: '04', title: 'Refine Your Stack', desc: 'Align tools with realistic AI job descriptions.', icon: <Workflow className="w-5 h-5" />, tools: ['PyTorch', 'Azure', 'Snowflake'], bullets: ['Focus on value-add tools.', 'Avoid buzzword traps.'] },
    { num: '05', title: 'Tell the Right Story', desc: 'Translate AI work into recruiter‑friendly language.', icon: <MessagesSquare className="w-5 h-5" />, tools: ['RAG', 'Agents', 'Impact'], bullets: ['Highlight business impact.', 'Deep tech terminology.'] },
    { num: '06', title: 'Iterate with Feedback', desc: 'Clear, honest feedback on project and skill gaps.', icon: <RefreshCw className="w-5 h-5" />, tools: ['Gaps', 'Strategy'], bullets: ['Next experiments to run.', 'Application guidance.'] }
  ];

  const studentProjects = [
    {
      id: 'p1',
      title: 'Personal Learning Agent',
      desc: 'Build a RAG-based system that acts as a personalized coach, helping students navigate complex documentation and course materials.',
      tech: ['OpenAI', 'LangChain', 'Streamlit'],
      impact: 'Semantic Search Mastery'
    },
    {
      id: 'p2',
      title: 'Automated Resume Matcher',
      desc: 'An AI tool that compares resumes against job descriptions to provide scoring and missing skill analysis for freshers.',
      tech: ['Python', 'Pinecone', 'Azure'],
      impact: 'Vector DB Implementation'
    },
    {
      id: 'p3',
      title: 'Open Source AI Contribs',
      desc: 'A structured guide on contributing to major AI repositories (LangChain, AutoGPT) to build a professional GitHub presence.',
      tech: ['Git', 'OSS Patterns', 'Code Review'],
      impact: 'Industry-Standard Presence'
    }
  ];

  const mentorshipSteps = [
    {
      num: 'A',
      title: 'Career Pivot Audit',
      desc: 'A 30-minute high-impact session to map your background to a 3-month actionable AI plan.',
      tools: ['Personalized Roadmap'],
      bullets: ['Kill the tutorial hell confusion.', 'Focus only on what the market needs.']
    },
    {
      num: 'B',
      title: 'AI-Optimized Narrative',
      desc: 'Transforming your LinkedIn and Resume to pass the specific filters of modern AI firms.',
      tools: ['ATS Mastery', 'Storytelling'],
      bullets: ['Highlight RAG & Agentic expertise.', 'Fix mistakes that block shortlisting.']
    },
    {
      num: 'C',
      title: 'Production Code Review',
      desc: 'Code-level scrutiny of your GitHub repos. We ensure your projects look like professional work.',
      tools: ['Code Quality', 'Architecture'],
      bullets: ['Make your projects recruiter-ready.', 'Validate scalability and security.']
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
              <Code className="text-white w-5 h-5" />
            </div>
            {/* Fixed the missing 'r' in code2career_ai here */}
            <span className="text-xl font-bold tracking-tighter text-white">code2career_ai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Career Path', 'YouTube', 'Blog'].map((item) => (
              <Link 
                key={item} 
                href={item === 'YouTube' ? 'https://www.youtube.com/@code2career_ai' : item === 'Blog' ? 'https://hashnode.com/@code2career-ai' : item === 'Career Path' ? '#journey' : `#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                {...(item === 'YouTube' || item === 'Blog' ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item}
              </Link>
            ))}
            <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-white text-slate-950 text-sm font-bold hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. Replaced the entire hardcoded Hero Section with your new Component */}
        <Hero />

        {/* AI Journey Section */}
        <section id="journey" className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-slate-700">
              <button onClick={() => setShowJourney(!showJourney)} className="w-full flex items-center justify-between p-10 text-left focus:outline-none group">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Compass className="text-cyan-400 w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-2">6 Steps</div>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">How code2career_ai helps you – Your AI Journey</h3>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center transition-all duration-500 ${showJourney ? 'rotate-180 bg-white text-slate-950' : 'text-slate-500'}`}>
                  <ChevronRight className="w-6 h-6 rotate-90" />
                </div>
              </button>
              <div className={`transition-all duration-700 ease-in-out ${showJourney ? 'max-h-[3000px] opacity-100 pb-12' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {journeySteps.map((step, idx) => (
                    <div key={idx} className="p-8 rounded-[32px] bg-slate-950/50 border border-slate-800 hover:border-cyan-500/30 transition-all group/card relative overflow-hidden">
                      <div className="absolute top-4 right-6 text-7xl font-black text-slate-900/50 group-hover/card:text-cyan-500/5 transition-colors leading-none">{step.num}</div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-6 group-hover/card:bg-cyan-500 group-hover/card:text-slate-950 transition-all">{step.icon}</div>
                        <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mb-6">{step.desc}</p>
                        <div className="space-y-4 pt-6 border-t border-slate-900">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Key Focus</span>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {step.tools.map((t, i) => <span key={i} className="px-2.5 py-1 rounded-md bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-[9px] font-bold">{t}</span>)}
                          </div>
                          <ul className="space-y-2">
                            {step.bullets.map((b, i) => <li key={i} className="flex items-start gap-2 text-[11px] text-slate-500"><div className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5" />{b}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Freshman Work Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">Project Ecosystem</div>
                <h2 className="text-6xl font-black text-white tracking-tighter leading-none">Freshman <span className="text-cyan-400">Track.</span></h2>
              </div>
              <p className="text-slate-500 text-sm max-w-sm">Industry-standard project patterns designed for students and career switchers.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {studentProjects.map((project, i) => (
                <div key={project.id} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[40px] blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative h-[420px] p-8 rounded-[32px] bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-8 text-cyan-400 group-hover:scale-110 transition-transform">
                        {i === 0 ? <Zap className="w-6 h-6" /> : i === 1 ? <Globe className="w-6 h-6" /> : <Database className="w-6 h-6" />}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <p className="text-sm text-slate-400 mb-6 line-clamp-3">{project.desc}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="pt-6 border-t border-slate-800">
                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">Core Impact</div>
                        <div className="text-xs text-white font-medium mb-4">{project.impact}</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, j) => <span key={j} className="px-3 py-1 rounded-lg bg-slate-800 text-[10px] font-bold text-slate-400">{t}</span>)}
                        </div>
                      </div>
                      <button className="w-full py-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-bold text-white group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all flex items-center justify-center gap-2 uppercase tracking-tighter">View Roadmap <ArrowRight className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Section */}
        <section id="mentorship" className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[40px] overflow-hidden">
              <button onClick={() => toggleAccordion('mentor')} className="w-full flex items-center justify-between p-10 text-left focus:outline-none">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-4">Direct Results</div>
                  <h3 className="text-4xl font-black text-white tracking-tighter">Career Strategy Mentorship</h3>
                </div>
                <div className={`w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center transition-transform duration-500 ${openAccordion === 'mentor' ? 'rotate-180 bg-white text-slate-950' : 'text-slate-500'}`}>
                  <ChevronRight className="w-6 h-6 rotate-90" />
                </div>
              </button>
              <div className={`transition-all duration-700 ${openAccordion === 'mentor' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-10 pt-0 grid md:grid-cols-3 gap-6">
                  {mentorshipSteps.map((step, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                      <div className="text-5xl font-black text-slate-800 mb-6 group-hover:text-cyan-500/20 transition-colors">{step.num}</div>
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{step.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">{step.desc}</p>
                      <div className="space-y-4 pt-6 border-t border-slate-800">
                        <div className="flex flex-wrap gap-2">{step.tools.map((t, i) => <span key={i} className="px-3 py-1 rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 text-[10px] font-bold">{t}</span>)}</div>
                        <ul className="space-y-2">{step.bullets.map((b, i) => <li key={i} className="flex items-start gap-2 text-xs text-slate-500"><div className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5" />{b}</li>)}</ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-[100px] rounded-full" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[50px] p-12 md:p-16 text-center">
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">Ready to build the <br /><span className="text-cyan-400">Next Generation</span> of AI?</h2>
              
              <Link href="/contact" className="px-10 py-4 bg-white text-slate-950 rounded-2xl font-black text-base hover:bg-cyan-400 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] inline-flex items-center gap-2 uppercase tracking-tighter mb-12 shadow-xl shadow-white/5">
                Initiate Contact <Mail className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-8 pt-8 border-t border-slate-800/50">
                <Link href="https://www.youtube.com/@code2career_ai" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-110 flex flex-col items-center gap-1">
                  <Youtube className="w-6 h-6" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">YouTube</span>
                </Link>
                <Link href="https://www.linkedin.com/in/rzletscode/" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-110 flex flex-col items-center gap-1">
                  <Linkedin className="w-6 h-6" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">LinkedIn</span>
                </Link>
                <Link href="https://github.com/RzLetsCode" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-110 flex flex-col items-center gap-1">
                  <Github className="w-6 h-6" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center"><Code className="text-white w-4 h-4" /></div>
            <span className="text-lg font-bold text-white tracking-tighter">code2career_ai</span>
          </div>
          <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">© {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
          <div className="text-[10px] text-slate-500 font-medium">Architected for Freshers & AI Enthusiasts</div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 2s infinite linear; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
