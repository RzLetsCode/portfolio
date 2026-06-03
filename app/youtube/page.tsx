'use client';

import { useState } from 'react';
import { VIDEOS_DATA, CATEGORY_LABELS, AICategory, VideoItem, GLOBAL_VIDEO_URL } from './videos';

export default function YouTubeGatewayPage() {
  const [activeTab, setActiveTab] = useState<AICategory | 'all'>('all');

  // Interactive filtering handler
  const filteredVideos = activeTab === 'all' 
    ? VIDEOS_DATA 
    : VIDEOS_DATA.filter(video => video.category === activeTab);

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* ========================================== */}
        {/* PREMIUM ENTERPRISE HERO HEADER SECTION  */}
        {/* ========================================== */}
        <header className="relative mb-16 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-transparent p-8 md:p-12 overflow-hidden backdrop-blur-md shadow-2xl">
          {/* Subtle Technical Grid Background Artifact */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />
          
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 z-10">
            <div className="space-y-4 max-w-3xl">
              
              {/* Core Initialization Status Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 text-xs font-mono font-bold tracking-widest text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.08)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                VIDEO_CORE_INITIALIZED // ENGINE_ONLINE
              </div>
              
              {/* Brand Title with High-Contrast Split Effect */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
                code2career<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-white">_ai</span>
                <span className="block text-xl md:text-2xl font-mono font-bold text-slate-500 tracking-wider mt-3 uppercase">
                  // Video Classrooms
                </span>
              </h1>
              
              {/* Premium Sub-text Description with Sharp Copy */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal pt-1">
                Demystifying <span className="text-slate-200 font-semibold">enterprise cognitive architectures</span>, multi-cluster <span className="text-slate-200 font-semibold">vector grids</span>, and production-grade <span className="text-slate-200 font-semibold">high-throughput execution flows</span> broken down step-by-step for the modern software engineer.
              </p>
            </div>

            {/* Micro Global Metrics Panel for Aesthetic Depth */}
            <div className="hidden lg:flex flex-col gap-3 p-4 bg-slate-950/50 border border-slate-800/80 rounded-2xl font-mono text-[10px] text-slate-500 min-w-[200px]">
              <div className="flex justify-between border-b border-slate-900 pb-1.5">
                <span>SYSTEM TARGET:</span>
                <span className="text-cyan-400 font-bold">PRODUCTION</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-1.5">
                <span>INDEXED SEGMENTS:</span>
                <span className="text-slate-300">05_MODULES</span>
              </div>
              <div className="flex justify-between">
                <span>PIPELINE STATUS:</span>
                <span className="text-red-400 animate-pulse font-bold">AWAITING_DROP</span>
              </div>
            </div>
          </div>
        </header>

        {/* --- DYNAMIC INTERACTIVE TAB NAVIGATION TRACK --- */}
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

        {/* --- DYNAMIC CLICKABLE CARDS GRID WITH THUMBNAIL BACKDROPS --- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video: VideoItem) => {
            const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

            return (
              <a
                key={video.id}
                href={GLOBAL_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between bg-slate-900/30 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-0 overflow-hidden transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-slate-900/60 hover:-translate-y-1 shadow-md"
              >
                {/* Visual Thumbnail Segment */}
                <div className="relative w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800/80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={thumbnailUrl} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Absolute Tags over Video Preview Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700/50 backdrop-blur-sm">
                      {CATEGORY_LABELS[video.category]}
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-300 border border-cyan-400/20 backdrop-blur-sm">
                      {video.isComingSoon ? '⏳ Coming Soon' : '🍿 Watch'}
                    </span>
                  </div>

                  {/* Play Action Icon Centerpiece overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Block Details */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
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
                      ▶ Watch Breakdown
                    </span>
                    <span className="text-xs font-bold text-slate-600 group-hover:text-cyan-400 transition-transform duration-300 translate-x-0 group-hover:translate-x-1 font-mono">
                      Subscribe →
                    </span>
                  </div>
                </div>

              </a>
            );
          })}
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
