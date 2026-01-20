'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { blogPosts, type BlogPost } from '@/data/blog-data'

interface BlogSectionProps {
  data?: BlogPost[]
}

export default function BlogSection({ data = blogPosts }: BlogSectionProps) {
  return (
    <section>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-serif">Blog</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Thoughts on cybersecurity, technology, and building things that matter.
        </p>
      </motion.div>

      {/* Blog Posts */}
      <div className="space-y-6">
        {data?.map?.((post, index) => (
          <motion.article
            key={post?.id ?? index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#141414] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300 group"
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{post?.date ?? ''}</span>
              </div>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{post?.readTime ?? ''}</span>
              </div>
              <span className="px-2 py-0.5 bg-white/5 rounded-full text-xs">
                {post?.category ?? ''}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[#e53935] transition-colors">
              {post?.title ?? ''}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-400 leading-relaxed mb-4">
              {post?.excerpt ?? ''}
            </p>

            {/* Read more */}
            <Link
              href={`/blog/${post?.slug ?? ''}`}
              className="inline-flex items-center gap-2 text-[#e53935] text-sm font-medium hover:gap-3 transition-all"
            >
              Read more
              <ArrowRight size={16} />
            </Link>
          </motion.article>
        )) ?? null}
      </div>

      {/* Empty state message if no posts */}
      {(blogPosts?.length ?? 0) === 0 && (
        <div className="text-center py-20">
          <BookOpen size={48} className="mx-auto text-gray-600 mb-4" />
          <p className="text-gray-500">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </section>
  )
}
