export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'prompt-engineering-next-big-skill',
    title: 'Prompt Engineering: The next big skill',
    excerpt: 'I genuinely believe prompt engineering and prompting will be one of the most valuable skills this year. Not as a buzzword, but as a real engineering discipline.',
    date: 'January 4, 2026',
    readTime: '3 min read',
    category: 'AI & Career',
    content: `I genuinely believe prompt engineering and prompting will be one of the most valuable skills this year. Not as a buzzword, but as a real engineering discipline.\n\n## Why Prompt Engineering Matters\n\nAs AI models become more powerful, the ability to communicate effectively with them becomes crucial. It's not just about getting answers—it's about getting the right answers in the right format.\n\n## Key Principles\n\n1. **Be specific**: Vague prompts lead to vague outputs\n2. **Provide context**: Models work better with background information\n3. **Iterate**: The first prompt is rarely the best\n4. **Structure your output**: Ask for specific formats when needed\n\n## The Future\n\nPrompt engineering isn't going away. As models evolve, so will the techniques we use to interact with them. The developers who master this skill will have a significant advantage.\n\nStart practicing now. Your future self will thank you.`,
  },
  {
    id: '2',
    slug: 'building-rag-systems',
    title: 'Building Production-Ready RAG Systems',
    excerpt: 'A deep dive into building retrieval-augmented generation systems that actually work in production. From chunking strategies to hybrid search.',
    date: 'December 28, 2025',
    readTime: '8 min read',
    category: 'Technical',
    content: `A deep dive into building retrieval-augmented generation systems that actually work in production.\n\n## The Challenge\n\nRAG systems look simple in demos but are notoriously difficult to get right in production. Here's what I've learned building them at scale.\n\n## Key Considerations\n\n### 1. Chunking Strategy\nThe way you chunk your documents has a massive impact on retrieval quality. Consider semantic chunking over naive splitting.\n\n### 2. Hybrid Search\nCombine vector similarity with keyword search for better results. Neither alone is sufficient.\n\n### 3. Re-ranking\nDon't trust your initial retrieval results. Use cross-encoders to re-rank your top candidates.\n\n### 4. Evaluation\nBuild a robust evaluation pipeline. Without it, you're flying blind.\n\n## Lessons Learned\n\nThe most important lesson: start simple and iterate. A basic RAG system that works is better than a complex one that doesn't.`,
  },
  {
    id: '3',
    slug: 'my-journey-to-nyu',
    title: 'From Gujarat to NYC: My Journey to NYU',
    excerpt: 'Reflections on leaving India, navigating the US grad school application process, and what I learned about taking big leaps.',
    date: 'December 15, 2025',
    readTime: '5 min read',
    category: 'Personal',
    content: `Moving from Gujarat to New York City to pursue my Master's at NYU was the biggest decision of my life.\n\n## The Decision\n\nLeaving everything familiar behind wasn't easy. But I knew that to grow, I needed to push myself out of my comfort zone.\n\n## The Application Process\n\nMonths of preparation—GRE, TOEFL, SOPs, recommendation letters. Each rejection was a learning experience. Each acceptance, a validation.\n\n## Arriving in NYC\n\nNothing prepares you for the first time you see Manhattan's skyline. The energy, the diversity, the endless possibilities.\n\n## What I've Learned\n\n1. **Embrace discomfort**: Growth happens outside your comfort zone\n2. **Build your network**: The people you meet are your greatest asset\n3. **Stay curious**: There's always more to learn\n\n## Looking Forward\n\nNew York has taught me that dreams are achievable with persistence and hard work. This is just the beginning.`,
  },
]
