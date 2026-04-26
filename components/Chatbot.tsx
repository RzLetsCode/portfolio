'use client';

import { useEffect, useRef, useState } from 'react';

interface Message {
  text: string;
  from: 'user' | 'bot';
  suggestions?: string[];
  intentId?: string | null;
}

interface Intent {
  id: string;
  category: 'intro' | 'learning' | 'projects' | 'career' | 'mentorship' | 'platform' | 'contact';
  patterns: string[];
  answer: string;
  nextSteps: string[];
}

const DEFAULT_SUGGESTIONS = [
  'What is Code2Career_AI?',
  'How do I get started with AI?',
  'Can you help me switch into AI?',
  'What projects should I build?'
];

const CATEGORY_STARTERS: Record<Intent['category'], string[]> = {
  intro: ['What is Code2Career_AI?', 'What services do you provide?', 'Who is this for?'],
  learning: ['How do I get started with AI?', 'Give me a beginner roadmap', 'Do I need math for AI?'],
  projects: ['What projects should I build?', 'Can you help with GitHub?', 'What project is good for resume?'],
  career: ['How can this help my resume?', 'How can this help with interviews?', 'Does this help with placements?'],
  mentorship: ['Do you provide mentorship?', 'Can you help me switch into AI?', 'What is career strategy mentorship?'],
  platform: ['Is it free?', 'Where can I find your content?', 'What technologies do you teach?'],
  contact: ['How can I contact you?', 'Can you help with LinkedIn?', 'How do I connect with you?']
};

