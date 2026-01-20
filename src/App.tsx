import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import TimelineSection from '@/components/timeline-section'
import BlogSection from '@/components/blog-section'
import BlogPostPage from '@/components/blog-post-page'
import ContactSection from '@/components/contact-section'
// import ChatBot from '@/components/chatbot'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      {/* <ChatBot /> */}
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <ProjectsSection />
      </div>
    </div>
  )
}

function StoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <TimelineSection />
      </div>
    </div>
  )
}

function BlogListPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <BlogSection />
      </div>
    </div>
  )
}

function BlogPostViewPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-[800px] mx-auto px-6">
        <BlogPostPage />
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <ContactSection />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] text-white min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostViewPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
