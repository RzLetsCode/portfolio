'use client';

import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, MessageSquare, X, Trash2, ExternalLink } from 'lucide-react';

// ====== TYPES & DATA ======

interface Message {
  text: string;
  from: 'user' | 'bot';
  suggestions?: string[];
  intentId?: string | null;
  link?: { label: string; href: string };
  timestamp: number;
}

interface Intent {
  id: string;
  category: 'intro' | 'learning' | 'projects' | 'career' | 'mentorship' | 'platform' | 'contact';
  patterns: string[];
  answer: string;
  nextSteps: string[];
  link?: { label: string; href: string };
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
    patterns: ['hi', 'hello', 'hey', 'hii', 'heyy', 'namaste', 'yo'],
    answer: 'Hi there! I’m your **Code2Career_AI** assistant. I can help you with AI roadmaps, project builds, and career mentorship.',
    nextSteps: ['What is Code2Career_AI?', 'How do I get started with AI?', 'What services do you provide?']
  },
  {
    id: 'start_ai',
    category: 'learning',
    patterns: ['how do i get started with ai', 'how to start ai', 'where should i start'],
    answer: 'A strong starting path is:\n\n1. **Foundations** (Python & Math)\n2. **Machine Learning**\n3. **Deep Learning**\n4. **LLMs & RAG Pipelines**\n5. **MLOps/Deployment**',
    nextSteps: ['Give me a beginner roadmap', 'What projects should I build?', 'Do I need math for AI?']
  },
  {
    id: 'project_development_help',
    category: 'projects',
    patterns: ['help me build a project', 'project development support', 'i want to build an ai project'],
    answer: 'I can help you architect AI projects using **LangChain, RAG, and Agentic workflows**. \n\nWhat specific AI problem are you trying to solve?',
    nextSteps: ['What technologies are you using?', 'What projects should I build?'],
    link: { label: 'Get Architecture Help →', href: '/contact' }
  },
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
  },
  {
  id: 'project_development_help',
  category: 'projects',
  patterns: [
    'can you help me with project development',
    'help me with project development',
    'can you help with my project',
    'can you help me build a project',
    'can you help me with ai project',
    'project development support',
    'project guidance',
    'need help in project development',
    'can you help with development of my project',
    'i need help building an ai project',
    'help me develop my ai project',
    'i want to build an ai project',
    'how can i build an ai project',
    'guide me to build an ai project'
  ],
  answer:
    'Yes! I can help you with AI-focused project development. If your project involves Python, LangChain, RAG pipelines, vector databases, agentic workflows, or any GenAI stack, share a short description of what you want to build, your current skill level, and which tools you prefer — and I can suggest the right architecture, components, and next steps. For deeper 1:1 guidance, click the button below to send a detailed message directly.',
  nextSteps: [
    'What technologies are you planning to use?',
    'Are you building this for resume, college, or a real client?',
    'What AI problem are you trying to solve?',
    'What projects should I build?'
  ],
  link: {
    label: 'Get in Touch →',
    href: '/contact'
  }
}
];

// ====== UTILS ======

const SYNONYM_MAP: { pattern: RegExp; replacement: string }[] = [
  { pattern: /\bcareer change\b/g, replacement: 'switch into ai' },
  { pattern: /\bget a job\b/g, replacement: 'placements' },
  { pattern: /\bgithub profile\b/g, replacement: 'github' }
];

function normalize(text: string): string {
  let cleaned = text.toLowerCase();
  SYNONYM_MAP.forEach(({ pattern, replacement }) => {
    cleaned = cleaned.replace(pattern, replacement);
  });
  return cleaned.replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function getPatternScore(query: string, pattern: string): number {
  const nQ = normalize(query);
  const nP = normalize(pattern);
  if (!nQ || !nP) return 0;
  if (nQ === nP) return 1;
  if (nQ.includes(nP)) return 0.92;
  const qWords = nQ.split(' ');
  const pWords = nP.split(' ');
  const matches = pWords.filter(w => qWords.includes(w)).length;
  return (matches / pWords.length) * 0.76 + (matches / qWords.length) * 0.24;
}

// ====== MAIN COMPONENT ======

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load history on mount
  useEffect(() => {
    const saved = localStorage.getItem('c2c_chat_history');
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([{
        text: 'Hi! I’m your **Code2Career_AI** assistant. How can I help your AI journey today?',
        from: 'bot',
        suggestions: DEFAULT_SUGGESTIONS,
        intentId: 'welcome',
        timestamp: Date.now()
      }]);
    }
  }, []);

  // Save history on change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('c2c_chat_history', JSON.stringify(messages));
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (customText?: string) => {
    const text = (customText ?? input).trim();
    if (!text || isTyping) return;

    const userMsg: Message = { text, from: 'user', timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let bestMatch = { score: 0, intent: null as Intent | null };
      INTENTS.forEach(intent => {
        intent.patterns.forEach(p => {
          const score = getPatternScore(text, p);
          if (score > bestMatch.score) bestMatch = { score, intent };
        });
      });

      const reply: Message = {
        from: 'bot',
        timestamp: Date.now(),
        text: bestMatch.score >= 0.48 
          ? (bestMatch.intent?.answer || '') 
          : "I'm not sure about that, but I can help with AI roadmaps, projects, or career switching.",
        suggestions: bestMatch.intent 
          ? Array.from(new Set([...bestMatch.intent.nextSteps, ...CATEGORY_STARTERS[bestMatch.intent.category]])) 
          : DEFAULT_SUGGESTIONS,
        link: bestMatch.intent?.link
      };

      setMessages(prev => [...prev, reply]);
      setIsTyping(false);
    }, 600);
  };

  const clearChat = () => {
    localStorage.removeItem('c2c_chat_history');
    window.location.reload();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-cyan-500"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex h-[600px] w-[380px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#020617]/95 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between bg-white/5 p-4 border-b border-white/5">
            <div>
              <h3 className="text-sm font-bold text-white">Code2Career Assistant</h3>
              <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">Active Now</p>
            </div>
            <button onClick={clearChat} className="text-white/40 hover:text-red-400 transition-colors">
              <Trash2 size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                  msg.from === 'user' 
                    ? 'bg-cyan-600 text-white rounded-tr-none' 
                    : 'bg-white/10 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  <ReactMarkdown className="prose prose-invert prose-sm">
                    {msg.text}
                  </ReactMarkdown>
                  
                  {msg.link && (
                    <a 
                      href={msg.link.href}
                      className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-3 py-2 text-xs font-bold text-white transition-all hover:bg-cyan-400"
                    >
                      {msg.link.label} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-500"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-500 [animation-delay:0.2s]"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-500 [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="flex gap-2 overflow-x-auto p-3 no-scrollbar border-t border-white/5">
            {(messages[messages.length - 1]?.suggestions || DEFAULT_SUGGESTIONS).map((s, i) => (
              <button
                key={i}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[11px] text-cyan-300 transition-colors hover:bg-cyan-500/20"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about AI projects..."
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-4 pr-12 text-sm text-white placeholder-white/20 focus:border-cyan-500/50 focus:outline-none"
              />
              <button
                onClick={() => handleSend()}
                className="absolute right-2 text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
