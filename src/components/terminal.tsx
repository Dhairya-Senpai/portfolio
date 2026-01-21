'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react'

interface Message {
  type: 'command' | 'output' | 'error'
  content: string
}

export default function TerminalWindow() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { type: 'output', content: 'Dhairyashil Meshram\'s Portfolio Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" for available commands\n' },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView?.({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef?.current?.focus?.()
    }
  }, [isOpen, isMinimized])

  const handleCommand = async (command: string) => {
    const cmd = command.trim().toLowerCase()
    
    if (cmd === 'help') {
      return {
        type: 'output' as const,
        content: `Available commands:
  help       - Show this help message
  about      - About Dhairyashil
  skills     - List technical skills
  experience - Work experience
  education  - Educational background
  projects   - Notable projects
  contact    - Contact information
  clear      - Clear terminal
`
      }
    }

    if (cmd === 'clear' || cmd === 'cls') {
      setMessages([])
      return null
    }
    
    if (cmd === 'about') {
      return {
        type: 'output' as const,
        content: `Dhairyashil Meshram
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cyber Security Engineer | AI/ML Enthusiast | Full-Stack Developer

Based in College Park, MD
Currently pursuing Master of Engineering in Cyber Security at 
University of Maryland.

Passionate about building secure, scalable systems and exploring 
AI/ML applications in cybersecurity.
`
      }
    }
    
    if (cmd === 'skills') {
      return {
        type: 'output' as const,
        content: `Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Languages:
  • Python, JavaScript/TypeScript, Java, C++

Security:
  • Cybersecurity, Penetration Testing, Digital Forensics

Testing & QA:
  • Automated Test Suites, QA Strategies, End-to-End Testing

Web Development:
  • React, Next.js, Node.js, WordPress

Cloud & DevOps:
  • AWS, GCP, Docker
`
      }
    }
    
    if (cmd === 'experience') {
      return {
        type: 'output' as const,
        content: `Work Experience
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Quality Assurance Engineer @ Accelya
July 2024 - Aug 2025
  • Led end-to-end testing for airline product
  • Developed QA strategies and automated test suites

Research Intern @ Annasaheb Magar College
Sept 2023 - June 2024
  • Built Smart Healthcare Monitoring System (93% accuracy)
  • Implemented AES-256 encryption for data security

Web Developer (Freelance)
  • WordPress and e-commerce platform development
  • Optimized college portal for 3,000+ users
  • Reduced response time by 40%
`
      }
    }

    if (cmd === 'education') {
      return {
        type: 'output' as const,
        content: `Education
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Master of Engineering in Cyber Security
University of Maryland, College Park
Aug 2025 - May 2027 | GPA: 4.0/4.0

Bachelor of Engineering in Computer Engineering
Savitribai Phule Pune University
Graduated 2024
`
      }
    }

    if (cmd === 'projects') {
      return {
        type: 'output' as const,
        content: `Notable Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Smart Healthcare Monitoring System
  • 93% accuracy in health predictions
  • AES-256 encryption for patient data
  • Real-time monitoring and alerts

Network Traffic Analyzer
  • Detects 50+ types of suspicious activities
  • Real-time threat detection
  • Automated security reporting

College Portal Optimization
  • Serves 3,000+ users
  • 40% reduction in response time
  • Enhanced user experience
`
      }
    }
    
    if (cmd === 'contact') {
      return {
        type: 'output' as const,
        content: `Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    dmeshram@umd.edu
LinkedIn: linkedin.com/in/dhairyashil-meshram
GitHub:   github.com/Dhairya-Senpai
`
      }
    }
    
    // Unknown command
    return {
      type: 'error' as const,
      content: `Command not found: ${command}
Type "help" to see available commands.
`
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userCommand = input.trim()
    setInput('')
    setCommandHistory([...commandHistory, userCommand])
    setHistoryIndex(-1)
    
    setMessages((prev) => [...prev, { type: 'command', content: userCommand }])
    setIsLoading(true)

    try {
      const response = await handleCommand(userCommand)
      if (response) {
        setMessages((prev) => [...prev, response])
      }
    } catch (error) {
      console.error('Terminal error:', error)
      setMessages((prev) => [...prev, { 
        type: 'error', 
        content: 'Error: Command execution failed. Please try again.\n' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    }
  }

  return (
    <>
      {/* Terminal Icon */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-black border-2 border-green-500 rounded-lg flex items-center justify-center hover:bg-green-500/10 transition-all shadow-2xl z-40 group"
        >
          <Terminal className="text-green-500" size={20} />
          <span className="hidden sm:block absolute -top-10 right-0 bg-black border border-green-500 px-3 py-1 rounded text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Open Terminal
          </span>
        </motion.button>
      )}

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed z-50 transition-all duration-300 ${
              isMinimized 
                ? 'bottom-6 right-6 sm:bottom-8 sm:right-8 w-64 sm:w-80 h-12' 
                : 'inset-4 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[600px] sm:h-[500px]'
            }`}
          >
            <div className="bg-black border-2 border-green-500 rounded-lg overflow-hidden shadow-2xl h-full flex flex-col font-mono">
              {/* Terminal Header */}
              <div className="bg-green-500/20 border-b-2 border-green-500 px-3 sm:px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-green-500 sm:w-4 sm:h-4" />
                  <span className="text-green-500 text-xs sm:text-sm font-bold truncate">dhairyashil@portfolio:~$</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 hover:bg-green-500/20 rounded transition-colors"
                  >
                    {isMinimized ? <Maximize2 size={14} className="text-green-500" /> : <Minimize2 size={14} className="text-green-500" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-red-500/20 rounded transition-colors"
                  >
                    <X size={14} className="text-red-500" />
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              {!isMinimized && (
                <>
                  <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1 text-xs sm:text-sm">
                    {messages.map((msg, i) => (
                      <div key={i} className="whitespace-pre-wrap break-words">
                        {msg.type === 'command' && (
                          <div className="flex gap-2">
                            <span className="text-green-500 flex-shrink-0">$</span>
                            <span className="text-white break-all">{msg.content}</span>
                          </div>
                        )}
                        {msg.type === 'output' && (
                          <div className="text-green-400">{msg.content}</div>
                        )}
                        {msg.type === 'error' && (
                          <div className="text-red-400">{msg.content}</div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-2">
                        <span className="text-green-500">$</span>
                        <span className="text-green-400 animate-pulse">Processing...</span>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Terminal Input */}
                  <form onSubmit={handleSubmit} className="border-t-2 border-green-500 p-3 sm:p-4">
                    <div className="flex gap-2 items-center">
                      <span className="text-green-500 flex-shrink-0 text-xs sm:text-sm">$</span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent text-white outline-none caret-green-500 text-xs sm:text-sm"
                        disabled={isLoading}
                        autoComplete="off"
                        spellCheck="false"
                      />
                      <span className="text-green-500 animate-pulse text-xs sm:text-sm">▊</span>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}