import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVideosByCategory, AICategory } from '../videos';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryVideosPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const currentCategory = resolvedParams.category as AICategory;
  
  const videos = getVideosByCategory(currentCategory);

  if (videos.length === 0) {
    notFound();
  }

  const categoryLabels: Record<AICategory, string> = {
    roadmaps: 'AI Engineering Roadmaps',
    interviews: 'Technical Interview Strategy & Mock Breakdowns',
    rag: 'Production RAG Systems (Retrieval-Augmented Generation)',
    aiops: 'AI Ops, Concurrency & Infrastructure Scaling',
    architecture: 'Advanced System Architecture & Agentic Frameworks',
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        <nav className="mb-6">
          <Link href="/youtube" className="text-xs font-bold text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider font-mono">
            ← Back to All Hubs
          </Link>
        </nav>

        <header className="mb-12 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-black text-white tracking-tight">
            {categoryLabels[currentCategory] || currentCategory.toUpperCase()}
          </h1>
          <p className="text-slate-400 text-xs mt-2 font-mono">
            Ecosystem node path: /youtube/{currentCategory}
          </p>
        </header>

        <div className="space-y-4">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="p-6 bg-slate-900/30 border border-slate-800/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:bg-slate-900/50"
            >
              <div>
                <h2 className="text-base font-bold text-white mb-1 tracking-wide">{video.title}</h2>
                <p className="text-xs text-slate-400 max-w-xl leading-relaxed">{video.description}</p>
              </div>
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center text-xs font-bold bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/20 px-4 py-2 rounded-xl transition-all whitespace-nowrap font-mono"
              >
                Watch Segment
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

// Static parameter list compiler matching your GitHub Pages configuration rules
export async function generateStaticParams() {
  return [
    { category: 'roadmaps' },
    { category: 'interviews' },
    { category: 'rag' },
    { category: 'aiops' },
    { category: 'architecture' }
  ];
}
