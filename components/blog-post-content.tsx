'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

interface BlogPostProps {
  post: {
    title: string
    date: string
    readTime: string
    category: string
    content: string
  }
}

export default function BlogPostContent({ post }: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <span>{post?.date ?? ''}</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>{post?.readTime ?? ''}</span>
        </div>
        <span className="px-2 py-0.5 bg-white/5 rounded-full text-xs">
          {post?.category ?? ''}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
        {post?.title ?? ''}
      </h1>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {(post?.content ?? '')?.split?.('\n\n')?.map?.((paragraph, i) => {
          if (paragraph?.startsWith?.('## ')) {
            return (
              <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
                {paragraph?.replace?.('## ', '') ?? ''}
              </h2>
            )
          }
          if (paragraph?.startsWith?.('### ')) {
            return (
              <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-3">
                {paragraph?.replace?.('### ', '') ?? ''}
              </h3>
            )
          }
          if (paragraph?.match?.(/^\d+\. \*\*/)) {
            return (
              <div key={i} className="my-4">
                {paragraph?.split?.('\n')?.map?.((line, j) => (
                  <p key={j} className="text-gray-300 leading-relaxed mb-2">
                    {line}
                  </p>
                )) ?? null}
              </div>
            )
          }
          return (
            <p key={i} className="text-gray-300 leading-relaxed mb-4">
              {paragraph ?? ''}
            </p>
          )
        }) ?? null}
      </div>
    </motion.article>
  )
}