const INTENTS: Intent[] = [
  {
    id: 'greeting',
    category: 'intro',
    patterns: ['hi', 'hello', 'hey', 'hii', 'heyy', 'hello there', 'hey there', 'namaste', 'yo', 'hola'],
    answer:
      'Hi there! I’m your Code2Career_AI assistant. I can help you understand the platform, explore AI roadmaps, choose projects, learn about mentorship, and get career guidance.',
    nextSteps: ['What is Code2Career_AI?', 'How do I get started with AI?', 'What services do you provide?']
  },
  {
    id: 'morning',
    category: 'intro',
    patterns: ['good morning', 'gm', 'morning'],
    answer:
      'Good morning! I’m here to help with AI learning, practical projects, mentorship, resume building, interviews, and placements.',
    nextSteps: ['Give me a beginner roadmap', 'What projects should I build?', 'Do you provide mentorship?']
  },
  {
    id: 'afternoon',
    category: 'intro',
    patterns: ['good afternoon', 'afternoon'],
    answer:
      'Good afternoon! You can ask me about AI roadmaps, student-friendly projects, mentorship, resumes, interviews, or placements.',
    nextSteps: ['How do I get started with AI?', 'How can this help my resume?', 'Does this help with placements?']
  },
  {
    id: 'evening',
    category: 'intro',
    patterns: ['good evening', 'evening'],
    answer:
      'Good evening! I’d be happy to help you explore AI learning paths, projects, mentorship, and career growth.',
    nextSteps: ['What is Code2Career_AI?', 'What projects should I build?', 'Can you help with interviews?']
  },
  {
    id: 'who_are_you',
    category: 'intro',
    patterns: ['who are you', 'what are you', 'introduce yourself', 'tell me about yourself', 'who is this'],
    answer:
      'I’m the Code2Career_AI assistant. I help visitors understand the platform, discover AI roadmaps, explore projects, and get guidance on mentorship and career growth.',
    nextSteps: ['What is this website for?', 'What services do you provide?', 'Who is this for?']
  },
  {
    id: 'what_is_platform',
    category: 'platform',
    patterns: [
      'what is code2career_ai',
      'what is code2career ai',
      'tell me about code2career_ai',
      'what is this platform',
      'what is this website',
      'what is this site for'
    ],
    answer:
      'Code2Career_AI is a beginner-friendly AI learning and career platform that helps students and aspiring builders learn AI, build real projects, strengthen resumes, prepare for interviews, and move toward internships and placements.',
    nextSteps: ['Who is this for?', 'How do I get started with AI?', 'Do you provide mentorship?']
  },
  {
    id: 'who_is_it_for',
    category: 'platform',
    patterns: [
      'who is this for',
      'who is code2career_ai for',
      'is this for beginners',
      'is this for students',
      'can freshers use this',
      'is this for career switchers'
    ],
    answer:
      'Code2Career_AI is for students, freshers, aspiring AI builders, and career switchers who want a practical and structured roadmap into AI. The platform is designed so even complete beginners can follow step by step using learning roadmaps, starter projects, and career-focused guidance.',
    nextSteps: ['I am a beginner, where should I start?', 'What projects should I build?', 'Can this help with placements?']
  },
  {
    id: 'services',
    category: 'platform',
    patterns: [
      'what services do you provide',
      'what services you provide',
      'what can you do',
      'how can you help',
      'what help can you provide',
      'what support do you offer',
      'what can i ask you'
    ],
    answer:
      'I can help with AI learning guidance, roadmap clarity, project ideas, mentorship details, resume positioning, interview preparation, placements support, and understanding what Code2Career_AI offers.',
    nextSteps: ['Give me a beginner roadmap', 'What projects should I build?', 'How can this help my resume?']
  },
  {
    id: 'free_or_paid',
    category: 'platform',
    patterns: [
      'is it free',
      'is code2career_ai free',
      'do i need to pay',
      'is this paid',
      'free or paid',
      'is mentorship paid',
      'what is free here'
    ],
    answer:
      'Most public content such as YouTube videos and technical blogs is free. Some structured mentoring, advanced support, or premium guidance may be paid.',
    nextSteps: ['Where can I find your content?', 'Do you provide mentorship?', 'How can I contact you?']
  },
  {
    id: 'technologies',
    category: 'platform',
    patterns: [
      'what technologies do you teach',
      'what tools do you teach',
      'what tech stack do you cover',
      'which ai tools do you cover',
      'what topics do you teach'
    ],
    answer:
      'The platform covers AI and GenAI topics such as Python, LangChain, Pinecone, Azure OpenAI, RAG pipelines, agentic workflows, LLMOps, and related production-grade AI tools.',
    nextSteps: ['How do I get started with AI?', 'What projects should I build?', 'Do I need coding for AI?']
  },
  {
    id: 'content_locations',
    category: 'platform',
    patterns: [
      'where can i find your content',
      'where is your content',
      'where do you post content',
      'where can i learn from you',
      'where are your blogs',
      'where are your videos',
      'where can i find your blogs and videos',
      'where can i see your work'
    ],
    answer:
      'You can find Code2Career_AI content across multiple platforms. Blogs are published on Hashnode, videos and walkthroughs are shared on YouTube, and project/code references are linked from this website so you can explore everything in one place.',
    nextSteps: ['Do you have YouTube?', 'Do you write blogs?', 'What projects should I build?']
  },
  {
    id: 'youtube',
    category: 'platform',
    patterns: [
      'do you have youtube',
      'are you on youtube',
      'youtube channel',
      'where is your youtube',
      'do you post on youtube'
    ],
    answer:
      'Yes. Code2Career_AI shares videos, walkthroughs, and learning content through YouTube so learners can follow practical explanations and guided implementation more easily.',
    nextSteps: ['Where can I find your content?', 'Do you write blogs?', 'How do I get started with AI?']
  },
  {
    id: 'blogs',
    category: 'platform',
    patterns: [
      'do you write blogs',
      'where are your blogs',
      'do you have blogs',
      'where can i read your blogs',
      'do you post technical blogs'
    ],
    answer:
      'Yes. Code2Career_AI shares written learning content and technical explanations through blogs, including practical insights, AI topics, and career-focused guidance for learners.',
    nextSteps: ['Where can I find your content?', 'Do you have YouTube?', 'What technologies do you teach?']
  },
  {
    id: 'start_ai',
    category: 'learning',
    patterns: [
      'how do i get started with ai',
      'how to start ai',
      'where should i start with ai',
      'i am beginner how to start ai',
      'how can i begin ai',
      'how to learn ai from scratch'
    ],
    answer:
      'A strong starting path is Foundations → ML → DL → LLMs → RAG → MLOps. Start with basics, then build practical projects and improve how you present your work for recruiters.',
    nextSteps: ['Give me a beginner roadmap', 'What projects should I build?', 'Do I need math for AI?']
  },
  {
    id: 'beginner_roadmap',
    category: 'learning',
    patterns: [
      'give me a roadmap',
      'what is the roadmap',
      'ai roadmap for beginner',
      'beginner roadmap',
      'learning roadmap',
      'roadmap for students'
    ],
    answer:
      'A simple AI roadmap is: programming basics, Python, math foundations, machine learning basics, deep learning basics, LLM concepts, RAG systems, and then deployment or MLOps. Build projects at every stage.',
    nextSteps: ['Do I need coding for AI?', 'Do I need math for AI?', 'What projects should I build?']
  },
  {
    id: 'math_required',
    category: 'learning',
    patterns: ['is maths required', 'do i need math for ai', 'how much math is needed', 'math for ai', 'can i learn ai without math'],
    answer:
      'Basic math helps, especially linear algebra, probability, and statistics, but you do not need to master everything at once. Start learning and build math understanding alongside practical work.',
    nextSteps: ['Do I need coding for AI?', 'Give me a beginner roadmap', 'What projects should I build?']
  },
  {
    id: 'coding_required',
    category: 'learning',
    patterns: ['do i need coding', 'is coding required', 'can i learn ai without coding', 'python required for ai', 'do i need programming for ai'],
    answer:
      'Yes, coding is important for serious AI learning, especially Python. The good news is you can start from basics and improve gradually while building beginner-friendly projects. Inside Code2Career_AI, we focus on practical, small steps so you can learn Python and apply it directly in AI projects.',
    nextSteps: ['How do I get started with AI?', 'What projects should I build?', 'Can a fresher learn AI here?']
  },
  {
    id: 'freshers',
    category: 'learning',
    patterns: [
      'i am a fresher',
      'for freshers',
      'is this useful for freshers',
      'i have no experience',
      'can a fresher learn ai here',
      'can freshers learn ai here',
      'can a fresher learn ai',
      'can a fresher start ai',
      'can freshers learn from this platform'
    ],
    answer:
      'Yes, a fresher can absolutely learn AI here. Code2Career_AI is built for students and freshers who are starting from basics. We guide you with structured roadmaps, beginner-friendly explanations, and practical projects so you never feel lost.',
    nextSteps: ['How do I get started with AI?', 'Give me a beginner roadmap', 'What projects should I build?']
  },
  {
    id: 'project_suggestions',
    category: 'projects',
    patterns: [
      'what projects should i build',
      'suggest projects',
      'which projects are best for beginners',
      'project ideas for ai',
      'what ai projects can i build',
      'resume worthy projects'
    ],
    answer:
      'You can begin with practical projects like a RAG-based learning assistant, a resume matcher, an AI study helper, or open-source AI contribution projects that strengthen your GitHub profile. Inside Code2Career_AI, we already have project ideas and guided projects for different levels, so you do not need to worry about what to build because we provide structured options.',
    nextSteps: ['What project is good for resume?', 'Can you help with GitHub?', 'How do I get started with AI?']
  },
  {
    id: 'resume_project',
    category: 'projects',
    patterns: ['what project is good for resume', 'best project for resume', 'resume project ideas', 'which project helps my resume most'],
    answer:
      'Projects that clearly show problem-solving, real use cases, clean GitHub structure, and measurable impact usually help most on a resume. A RAG assistant, resume matcher, or domain-specific AI tool are good examples. Code2Career_AI provides examples and guidance for such projects at beginner, intermediate, and advanced levels so you can showcase them confidently on your resume.',
    nextSteps: ['Can you help with GitHub?', 'How can this help my resume?', 'What is production code review?']
  },
  {
    id: 'github_help',
    category: 'projects',
    patterns: ['can you help with github', 'github help', 'how to improve my github', 'make my github better', 'github profile support'],
    answer:
      'Yes. You can get guidance on making your GitHub more professional by improving project quality, documentation, code structure, and recruiter-facing presentation. Through Code2Career_AI, we show you how to organise repos, write clear READMEs, and position your work so it looks production-minded, not just like classroom assignments.',
    nextSteps: ['What project is good for resume?', 'What is production code review?', 'How can this help my resume?']
  },
  {
    id: 'resume_help',
    category: 'career',
    patterns: [
      'how can this help my resume',
      'can you help my resume',
      'resume help',
      'how do i improve my resume',
      'will this help my cv',
      'how to make ai resume better'
    ],
    answer:
      'Code2Career_AI helps you strengthen your resume by showing how to present AI projects, tools, problem-solving, and business impact in a recruiter-friendly way.',
    nextSteps: ['Can you help with LinkedIn?', 'What project is good for resume?', 'Do you provide mentorship?']
  },
  {
    id: 'linkedin_help',
    category: 'career',
    patterns: ['can you help with linkedin', 'linkedin help', 'optimize my linkedin', 'linkedin profile support', 'linkedin positioning'],
    answer:
      'Yes. Code2Career_AI can help you improve your LinkedIn positioning by making your AI journey, projects, tools, and outcomes more clearly visible to recruiters and hiring teams.',
    nextSteps: ['How can this help my resume?', 'Can you help with placements?', 'How can I contact you?']
  },
  {
    id: 'interview_help',
    category: 'career',
    patterns: [
      'how can this help with interviews',
      'interview help',
      'can you help with interviews',
      'how do i prepare for ai interviews',
      'interview preparation',
      'mock interview support'
    ],
    answer:
      'It helps you prepare for interviews by improving how you explain projects, justify tool choices, present architecture decisions, and answer practical AI questions.',
    nextSteps: ['How can this help my resume?', 'Does this help with placements?', 'Do you provide mentorship?']
  },
  {
    id: 'placements',
    category: 'career',
    patterns: [
      'does this help with placements',
      'placements help',
      'can this help me get placement',
      'internships and placements',
      'job support',
      'placement guidance'
    ],
    answer:
      'Yes. The platform is designed to support your journey from AI learning and project building to resume strength, interview readiness, internships, and placements.',
    nextSteps: ['Can this help with internships?', 'How can this help with interviews?', 'Do you provide mentorship?']
  },
  {
    id: 'internships',
    category: 'career',
    patterns: [
      'can this help with internships',
      'internship help',
      'can you help me get internship',
      'does this help with internships',
      'ai internship guidance'
    ],
    answer:
      'Yes. Code2Career_AI helps you prepare for internships through skill-building roadmaps, practical projects, resume improvement, profile positioning, and interview-focused preparation. The goal is to help you become internship-ready with proof of work, not just theory.',
    nextSteps: ['How can this help my resume?', 'What projects should I build?', 'How can this help with interviews?']
  },
  {
    id: 'mentorship',
    category: 'mentorship',
    patterns: [
      'do you provide mentorship',
      'do you offer mentorship',
      'is mentorship available',
      'can you mentor me',
      'do you guide students',
      'do you provide career mentorship'
    ],
    answer:
      'Yes. Code2Career_AI provides mentorship around AI career direction, project building, resume positioning, interview preparation, and production-oriented AI learning. We look at where you are today and help you choose the right roadmap, projects, and profile improvements instead of leaving you to figure everything out alone.',
    nextSteps: ['What is career strategy mentorship?', 'Can you help me switch into AI?', 'How can I contact you?']
  },
  {
    id: 'switch_into_ai',
    category: 'mentorship',
    patterns: [
      'can you help me switch into ai',
      'can you help me transition into ai',
      'i want to switch into ai',
      'how can i switch into ai',
      'how do i move into ai',
      'can i transition to ai',
      'switch my career into ai',
      'career switch into ai',
      'move from another field to ai',
      'can a non ai person move into ai'
    ],
    answer:
      'Yes. Code2Career_AI can help you switch into AI with a structured path based on your current background, skill gaps, project strategy, and career goals. We help you understand what to learn first, what projects to build, how to position your profile, and how to move step by step toward internships, interviews, and AI roles.',
    nextSteps: ['What is career strategy mentorship?', 'How do I get started with AI?', 'What projects should I build?']
  },
  {
    id: 'career_strategy',
    category: 'mentorship',
    patterns: [
      'what is career strategy mentorship',
      'career strategy mentorship',
      'career strategy help',
      'what is your career strategy support'
    ],
    answer:
      'Career Strategy Mentorship includes focused support such as career pivot audit, AI-optimized narrative building, and production code review.',
    nextSteps: ['What is career pivot audit?', 'What is AI optimized narrative?', 'What is production code review?']
  },
  {
    id: 'career_pivot_audit',
    category: 'mentorship',
    patterns: [
      'what is career pivot audit',
      'career pivot audit',
      'how do you evaluate my background',
      'can you assess my profile for ai',
      'how do i know if i can switch to ai'
    ],
    answer:
      'Career Pivot Audit means reviewing your current background, strengths, gaps, and target direction so we can design a realistic transition plan into AI. Instead of giving generic advice, Code2Career_AI helps identify what you already have, what you need to build, and which path fits you best.',
    nextSteps: ['Can you help me switch into AI?', 'What is career strategy mentorship?', 'What projects should I build?']
  },
  {
    id: 'ai_narrative',
    category: 'mentorship',
    patterns: [
      'what is ai optimized narrative',
      'what is ai-optimized narrative',
      'ai optimized narrative',
      'how do i position myself for ai jobs',
      'how do i explain my ai journey',
      'how do i present my profile for ai roles'
    ],
    answer:
      'AI-Optimized Narrative means shaping your resume, LinkedIn, project story, and career message so recruiters clearly understand your transition into AI. Code2Career_AI helps you present your background, projects, tools, and goals in a strong and believable way.',
    nextSteps: ['How can this help my resume?', 'Can you help with LinkedIn?', 'Can you help me switch into AI?']
  },
  {
    id: 'production_code_review',
    category: 'mentorship',
    patterns: [
      'what is production code review',
      'production code review',
      'review my github like production',
      'review my code like in a company',
      'make my project recruiter ready',
      'help me improve my project codebase'
    ],
    answer:
      'Production Code Review in Code2Career_AI means reviewing your projects like a real-world engineer or hiring manager would. We look at code structure, readability, documentation, environment setup, and how clearly your AI pipeline and decisions are explained so your project looks production-minded and recruiter-ready.',
    nextSteps: ['What project is good for resume?', 'Can you help with GitHub?', 'How can this help my resume?']
  },
  {
    id: 'contact',
    category: 'contact',
    patterns: [
      'how can i contact you',
      'how do i contact you',
      'how can i reach you',
      'how do i connect with you',
      'where can i contact you',
      'can i contact you'
    ],
    answer:
      'You can use the contact form on the website or connect through LinkedIn. You can also use the social links provided on the homepage.',
    nextSteps: ['Do you provide mentorship?', 'Can you help with LinkedIn?', 'Where can I find your content?']
  },
  {
    id: 'thanks',
    category: 'intro',
    patterns: ['thanks', 'thank you', 'thx', 'ty', 'thanks a lot', 'thankyou'],
    answer:
      'You’re welcome! If you want, I can help you pick the next step based on learning, projects, mentorship, or career growth.',
    nextSteps: ['Give me a beginner roadmap', 'What projects should I build?', 'How can this help my resume?']
  }
];

