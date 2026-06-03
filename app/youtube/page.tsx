'use client';

import { useState } from 'react';
import { VIDEOS_DATA, CATEGORY_LABELS, AICategory, VideoItem } from './videos';

export default function YouTubeGatewayPage() {
  const [activeTab, setActiveTab] = useState<AICategory | 'all'>('all');

  // Interactive filtering handler
  const filteredVideos = activeTab === 'all' 
    ? VIDEOS_DATA 
    : VIDEOS_DATA.filter(video => video.category === activeTab);

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Terminal Header Area */}
        <header className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-md mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Video core initialization
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            code2career_ai // Video Classrooms
          </h1>
          <p className="text-slate-400 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            Enterprise cognitive architectures, vector grids, and high-throughput execution flows broken down step-by-step.
          </p>
        </header>

        {/* --- STEP 2.1: INTERACTIVE TAB NAVIGATION TRACK --- */}
        <div className="flex items-center border-b border-slate-800 pb-px mb-10 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex space-x-1 min-w-max pb-3">
            {(Object.keys(CATEGORY_LABELS) as Array<AICategory | 'all'>).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-200 outline-none whitespace-nowrap border ${
                    isActive
                      ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.05)]'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  {CATEGORY_LABELS[key]}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- STEP 2.2: DYNAMIC CLICKABLE CARDS GRID --- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video: VideoItem) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-slate-900/30 border border-slate-800/80 hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-slate-900/60 hover:-translate-y-1 shadow-md"
            >
              <div className="flex-1">
                {/* Meta Indicator Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800/50">
                    {CATEGORY_LABELS[video.category]}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded text-cyan-400 border border-cyan-500/10">
                    {video.isComingSoon ? '⏳ Coming Soon' : '🍿 Watch Now'}
                  </span>
                </div>

                {/* Title and Summary Block */}
                <h3 className="text-base font-bold text-slate-100 leading-snug tracking-wide group-hover:text-cyan-400 transition-colors duration-200 mb-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors duration-200">
                  {video.description}
                </p>
              </div>

              {/* Bottom Interactive Anchor Visualizer */}
              <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between">
                <span className="text-xs font-mono font-black tracking-wider text-red-400 group-hover:text-red-300 transition-colors">
                  ▶ YouTube Video
                </span>
                <span className="text-xs font-bold text-slate-600 group-hover:text-cyan-400 transition-transform duration-300 translate-x-0 group-hover:translate-x-1 font-mono">
                  Subscribe to Watch →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Graceful Fallback Frame when no item records are mapped */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/10">
            <p className="text-sm font-mono text-slate-500">No pipelines indexed under this specific domain node yet.</p>
          </div>
        )}

      </div>
    </main>
  );
}
