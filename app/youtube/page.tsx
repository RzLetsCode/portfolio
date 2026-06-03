import Link from 'next/link';
import { getGroupedVideos, AICategory } from './videos';

export default function YouTubeGatewayPage() {
  const groupedVideos = getGroupedVideos();

  // Mapping domain keywords to client-facing enterprise headings
  const categoryLabels: Record<AICategory, string> = {
    roadmaps: 'AI Engineering Roadmaps',
    interviews: 'Technical Interview Strategy & Mock Breakdowns',
    rag: 'Production RAG Systems (Retrieval-Augmented Generation)',
    aiops: 'AI Ops, Concurrency & Infrastructure Scaling',
    architecture: 'Advanced System Architecture & Agentic Frameworks',
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Introduction Area */}
        <header className="mb-16 border-b border-slate-800 pb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-md mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            AI Video Hub Blueprint
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            code2career_ai // Video Classrooms
          </h1>
          <p className="text-slate-400 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            Technical masterclasses detailing cognitive pipeline routing layers, vector databases, and multi-agent graph orchestration.
          </p>
        </header>

        {/* Categories Mapping Loop Grid */}
        <div className="space-y-16">
          {Object.entries(groupedVideos).map(([categoryKey, videos]) => (
            <section key={categoryKey} className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                <h2 className="text-xl font-bold text-white tracking-wide">
                  {categoryLabels[categoryKey as AICategory]}
                </h2>
                <Link 
                  href={`/youtube/${categoryKey}`}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider font-mono"
                >
                  Explore Segment →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                  <div 
                    key={video.id} 
                    className="flex flex-col bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/60 transition-all duration-200 backdrop-blur-sm shadow-sm"
                  >
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-slate-100 leading-snug mb-2 group-hover:text-cyan-400">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {video.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-950 px-2.5 py-1 rounded text-cyan-400 border border-cyan-500/10 font-mono">
                        {video.isComingSoon ? '⏳ Processing' : '🍿 Ready'}
                      </span>
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/20 px-3 py-1.5 rounded-lg transition-all font-mono"
                      >
                        Subscribe
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </section>
          ))}
        </div>

      </div>
    </main>
  );
}