// ====== ENHANCED MATCHING HELPERS ======

const SYNONYM_MAP: { pattern: RegExp; replacement: string }[] = [
  { pattern: /\bcareer change\b/g, replacement: 'switch into ai' },
  { pattern: /\bchange career\b/g, replacement: 'switch into ai' },
  { pattern: /\btransition to ai\b/g, replacement: 'switch into ai' },
  { pattern: /\bmove into ai\b/g, replacement: 'switch into ai' },
  { pattern: /\bget a job\b/g, replacement: 'placements' },
  { pattern: /\bjob support\b/g, replacement: 'placements' },
  { pattern: /\bgithub profile\b/g, replacement: 'github' },
  { pattern: /\bprojects for resume\b/g, replacement: 'resume project' }
];

function normalize(text: string): string {
  let cleaned = text.toLowerCase();
  SYNONYM_MAP.forEach(({ pattern, replacement }) => {
    cleaned = cleaned.replace(pattern, replacement);
  });
  cleaned = cleaned.replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  return cleaned;
}

function getPatternScore(query: string, pattern: string): number {
  const normalizedQuery = normalize(query);
  const normalizedPattern = normalize(pattern);
  if (!normalizedQuery || !normalizedPattern) return 0;

  if (normalizedQuery === normalizedPattern) return 1;
  if (normalizedQuery.includes(normalizedPattern)) return 0.92;

  const queryWords = normalizedQuery.split(' ').filter(Boolean);
  const patternWords = normalizedPattern.split(' ').filter(Boolean);
  if (!queryWords.length || !patternWords.length) return 0;

  let matches = 0;
  patternWords.forEach((word) => {
    if (queryWords.includes(word)) matches += 1;
  });

  const overlap = matches / patternWords.length;
  const coverage = matches / queryWords.length;
  return overlap * 0.76 + coverage * 0.24;
}

