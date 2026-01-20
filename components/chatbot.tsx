'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, X, MessageCircle } from 'lucide-react'

const AI_CONTEXT = `You are an AI assistant representing Dhairyashil Meshram's portfolio website. Here's information about Dhairyashil:

**About Dhairyashil:**
- Cyber Security Engineer based in College Park, MD
- Specializes in Cybersecurity, AI/ML, and Full-Stack Development
- Currently pursuing Master of Engineering in Cyber Security at University of Maryland (Aug 2025 - May 2027, GPA 4.0/4.0)
- Quality Assurance Engineer at Accelya (July 2024 - Aug 2025)
- Research Intern at Annasaheb Magar College (Sept 2023 - June 2024)
- Bachelor of Engineering in Computer from Savitribai Phule Pune University

**Experience:**
- Led end-to-end testing for airline product with QA strategies and automated test suites
- Built Smart Healthcare Monitoring System with 93% accuracy and AES-256 encryption
- Optimized college portal for 3,000+ users, reducing response time by 40%
- Developed Network Traffic Analyzer detecting 50+ suspicious activities
- Web Developer with expertise in WordPress and e-commerce platforms

**Skills:**
- Languages: Python, JavaScript/TypeScript, Java, C++
- Security: Cybersecurity, Penetration Testing, Digital Forensics
- Testing: Automated Test Suites, QA Strategies
- Web: React, Next.js, Node.js, WordPress
- Cloud: AWS, GCP, Docker

**Contact:**
- Email: dmeshram@umd.edu
- LinkedIn: linkedin.com/in/dhairyashil-meshram
- GitHub: github.com/Dhairya-Senpai

Respond helpfully and professionally. Keep responses concise but informative. Anything outside this context is out of scope.`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView?.({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef?.current?.focus?.()
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!input?.trim?.() || isLoading) return

    const userMessage = input?.trim?.() ?? ''
    setInput('')
    setMessages((prev) => [...(prev ?? []), { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...(messages ?? []), { role: 'user', content: userMessage }],
          context: AI_CONTEXT,
        }),
      })

      if (!response?.ok) throw new Error('Failed to get response')

      const reader = response?.body?.getReader?.()
      const decoder = new TextDecoder()
      let assistantMessage = ''

      setMessages((prev) => [...(prev ?? []), { role: 'assistant', content: '' }])

      while (true) {
        const result = await reader?.read?.()
        if (result?.done) break
        
        const chunk = decoder?.decode?.(result?.value ?? new Uint8Array(), { stream: true }) ?? ''
        const lines = chunk?.split?.('\n') ?? []
        
        for (const line of lines) {
          if (line?.startsWith?.('data: ')) {
            const data = line?.slice?.(6)
            if (data === '[DONE]') continue
            try {
              const parsed = JSON.parse(data)
              const content = parsed?.choices?.[0]?.delta?.content ?? ''
              if (content) {
                assistantMessage += content
                setMessages((prev) => {
                  const newMessages = [...(prev ?? [])]
                  if (newMessages?.length > 0) {
                    newMessages[newMessages.length - 1] = { role: 'assistant', content: assistantMessage }
                  }
                  return newMessages
                })
              }
            } catch {}
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [...(prev ?? []), { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Input Bar (shown on homepage) */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-40 flex justify-center"
        >
          <div className="w-full">
            <div
              onClick={() => setIsOpen(true)}
              className="bg-[#1a1a1a] border border-white/10 rounded-full px-6 py-4 flex items-center gap-3 cursor-pointer hover:border-white/20 transition-all shadow-2xl"
            >
              <MessageCircle className="text-gray-500" size={20} />
              <span className="text-gray-500 flex-1">Ask anything about Dhairyashil...</span>
              <span className="text-[#e53935]">→</span>
            </div>
            <p className="text-center text-xs text-gray-600 mt-3">
              Powered by AI • <span className="text-gray-500">A portfolio chatbot built</span>
            </p>
          </div>
        </motion.div>
      )}

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#141414] border border-white/10 rounded-2xl w-full max-w-lg h-[500px] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e53935] to-[#ff6b35] flex items-center justify-center text-sm font-bold">
                    DM
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Ask about Dhairyashil</h3>
                    <p className="text-xs text-gray-500">AI-powered assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {(messages?.length ?? 0) === 0 && (
                  <div className="text-center text-gray-500 mt-8">
                    <p className="text-sm">Hi! Ask me anything about Dhairyashil&apos;s experience, projects, or skills.</p>
                  </div>
                )}
                {messages?.map?.((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg?.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                        msg?.role === 'user'
                          ? 'bg-[#e53935] text-white rounded-br-sm'
                          : 'bg-white/10 text-gray-200 rounded-bl-sm'
                      }`}
                    >
                      {msg?.content ?? ''}
                    </div>
                  </div>
                )) ?? null}
                {isLoading && (messages?.[(messages?.length ?? 1) - 1]?.content ?? '') === '' && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-bl-sm">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e?.target?.value ?? '')}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#e53935]/50 transition-colors"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input?.trim?.()}
                    className="p-2 bg-[#e53935] hover:bg-[#c62828] disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-colors"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send size={20} />}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
