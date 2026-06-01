// lib/blog-data.ts
// All blog posts for code2career_ai
// To add a new blog: copy a post object and fill in your content.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Supports basic markdown-like HTML
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  coverImage?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-start-learning-ai-in-2025',
    title: 'How to Start Learning AI in 2025 (Without Getting Lost)',
    excerpt:
      'Most beginners open YouTube, watch 10 videos, and quit in a week. Here is the exact sequence I recommend to go from zero to shipping your first AI project.',
    date: '2026-05-20',
    readingTime: '7 min read',
    category: 'Roadmap',
    tags: ['AI Roadmap', 'Beginners', 'Getting Started'],
    featured: true,
    content: `
<h2>The Problem With Random YouTube Videos</h2>
<p>Every fresher starts the same way: they search "learn AI" on YouTube, find a 12-hour bootcamp, watch 45 minutes of it, and then never open it again. That is not a motivation problem. It is a sequencing problem.</p>

<p>AI is not a single skill. It is a stack of skills that need to be learned in the right order. If you try to learn transformers before understanding how a basic model works, you will feel lost every single time.</p>

<h2>The Sequence That Actually Works</h2>
<ol>
  <li><strong>Python fundamentals</strong> — You cannot skip this. Two weeks of focused practice.</li>
  <li><strong>Data handling with Pandas + NumPy</strong> — Most AI work is just manipulating data.</li>
  <li><strong>Basic ML with Scikit-learn</strong> — Train your first model. Understand train/test splits.</li>
  <li><strong>Deep Learning with PyTorch or TensorFlow</strong> — Once you understand why models work, frameworks make sense.</li>
  <li><strong>Applied AI: RAG, Agents, LLMs</strong> — Now you are building things that matter for your career.</li>
</ol>

<h2>What to Build at Each Stage</h2>
<p>Do not just follow tutorials. At every stage, build one tiny project that you can explain. A price predictor. A spam classifier. A RAG chatbot. Each of these is a conversation piece in an interview.</p>

<h2>How Long Does This Take?</h2>
<p>If you put in 2 hours every day, you can reach stage 4 in 3 months. Stage 5 (the career-relevant part) is another 2 months of project building. Five months of consistent effort beats two years of scattered watching.</p>

<p>If you want a personalized roadmap based on your current level, <a href="/contact?plan=explore">start with our free Explore plan</a> and we will map it out for you.</p>
    `,
  },
  {
    slug: 'what-is-rag-and-why-it-matters-for-freshers',
    title: 'What is RAG and Why Every Fresher Should Build One',
    excerpt:
      'Retrieval-Augmented Generation is one of the most in-demand AI patterns in enterprise right now. Here is what it is and how building one can transform your resume.',
    date: '2026-05-28',
    readingTime: '6 min read',
    category: 'Technical',
    tags: ['RAG', 'LLM', 'Portfolio Projects'],
    featured: true,
    content: `
<h2>What is RAG?</h2>
<p>RAG stands for Retrieval-Augmented Generation. Instead of asking an LLM (like GPT-4) to answer from memory, you first retrieve relevant documents from your own data source, then give those documents to the LLM along with the question.</p>

<p>Think of it like this: instead of asking someone a question and hoping they remember the answer, you hand them the relevant document first, then ask the question. The answer is grounded in real data.</p>

<h2>Why Companies Love RAG</h2>
<ul>
  <li>It works on private, internal data — something LLMs alone cannot do.</li>
  <li>It reduces hallucinations because the model is grounded in real documents.</li>
  <li>It is cheaper than fine-tuning a model for every use case.</li>
</ul>

<h2>The RAG Stack You Should Learn</h2>
<p>A basic production-ready RAG system uses:</p>
<ul>
  <li><strong>Embedding model</strong> — converts text to vectors (use OpenAI or a free HuggingFace model)</li>
  <li><strong>Vector database</strong> — stores and retrieves those vectors (Pinecone, Chroma, or Weaviate)</li>
  <li><strong>LLM</strong> — generates the final answer (GPT-4, Claude, or an open-source model)</li>
  <li><strong>Orchestration</strong> — LangChain or LangGraph to wire it all together</li>
</ul>

<h2>What to Build</h2>
<p>Build a RAG system that answers questions about your own resume or a topic you know well. This takes about a weekend. Once you have it working, add a simple Streamlit or Next.js frontend. That is a portfolio project that immediately signals production awareness to any AI hiring manager.</p>

<p>Check out our <a href="/#projects">Project Ecosystem</a> for a guided walkthrough of the Personal Learning Agent — a RAG project built specifically for freshers.</p>
    `,
  },
  {
    slug: 'how-to-make-your-github-look-recruiter-ready',
    title: 'How to Make Your GitHub Look Recruiter-Ready in a Weekend',
    excerpt:
      'Most freshers have GitHub profiles full of tutorial code. Here is how to upgrade your repos so recruiters actually read them.',
    date: '2026-06-01',
    readingTime: '5 min read',
    category: 'Career',
    tags: ['GitHub', 'Portfolio', 'Career Advice'],
    content: `
<h2>The Hard Truth About Tutorial Code</h2>
<p>If your GitHub is full of repos named "ml-course-notes" and "python-basics", it is sending the wrong signal. Recruiters are not looking for what you learned — they are looking for what you built.</p>

<h2>The Four Things Every Project Needs</h2>
<ol>
  <li><strong>A clear README</strong> — Problem statement, what it does, how to run it, what you learned. 200 words minimum.</li>
  <li><strong>A project architecture diagram</strong> — Even a simple one drawn in Excalidraw or Mermaid shows you think in systems.</li>
  <li><strong>A working demo</strong> — A live link, a screen recording, or at minimum clear screenshots.</li>
  <li><strong>Thoughtful commits</strong> — Commits should tell a story, not say "update" or "fix".</li>
</ol>

<h2>One Weekend Plan</h2>
<p>Pick your best project. Spend Saturday writing a proper README and cleaning up the code structure. Spend Sunday deploying it (Streamlit, Vercel, or HuggingFace Spaces — all free). On Monday you have a portfolio piece that actually stands out.</p>

<p>If you want a code-level review of your repos before you apply, our <a href="/contact?plan=mentor-loop">Mentor Loop plan</a> includes a GitHub audit as part of every session.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