function dedupeSuggestions(items: string[]): string[] {
  return Array.from(new Set(items)).slice(0, 6);
}

function findBestIntent(query: string): { intent: Intent | null; score: number } {
  let bestMatch: { score: number; intent: Intent | null } = { score: 0, intent: null };

  INTENTS.forEach((intent) => {
    intent.patterns.forEach((pattern) => {
      const score = getPatternScore(query, pattern);
      if (score > bestMatch.score) {
        bestMatch = { score, intent };
      }
    });
  });

  return bestMatch;
}

function buildFallbackSuggestions(query: string): string[] {
  const normalized = normalize(query);

  if (
    normalized.includes('resume') ||
    normalized.includes('linkedin') ||
    normalized.includes('interview') ||
    normalized.includes('cv')
  ) {
    return [
      'How can this help my resume?',
      'Can you help with LinkedIn?',
      'How can this help with interviews?',
      'Does this help with placements?'
    ];
  }

  if (normalized.includes('project') || normalized.includes('github') || normalized.includes('repo')) {
    return [
      'What projects should I build?',
      'Can you help with GitHub?',
      'What project is good for resume?',
      'Do you provide mentorship?'
    ];
  }

  if (
    normalized.includes('learn') ||
    normalized.includes('roadmap') ||
    normalized.includes('start') ||
    normalized.includes('ai') ||
    normalized.includes('beginner')
  ) {
    return [
      'How do I get started with AI?',
      'Give me a beginner roadmap',
      'Can you help me switch into AI?',
      'Do I need coding for AI?'
    ];
  }

  if (normalized.includes('mentor') || normalized.includes('guidance') || normalized.includes('switch')) {
    return [
      'Do you provide mentorship?',
      'Can you help me switch into AI?',
      'What is career strategy mentorship?',
      'How can I contact you?'
    ];
  }

  return DEFAULT_SUGGESTIONS;
}

