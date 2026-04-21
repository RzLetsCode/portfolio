'use client';

import Image from 'next/image';
import Link from 'next/link';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  publishedAt: string;
  views?: number;
  duration?: string;
}

export default function VideoCard({
  title,
  description,
  thumbnail,
  videoId,
  publishedAt,
  views = 0,
  duration = '00:00'
}: VideoCardProps) {
  const date = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-48 bg-slate-700">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-semibold">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        {/* Metadata */}
        <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
          <span>{date}</span>
          <span>{views.toLocaleString()} views</span>
        </div>

        {/* CTA Button */}
        <a
          href={`https://youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 inline-block text-center"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
