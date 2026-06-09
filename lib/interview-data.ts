// Interview Questions Data for GenAI & Agentic AI

export interface InterviewQuestion {
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  difficulty: string;
  questionCount: string;
  imageUrl: string;
  imageAlt: string;
  color: string;
  borderHover: string;
  content: QuestionContent[];
}

export interface QuestionContent {
  type: 'heading' | 'paragraph' | 'list' | 'code';
  text?: string;
  items?: string[];
  language?: string;
}

export const INTERVIEW_CATEGORIES = ['All Questions', 'GenAI', 'Agentic AI'];

export const INTERVIEW_QUESTIONS_DATA: InterviewQuestion[] = [
  {
    title: 'Transformer Architecture Deep Dive',
    category: 'GenAI',
    excerpt: 'Master attention mechanisms, encoder-decoder internals, and multi-head attention patterns asked in production AI interviews.',
    slug: 'transformer-architecture',
    difficulty: 'Advanced',
    questionCount: '64 questions',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    imageAlt: 'Transformer Architecture',
    color: 'text-orange-400',
    borderHover: 'hover:border-orange-500/40',
    content: [
      {
        type: 'heading',
        text: 'Key Interview Topics'
      },
      {
        type: 'list',
        items: [
          'Self-attention mechanism and scaled dot-product attention',
          'Multi-head attention: why multiple heads and how they work',
          'Positional encoding strategies and their trade-offs',
          'Encoder-decoder architecture vs encoder-only models',
          'Layer normalization placement and why it matters',
          'Feed-forward network role in transformer blocks'
        ]
      },
      {
        type: 'heading',
        text: 'Sample Question'
      },
      {
        type: 'paragraph',
        text: 'Q: Explain how self-attention enables parallelization compared to RNNs, and what are the computational trade-offs at scale?'
      },
      {
        type: 'paragraph',
        text: 'A: Self-attention processes all tokens simultaneously by computing attention scores between every token pair, unlike RNNs that process sequentially. This enables GPU parallelization. However, the O(n²) complexity in sequence length becomes problematic for long sequences (>2048 tokens), leading to solutions like sparse attention, sliding window attention, or memory-efficient transformers.'
      }
    ]
  },
  {
    title: 'Prompt Engineering Mastery',
    category: 'GenAI',
    excerpt: 'Learn systematic prompt design, few-shot learning patterns, and optimization techniques for production LLM applications.',
    slug: 'prompt-engineering',
    difficulty: 'Intermediate',
    questionCount: '50 questions',
    imageUrl: 'https://images.unsplash.com/photo-1676277791608-34f3bc4e0d3e?w=800&auto=format&fit=crop',
    imageAlt: 'Prompt Engineering',
    color: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    content: [
      {
        type: 'heading',
        text: 'Core Concepts'
      },
      {
        type: 'list',
        items: [
          'Zero-shot vs few-shot vs chain-of-thought prompting',
          'Prompt template design and variable injection',
          'System prompts vs user prompts: when to use each',
          'Temperature, top-p, and other sampling parameters',
          'Prompt injection attacks and defensive strategies',
          'Optimizing prompts for cost, latency, and accuracy'
        ]
      },
      {
        type: 'heading',
        text: 'Sample Question'
      },
      {
        type: 'paragraph',
        text: 'Q: When would you use chain-of-thought prompting vs direct answer prompting? What are the latency and cost implications?'
      },
      {
        type: 'paragraph',
        text: 'A: Use chain-of-thought for complex reasoning tasks (math, logic, multi-step planning) where showing intermediate steps improves accuracy. However, it increases token usage by 2-5x and latency proportionally. For simple classification or extraction tasks, direct prompting is more cost-effective. Consider using CoT selectively based on task complexity or implementing it as a fallback when confidence is low.'
      }
    ]
  },
  {
    title: 'LLMs Deep Dive',
    category: 'GenAI',
    excerpt: 'Comprehensive coverage of LLM internals, training dynamics, and production deployment patterns.',
    slug: 'llms-deep-dive',
    difficulty: 'Advanced',
    questionCount: '50 questions',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    imageAlt: 'Large Language Models',
    color: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    content: [
      {
        type: 'heading',
        text: 'Interview Focus Areas'
      },
      {
        type: 'list',
        items: [
          'Tokenization strategies: BPE, WordPiece, SentencePiece',
          'Pre-training objectives: CLM, MLM, and their trade-offs',
          'Model architectures: GPT, BERT, T5, and their use cases',
          'Scaling laws and emergent capabilities',
          'Inference optimization: KV cache, speculative decoding',
          'Context window management and long-context strategies'
        ]
      }
    ]
  },
  {
    title: 'Fine-Tuning LLMs',
    category: 'GenAI',
    excerpt: 'Master LoRA, QLoRA, PEFT techniques and understand fine-tuning trade-offs for production systems.',
    slug: 'fine-tuning-llms',
    difficulty: 'Advanced',
    questionCount: '50 questions',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop',
    imageAlt: 'Fine-Tuning',
    color: 'text-green-400',
    borderHover: 'hover:border-green-500/40',
    content: [
      {
        type: 'heading',
        text: 'Key Topics'
      },
      {
        type: 'list',
        items: [
          'Full fine-tuning vs parameter-efficient fine-tuning (PEFT)',
          'LoRA: low-rank adaptation mechanics and rank selection',
          'QLoRA: quantization + LoRA for memory efficiency',
          'Instruction tuning vs task-specific fine-tuning',
          'Catastrophic forgetting and mitigation strategies',
          'Data requirements and quality for fine-tuning'
        ]
      },
      {
        type: 'heading',
        text: 'Sample Question'
      },
      {
        type: 'paragraph',
        text: 'Q: Compare LoRA and full fine-tuning for adapting a 7B parameter model to a domain-specific task. What are the memory, compute, and performance trade-offs?'
      },
      {
        type: 'paragraph',
        text: 'A: LoRA trains only low-rank decomposition matrices (typically <1% of parameters), requiring ~10-20GB GPU memory vs 100GB+ for full fine-tuning of 7B models. Training time is 3-5x faster. However, full fine-tuning can achieve slightly better performance on highly specialized domains. LoRA is preferred when: (1) limited compute, (2) need multiple adapters, or (3) want to preserve base model capabilities.'
      }
    ]
  },
  {
    title: 'RAG Systems Design',
    category: 'GenAI',
    excerpt: 'Build production RAG pipelines with embedding models, vector stores, and retrieval strategies.',
    slug: 'rag-systems',
    difficulty: 'Intermediate',
    questionCount: '69 questions',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop',
    imageAlt: 'RAG Systems',
    color: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    content: [
      {
        type: 'heading',
        text: 'RAG Pipeline Components'
      },
      {
        type: 'list',
        items: [
          'Document chunking strategies and size trade-offs',
          'Embedding models: sentence-transformers vs OpenAI vs custom',
          'Vector databases: Pinecone, Weaviate, FAISS, ChromaDB',
          'Similarity search: cosine vs dot product vs Euclidean',
          'Retrieval strategies: top-k, MMR, threshold-based',
          'Context window management and chunk stitching'
        ]
      },
      {
        type: 'heading',
        text: 'Sample Question'
      },
      {
        type: 'paragraph',
        text: 'Q: Design a RAG system for 10M internal documents. Walk through chunking, indexing, and retrieval decisions. What are the latency targets?'
      },
      {
        type: 'paragraph',
        text: 'A: (1) Chunking: 500-token chunks with 50-token overlap to preserve context across boundaries. (2) Embedding: Use sentence-transformers (e.g., all-MiniLM-L6-v2) for cost-efficiency vs OpenAI ada-002. (3) Vector DB: Pinecone or Weaviate for scale, with HNSW indexing for <100ms retrieval. (4) Retrieval: Hybrid search (semantic + keyword) with reranking using cross-encoder. (5) Target: <200ms total retrieval latency. Consider: async indexing, caching hot queries, and sharding by document type.'
      }
    ]
  },
  {
    title: 'Advanced RAG Techniques',
    category: 'GenAI',
    excerpt: 'Hybrid search, reranking, query transformation, and advanced retrieval patterns for production.',
    slug: 'advanced-rag',
    difficulty: 'Advanced',
    questionCount: '38 questions',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop',
    imageAlt: 'Advanced RAG',
    color: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    content: [
      {
        type: 'heading',
        text: 'Advanced Patterns'
      },
      {
        type: 'list',
        items: [
          'Hybrid search: combining semantic and keyword search',
          'Reranking with cross-encoders vs bi-encoders',
          'Query transformation and expansion techniques',
          'HyDE: hypothetical document embeddings',
          'Parent-child chunking and recursive retrieval',
          'Contextual compression and filtering'
        ]
      }
    ]
  },
  {
    title: 'AI Safety & Guardrails',
    category: 'GenAI',
    excerpt: 'Implement hallucination detection, jailbreak prevention, RLHF, and production safety measures.',
    slug: 'ai-safety-guardrails',
    difficulty: 'Advanced',
    questionCount: '50 questions',
    imageUrl: 'https://images.unsplash.com/photo-1614064548850-2187c467b35f?w=800&auto=format&fit=crop',
    imageAlt: 'AI Safety',
    color: 'text-red-400',
    borderHover: 'hover:border-red-500/40',
    content: [
      {
        type: 'heading',
        text: 'Safety Topics'
      },
      {
        type: 'list',
        items: [
          'Hallucination detection and mitigation strategies',
          'Prompt injection attacks and defense mechanisms',
          'Content filtering and moderation pipelines',
          'RLHF: Reinforcement Learning from Human Feedback',
          'Guardrails: input/output validation and safety layers',
          'Bias detection and fairness considerations'
        ]
      }
    ]
  },
  {
    title: 'LLM Evaluation & Testing',
    category: 'GenAI',
    excerpt: 'Benchmark selection, automated evaluation frameworks, and testing strategies for LLM applications.',
    slug: 'llm-evaluation',
    difficulty: 'Intermediate',
    questionCount: '50 questions',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    imageAlt: 'LLM Evaluation',
    color: 'text-yellow-400',
    borderHover: 'hover:border-yellow-500/40',
    content: [
      {
        type: 'heading',
        text: 'Evaluation Framework'
      },
      {
        type: 'list',
        items: [
          'Benchmark selection: MMLU, HellaSwag, TruthfulQA',
          'Automated evaluation with LLM-as-judge',
          'Human evaluation setup and inter-rater reliability',
          'A/B testing for prompt optimization',
          'Regression testing for model updates',
          'Performance metrics: accuracy, latency, cost per query'
        ]
      }
    ]
  },
  {
    title: 'LangChain Mastery',
    category: 'Agentic AI',
    excerpt: 'Build complex chains, manage memory, integrate tools, and create production LangChain applications.',
    slug: 'langchain-mastery',
    difficulty: 'Intermediate',
    questionCount: '134 questions',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
    imageAlt: 'LangChain',
    color: 'text-green-400',
    borderHover: 'hover:border-green-500/40',
    content: [
      {
        type: 'heading',
        text: 'LangChain Core Concepts'
      },
      {
        type: 'list',
        items: [
          'Chain types: LLMChain, SequentialChain, Router Chain',
          'Memory management: ConversationBufferMemory, Summary, Vector',
          'Document loaders and text splitters',
          'Retrievers: VectorStore, MultiQuery, Contextual Compression',
          'Agents and tool integration',
          'LCEL: LangChain Expression Language'
        ]
      },
      {
        type: 'heading',
        text: 'Sample Question'
      },
      {
        type: 'paragraph',
        text: 'Q: Design a multi-step workflow where an agent searches internal docs, calls an API, and generates a report. How do you handle failures and retries?'
      },
      {
        type: 'paragraph',
        text: 'A: Use LangChain agent with custom tools: (1) DocumentSearchTool with RAG retrieval, (2) APICallTool with structured output parsing, (3) ReportGeneratorTool. Implement: retry logic with exponential backoff, fallback chains for API failures, checkpoint-based state management to resume from failures. Use AgentExecutor with max_iterations limit and timeout. Log all steps for observability and debugging.'
      }
    ]
  },
  {
    title: 'LangGraph Agents',
    category: 'Agentic AI',
    excerpt: 'Build stateful, graph-based agent workflows with cycles, conditional routing, and human-in-the-loop.',
    slug: 'langgraph-agents',
    difficulty: 'Advanced',
    questionCount: '49 questions',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop',
    imageAlt: 'LangGraph',
    color: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    content: [
      {
        type: 'heading',
        text: 'LangGraph Patterns'
      },
      {
        type: 'list',
        items: [
          'State graphs vs message graphs',
          'Node design and edge routing logic',
          'Conditional edges and branching',
          'Cycles and iterative refinement patterns',
          'Checkpointing and persistence',
          'Human-in-the-loop integration'
        ]
      }
    ]
  },
  {
    title: 'CrewAI Multi-Agent Systems',
    category: 'Agentic AI',
    excerpt: 'Orchestrate multiple AI agents with roles, goals, and collaborative task execution patterns.',
    slug: 'crewai-multiagent',
    difficulty: 'Advanced',
    questionCount: '53 questions',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    imageAlt: 'CrewAI Multi-Agent',
    color: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    content: [
      {
        type: 'heading',
        text: 'Multi-Agent Architecture'
      },
      {
        type: 'list',
        items: [
          'Agent roles: researcher, writer, critic, planner',
          'Task assignment and delegation strategies',
          'Inter-agent communication patterns',
          'Hierarchical vs collaborative team structures',
          'Conflict resolution in multi-agent systems',
          'Performance monitoring and coordination'
        ]
      }
    ]
  },
  {
    title: 'AutoGen Framework',
    category: 'Agentic AI',
    excerpt: 'Build conversable agents, group chat architectures, and code-generating agent systems.',
    slug: 'autogen-framework',
    difficulty: 'Advanced',
    questionCount: '28 questions',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
    imageAlt: 'AutoGen',
    color: 'text-orange-400',
    borderHover: 'hover:border-orange-500/40',
    content: [
      {
        type: 'heading',
        text: 'AutoGen Core'
      },
      {
        type: 'list',
        items: [
          'Conversable agents and message passing',
          'UserProxyAgent vs AssistantAgent',
          'Group chat and speaker selection',
          'Code execution environments and sandboxing',
          'Human feedback integration',
          'Multi-agent code generation workflows'
        ]
      }
    ]
  },
  {
    title: 'AI Agents & Tool Use',
    category: 'Agentic AI',
    excerpt: 'Function calling, tool routing, agent reasoning patterns, and ReAct framework implementation.',
    slug: 'ai-agents-tools',
    difficulty: 'Intermediate',
    questionCount: '40 questions',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
    imageAlt: 'AI Agents',
    color: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    content: [
      {
        type: 'heading',
        text: 'Agent Capabilities'
      },
      {
        type: 'list',
        items: [
          'Function calling vs tool use: differences and when to use',
          'Tool schema design and validation',
          'Agent reasoning: ReAct (Reason + Act) pattern',
          'Tool selection and routing strategies',
          'Error handling in tool execution',
          'Observability and logging for agent actions'
        ]
      },
      {
        type: 'heading',
        text: 'Sample Question'
      },
      {
        type: 'paragraph',
        text: 'Q: Explain the ReAct pattern and how it improves agent reliability compared to direct action.'
      },
      {
        type: 'paragraph',
        text: 'A: ReAct alternates between Reasoning (thinking step) and Acting (tool use). Before each action, the agent explicitly reasons about what to do next and why. This creates an audit trail, enables self-correction, and reduces errors. For example: "Thought: I need current weather data. Action: call_weather_api(London). Observation: 15°C, rainy. Thought: Now I can answer the user." Compare this to direct action which is faster but less reliable and harder to debug.'
      }
    ]
  },
  {
    title: 'Agentic Design Patterns',
    category: 'Agentic AI',
    excerpt: 'Master reflection, planning, tool-use, and multi-agent collaboration patterns for production agents.',
    slug: 'agentic-patterns',
    difficulty: 'Advanced',
    questionCount: '50 questions',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    imageAlt: 'Agentic Patterns',
    color: 'text-pink-400',
    borderHover: 'hover:border-pink-500/40',
    content: [
      {
        type: 'heading',
        text: 'Design Patterns'
      },
      {
        type: 'list',
        items: [
          'Reflection pattern: self-critique and iterative refinement',
          'Planning pattern: decompose complex tasks',
          'Multi-agent collaboration: debate, voting, consensus',
          'Tool use pattern: function calling and API integration',
          'Memory patterns: short-term vs long-term memory',
          'Guardrails: validation and safety checks in agents'
        ]
      }
    ]
  }
];
