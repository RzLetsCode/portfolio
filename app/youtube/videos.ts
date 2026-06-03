export type AICategory = 'roadmaps' | 'interviews' | 'rag' | 'aiops' | 'architecture';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: AICategory; // Updated to match your exact domain targets
  youtubeUrl: string;
  isComingSoon: boolean;
}

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@Code2Career_AI';

export const VIDEOS_DATA: VideoItem[] = [
  // 1. ROADMAPS
  {
    id: 'roadmap-2026',
    title: 'The Definitive 90-Day AI Engineer Roadmap for 2026',
    description: 'The exact milestone progression to move from simple API wrapping to production-grade cognitive system engineering.',
    category: 'roadmaps',
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    isComingSoon: true,
  },
  // 2. INTERVIEW TIPS
  {
    id: 'interview-scenarios',
    title: 'Deconstructing the AI Engineering Interview Question Bank',
    description: 'How to articulate code layout, token constraints, evaluation validation steps, and latency trade-offs during system design loops.',
    category: 'interviews',
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    isComingSoon: true,
  },
  // 3. RAG BASED
  {
    id: 'layout-aware-rag',
    title: 'Production RAG: Layout-Aware Hierarchical Chunking over PDFs',
    description: 'Stop using naive character splits. Parse complex enterprise multi-column documentation via structural node parsing grids to eliminate hallucinations.',
    category: 'rag',
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    isComingSoon: true,
  },
  // 4. AI OPS
  {
    id: 'aiops-concurrency',
    title: 'High-Throughput Async Pipelines & Rate-Limit Backoffs',
    description: 'Architecting local inference infrastructure using Python asyncio and Pydantic validation queues that don\'t choke under scale.',
    category: 'aiops',
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    isComingSoon: true,
  },
  // 5. ARCHITECTURE
  {
    id: 'langgraph-agents',
    title: 'Orchestrating Stateful, Cyclical Multi-Agent Swarms with LangGraph',
    description: 'Designing graph state communication networks featuring safe Human-in-the-Loop validation boundary barriers.',
    category: 'architecture',
    youtubeUrl: YOUTUBE_CHANNEL_URL,
    isComingSoon: true,
  }
];

// Structural Helper Functions
export function getAllVideos() {
  return VIDEOS_DATA;
}

export function getVideosByCategory(category: string) {
  return VIDEOS_DATA.filter(video => video.category === category.toLowerCase());
}

export function getGroupedVideos() {
  return VIDEOS_DATA.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {} as Record<AICategory, VideoItem[]>);
}
