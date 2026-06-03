export type AICategory = 'roadmaps' | 'interviews' | 'rag' | 'aiops' | 'architecture';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: AICategory;
  youtubeId: string; // Storing the explicit video ID for thumbnail rendering
  isComingSoon: boolean;
}

// Centralized video link target requested for global fallback
export const GLOBAL_VIDEO_URL = 'https://www.youtube.com/watch?v=OUALaL1iAPc';

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'roadmap-2026',
    title: 'The Definitive 90-Day AI Engineer Roadmap for 2026',
    description: 'The exact milestone progression to move from simple API wrapping to production-grade cognitive system engineering.',
    category: 'roadmaps',
    youtubeId: 'OUALaL1iAPc',
    isComingSoon: true,
  },
  {
    id: 'interview-scenarios',
    title: 'Deconstructing the AI Engineering Interview Question Bank',
    description: 'How to articulate code layout, token constraints, evaluation validation steps, and latency trade-offs during system design loops.',
    category: 'interviews',
    youtubeId: 'OUALaL1iAPc',
    isComingSoon: true,
  },
  {
    id: 'layout-aware-rag',
    title: 'Production RAG: Layout-Aware Hierarchical Chunking over PDFs',
    description: 'Stop using naive character splits. Parse complex enterprise multi-column documentation via structural node parsing grids to eliminate hallucinations.',
    category: 'rag',
    youtubeId: 'OUALaL1iAPc',
    isComingSoon: true,
  },
  {
    id: 'aiops-concurrency',
    title: 'High-Throughput Async Pipelines & Rate-Limit Backoffs',
    description: 'Architecting local inference infrastructure using Python asyncio and Pydantic validation queues that don\'t choke under scale.',
    category: 'aiops',
    youtubeId: 'OUALaL1iAPc',
    isComingSoon: true,
  },
  {
    id: 'langgraph-agents',
    title: 'Orchestrating Stateful, Cyclical Multi-Agent Swarms with LangGraph',
    description: 'Designing graph state communication networks featuring safe Human-in-the-Loop validation boundary barriers.',
    category: 'architecture',
    youtubeId: 'OUALaL1iAPc',
    isComingSoon: true,
  }
];

export const CATEGORY_LABELS: Record<AICategory | 'all', string> = {
  all: 'All Ecosystems',
  roadmaps: 'AI Roadmaps',
  interviews: 'Interview Tips',
  rag: 'RAG Based',
  aiops: 'AI Ops',
  architecture: 'Architecture',
};