function getBotReply(query: string): { answer: string; suggestions: string[]; intentId: string | null } {
  const { intent, score } = findBestIntent(query);

  if (intent && score >= 0.48) {
    const categorySuggestions = CATEGORY_STARTERS[intent.category] ?? [];
    return {
      answer: intent.answer,
      intentId: intent.id,
      suggestions: dedupeSuggestions([...intent.nextSteps, ...categorySuggestions])
    };
  }

  if (intent && score >= 0.3) {
    const categorySuggestions = CATEGORY_STARTERS[intent.category] ?? [];
    return {
      answer:
        'I might not have the exact answer for that, but here’s how Code2Career_AI can support you across learning, projects, mentorship, and career growth.',
      intentId: intent.id,
      suggestions: dedupeSuggestions([...intent.nextSteps, ...categorySuggestions])
    };
  }

  return {
    answer:
      'I’m not fully sure about that yet, but I can still help with AI learning, roadmaps, projects, mentorship, resume support, interview preparation, internships, and placements.',
    intentId: null,
    suggestions: dedupeSuggestions(buildFallbackSuggestions(query))
  };
}

// ====== COMPONENT ======

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text:
        'Hi! I’m your Code2Career_AI assistant. Ask me about AI roadmaps, projects, mentorship, career switching, resume, interviews, or where to find my content.',
      from: 'bot',
      suggestions: DEFAULT_SUGGESTIONS,
      intentId: 'welcome'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isOpen) return;

    window.history.pushState({ chatbotOpen: true }, '');
    const timer = setTimeout(() => inputRef.current?.focus(), 180);

    const handlePopState = () => {
      setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const clickedInsidePanel = panelRef.current?.contains(target);
      const clickedTrigger = triggerRef.current?.contains(target);

      if (!clickedInsidePanel && !clickedTrigger) {
        setIsOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isOpen]);

  const closeChat = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSend = (customText?: string) => {
    const text = (customText ?? input).trim();
    if (!text || isTyping) return;

    const userMessage: Message = { text, from: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);
      const botMessage: Message = {
        text: reply.answer,
        from: 'bot',
        suggestions: reply.suggestions,
        intentId: reply.intentId
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 380);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const latestBotMessageWithSuggestions = (() => {
    for (let i = messages.length - 1; i >= 0; i -= 1) {
      const msg = messages[i];
      if (msg.from === 'bot' && msg.suggestions?.length) return msg;
    }
    return undefined;
  })();

  const visibleQuickPrompts =
    (latestBotMessageWithSuggestions?.suggestions ?? DEFAULT_SUGGESTIONS).slice(0, 6);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {isOpen && (
        <div
          ref={panelRef}
          className="mb-4 w-[360px] sm:w-[390px] max-w-[calc(100vw-24px)] h-[600px] max-h-[80vh] bg-[#020617]/95 backdrop-blur-2xl rounded-[28px] shadow-[0_20px_80px_rgba(0,0,0,0.45)] border border-cyan-500/20 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Code2Career AI assistant"
        >
          {/* Header (shutter removed, only title + close) */}
          <div className="relative bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-4 flex items-center justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_35%)] pointer-events-none" />
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner">
                <span className="text-sm font-bold text-white">AI</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm leading-none">AI Career Assistant</h3>
                <div className="mt-1 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/75 font-semibold">
                    Always Active
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              className="relative z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            id="code2career-chat-log"
            className="flex-1 p-4 overflow-y-auto space-y-3 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.88),rgba(15,23,42,0.95))]"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[84%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.from === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-br-sm shadow-cyan-500/20'
                      : 'bg-slate-800/90 text-slate-100 rounded-bl-sm border border-slate-700/80'
                  }`}
                >
                  {msg.text}
                  {msg.from === 'bot' && msg.intentId && (
                    <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-cyan-400/70">
                      Intent: {msg.intentId}
                    </span>
                  )}
                </div>

                {msg.from === 'bot' && msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 max-w-[92%]">
                    {msg.suggestions.slice(0, 6).map((suggestion, suggestionIdx) => (
                      <button
                        key={`${idx}-${suggestionIdx}`}
                        onClick={() => handleSend(suggestion)}
                        disabled={isTyping}
                        className="px-3 py-1.5 rounded-full bg-slate-900/90 text-slate-300 text-[11px] border border-slate-700 hover:border-cyan-400/50 hover:text-white hover:bg-slate-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        type="button"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800/90 text-slate-100 rounded-2xl rounded-bl-sm border border-slate-700/80 px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-950/90 border-t border-slate-800/90">
            <p className="mb-1 text-[11px] text-slate-400">
              Tip: Try asking “Can you help me switch into AI?” or “What projects should I build?”.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about roadmap, projects, mentorship, resume..."
                className="flex-1 bg-slate-900 text-white px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-slate-800 placeholder-slate-500"
                aria-label="Ask a question"
                aria-controls="code2career-chat-log"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating trigger */}
      <button
        ref={triggerRef}
        onClick={isOpen ? closeChat : handleOpen}
        className="group relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-cyan-500/40 hover:shadow-cyan-500/60"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
        type="button"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping opacity-20" />
        {isOpen ? (
          <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5" />
          </svg>
        ) : (
          <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
