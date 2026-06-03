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
        {/* HIGH-END INTERFACE HEADER MATRIX          */}
        {/* ========================================== */}
        <header className="relative mb-16 rounded-3xl border border-slate-800/90 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-transparent p-8 md:p-12 overflow-hidden backdrop-blur-md shadow-2xl">
          {/* Technical Grid Background Artifact */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            
            {/* Top Operational Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/60 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2.5 rounded-md border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono font-bold tracking-widest text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.08)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  VIDEO_CORE_INITIALIZED // ENGINE_ONLINE
                </div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white pt-2">
                  code2career<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-white">_ai</span>
                </h1>
              </div>

              {/* Styled Section Title Badge */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-right hidden sm:block">
                <span className="block text-xs font-mono font-bold text-slate-500 tracking-widest uppercase">MODULE GATEWAY</span>
                <span className="text-sm font-bold text-slate-200 font-mono tracking-wide">// Video Classrooms</span>
              </div>
            </div>

            {/* Main Restructured Informational Layout */}
            <div className="grid gap-8 lg:grid-cols-12 items-start">
              
              {/* Left Column: Mission Objective Statement */}
              <div className="lg:col-span-5 space-y-3">
                <h2 className="text-xs font-mono font-black tracking-wider text-slate-400 uppercase">
                  [ Mission Objective ]
                </h2>
                <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
                  Demystifying production-grade AI system deployments for the modern software engineer. We skip the basic sandboxes and build scalable, real-world tech stacks.
                </p>
              </div>

              {/* Right Column: Visual Core Competency Architecture Matrix */}
              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-3">
                
                {/* Pillar 1: Architectures */}
                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-sm hover:border-cyan-500/20 transition-colors group">
                  <div className="text-cyan-400 font-mono text-xs font-black tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-600 group-hover:text-cyan-400 font-normal">01 /</span> INFRA
                  </div>
                  <h3 className="text-xs font-bold text-slate-200 mb-1">Enterprise Cognitive Architectures</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">Multi-agent graphs, state evaluation engines, and human-in-the-loop loops.</p>
                </div>

                {/* Pillar 2: Vector Grids */}
                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-sm hover:border-cyan-500/20 transition-colors group">
                  <div className="text-cyan-400 font-mono text-xs font-black tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-600 group-hover:text-cyan-400 font-normal">02 /</span> STORAGE
                  </div>
                  <h3 className="text-xs font-bold text-slate-200 mb-1">Multi-Cluster Vector Grids</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">High-dimensional embedding spaces, partition clusters, and dense semantic indexes.</p>
                </div>

                {/* Pillar 3: Execution Flows */}
                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-sm hover:border-cyan-500/20 transition-colors group">
                  <div className="text-cyan-400 font-mono text-xs font-black tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-600 group-hover:text-cyan-400 font-normal">03 /</span> RUNTIME
                  </div>
                  <h3 className="text-xs font-bold text-slate-200 mb-1">High-Throughput Execution Flows</h3>
                  <p className="text-[11px] text-slate-500 leading-normal">Asynchronous ingestion tracks, layout-aware workers, and token rate limiting.</p>
                </div>

              </div>
            </div>

          </div>
        </header>

        {/* ========================================== */}
        {/* HORIZONTAL INTERACTIVE CATEGORY TABS TRACK */}
        {/* ========================================== */}
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

        {/* ========================================== */}
        {/* DYNAMIC CLICKABLE CARDS GRID               */}
        {/* ========================================== */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video: VideoItem) => {
            // Dynamically construct the high-resolution YouTube thumbnail URL
            const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

            return (
              <a
                key={video.id}
                href={GLOBAL_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between bg-slate-900/30 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-0 overflow-hidden transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-slate-900/60 hover:-translate-y-1 shadow-md"
              >
                {/* Visual Thumbnail Frame Segment */}
                <div className="relative w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800/80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={thumbnailUrl} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-90"
                    loading="lazy"
                  />
                  {/* Dark Vignette Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Micro Meta Labels */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700/50 backdrop-blur-sm">
                      {CATEGORY_LABELS[video.category]}
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-300 border border-cyan-400/20 backdrop-blur-sm">
                      {video.isComingSoon ? '⏳ Coming Soon' : '🍿 Watch'}
                    </span>
                  </div>

                  {/* Cinematic Red Play Button Centerpiece Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card Content Text Block */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-100 leading-snug tracking-wide group-hover:text-cyan-400 transition-colors duration-200 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors duration-200">
                      {video.description}
                    </p>
                  </div>

                  {/* Interactive Footer Call-To-Action Element */}
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

        {/* Empty Fallback Display when selected filter returns 0 items */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/10">
            <p className="text-sm font-mono text-slate-500">No pipelines indexed under this specific domain node yet.</p>
          </div>
        )}

      </div>
    </main>
  );
}
