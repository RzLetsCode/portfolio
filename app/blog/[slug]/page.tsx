import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS_DATA } from '../../../lib/blog-data';
import PostReaderClient from './PostReaderClient';

// --- SERVER SIDE STATIC EXPORT PARAMS (No 'use client' conflict here) ---
export function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata dynamically on the server for SEO optimization
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) return { title: 'Blueprint Missing' };

  return {
    title: `${post.title} | code2career_ai`,
    description: post.excerpt,
  };
}

export default async function BlogPostReaderPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Pass the server-resolved blog object clean into the interactive client layout
  return <PostReaderClient post={post} />;
}
