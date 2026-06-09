// app/interviews/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Award } from 'lucide-react';
import { INTERVIEW_QUESTIONS_DATA } from '../../../lib/interview-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. This generates static paths for your static export at build time
export async function generateStaticParams() {
  return INTERVIEW_QUESTIONS_DATA.map((question) => ({
    slug: question.slug,
  }));
}

// 2. The main page component behaves as a clean Server Component
export default async function InterviewQuestionPage({ params }: PageProps) {
  // Properly unwrap the params Promise as required by Next.js 15
  const { slug } = await params;
  
  // Find the exact question that matches the URL slug dynamically
  const question = INTERVIEW_QUESTIONS_DATA.find((q) => q.slug === slug);

  if (!question) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f172a]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-5xl mx-auto w-full px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-white tracking-tight">
            code2career<span className="text-cyan-400">_ai</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/interviews" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Questions</span>
            </Link>
          </div>
        </div>
      </nav>

      <article className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pb-6 border-b border-slate-800/60">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-black tracking-widest uppercase ${question.color}`}>
                {question.category}
              </span>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <Award className={`w-4 h-4 ${question.color}`} />
                <span className={`text-xs font-bold ${question.color}`}>{question.difficulty}</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <BookOpen className="w-4 h-4" />
                <span>{question.questionCount}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              {question.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              {question.excerpt}
            </p>
          </div>

          <div className="prose prose-invert prose-slate max-w-none">
            {question.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-slate-300 leading-relaxed mb-4">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'list' && block.items) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-slate-300">
                    {block.items.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/60">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Ready to master more questions?</h3>
              <p className="text-slate-400 mb-4">
                Explore our complete collection of {INTERVIEW_QUESTIONS_DATA.length}+ interview questions across GenAI and Agentic AI topics.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/interviews" 
                  className="inline-flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Browse All Questions</span>
                </Link>
                <Link 
                  href="/contact?plan=mentor" 
                  className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 font-bold px-6 py-3 rounded-lg hover:bg-cyan-500/10 transition-all"
                >
                  <span>Get Mentorship</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
