import { notFound } from 'next/navigation'
import BlogPostContent from '@/components/blog-post-content'
import { blogPosts } from '@/data/blog-data'

export function generateStaticParams() {
  return blogPosts?.map?.((post) => ({ slug: post.slug })) ?? []
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts?.find?.((p) => p?.slug === params?.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-[800px] mx-auto px-6">
        <BlogPostContent post={post} />
      </div>
    </div>
  )
}
