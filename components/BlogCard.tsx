'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  category: string;
  image?: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  date,
  readingTime,
  tags,
  category,
  image
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <article className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group border border-slate-700 hover:border-emerald-500/50">
      {/* Header with Category Badge */}
      <div className="p-6 pb-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-400">ID: {id}</span>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {excerpt}
        </p>
      </div>

      {/* Metadata Section */}
      <div className="px-6 py-4 space-y-4 border-b border-slate-700">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs bg-slate-700/50 text-cyan-300 px-2.5 py-1 rounded hover:bg-cyan-500/20 transition-colors cursor-pointer"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Date and Reading Time */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-cyan-400" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-emerald-400" />
            <span>{readingTime}</span>
          </div>
        </div>
      </div>

      {/* Footer with CTA */}
      <div className="px-6 py-4">
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 group/btn">
          Read Article
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}
