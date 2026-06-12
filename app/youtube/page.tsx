'use client';

import { useState } from 'react';
import Link from 'next/link';
import { VIDEOS_DATA, CATEGORY_LABELS, AICategory, VideoItem, GLOBAL_VIDEO_URL } from './videos';
import { ArrowLeft, Menu, X } from 'lucide-react';

export default function YouTubeGatewayPage() {
  const [activeTab, setActiveTab] = useState<AICategory | 'all'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredVideos = activeTab === 'all'
    ? VIDEOS_DATA
    : VIDEOS_DATA.filter(video => video.category === activeTab);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Roadmaps', href: '/resources/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Pricing', href: '/pricing/' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* ===== STICKY NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <Link href="/" className="flex items-center gap-2 group">
              <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:translate-x-[-4px] transition-transform" />
              <span className="text-xl font-bold text-white">
                code2career<span className="text-cyan-400">_ai</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/#contact"
                className="ml-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-sm text-slate-400 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/#contact"
                className="block mt-3 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* ===== PAGE HEADER ===== */}
          <header className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
                  Video Classrooms
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  code2career<span className="text-cyan-400">_ai</span>
                </h1>
                <p className="mt-3 text-lg text-slate-400 max-w-xl">
                  Production-grade AI engineering — not sandboxes. Real architectures, real deployments, real results.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@Code2Career_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 transition-colors text-white font-semibold text-sm px-5 py-3 rounded-xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/>
                </svg>
                Subscribe on YouTube
              </a>
            </div>

            {/* Key Topics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">Infrastructure</p>
                <h3 className="text-sm font-bold text-white mb-1">Enterprise AI Architectures</h3>
                <p className="text-xs text-slate-400">Multi-agent systems, state machines, and human-in-the-loop workflows.</p>
              </div>
              <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">Storage & Retrieval</p>
                <h3 className="text-sm font-bold text-white mb-1">Vector Database Design</h3>
                <p className="text-xs text-slate-400">High-dimensional embeddings, partition clusters, and semantic search.</p>
              </div>
              <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">Runtime & Scale</p>
                <h3 className="text-sm font-bold text-white mb-1">High-Throughput Pipelines</h3>
                <p className="text-xs text-slate-400">Async processing, rate-limit strategies, and token-efficient execution.</p>
              </div>
            </div>
          </header>

          {/* ===== CATEGORY TABS ===== */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(Object.keys(CATEGORY_LABELS) as Array<AICategory | 'all'>).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 border ${
                    isActive
                      ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-300'
                      : 'border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 bg-transparent'
                  }`}
                >
                  {CATEGORY_LABELS[key]}
                </button>
              );
            })}
          </div>

          {/* ===== VIDEO GRID ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video: VideoItem) => {
              const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
              return (
                <a
                  key={video.id}
                  href={GLOBAL_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-slate-700/60 bg-slate-800/40 overflow-hidden hover:border-cyan-500/40 hover:bg-slate-800/70 transition-all duration-200"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-xs font-semibold bg-slate-900/80 text-slate-300 px-2 py-0.5 rounded-md border border-slate-600/50 uppercase tracking-wide">
                        {CATEGORY_LABELS[video.category]}
                      </span>
                    </div>
                    {video.isComingSoon && (
                      <span className="absolute top-3 right-3 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md">
                        Coming Soon
                      </span>
                    )}
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-sm font-bold text-white leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                      <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Now
                      </span>
                      <span className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                        Subscribe &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-sm">No videos found in this category yet. Check back soon.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
