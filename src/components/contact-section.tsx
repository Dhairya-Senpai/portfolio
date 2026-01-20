'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Briefcase, Check, Globe } from 'lucide-react'
import { contactMethods, lookingFor, type ContactMethod, type LookingForItem } from '@/data/contact-data'

interface ContactSectionProps {
  methods?: ContactMethod[]
  opportunities?: LookingForItem[]
}

export default function ContactSection({ methods = contactMethods, opportunities = lookingFor }: ContactSectionProps) {
  return (
    <section>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-serif">Let&apos;s Connect</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I&apos;m always open to conversations about cybersecurity, emerging technologies, and meaningful collaboration opportunities.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-sm">
          <span className="flex items-center gap-2 text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new projects
          </span>
          <span className="text-gray-500">Based in College Park, MD</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left Column - Contact Methods */}
        <div className="lg:col-span-3 space-y-6">
          {/* Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {methods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href?.startsWith?.('http') ? '_blank' : undefined}
                  rel={method.href?.startsWith?.('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-[#141414] border border-white/5 rounded-xl hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-[#e53935]/20 transition-colors">
                    {method.icon && <method.icon size={20} className="text-gray-400 group-hover:text-[#e53935] transition-colors" />}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{method.label}</p>
                    <p className="text-sm text-white">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#141414] border border-white/5 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-400">CURRENT AVAILABILITY</h3>
              <span className="flex items-center gap-2 text-green-400 text-sm">
                <Check size={14} />
                Available
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Response Time</p>
                <p className="text-sm text-white flex items-center gap-2">
                  <Clock size={14} className="text-gray-500" />
                  24 hours
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Timezone</p>
                <p className="text-sm text-white">EST (UTC-5)</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Work Type</p>
                <p className="text-sm text-white">Remote & On-site</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-center text-sm text-gray-500 italic">
              &quot;The best way to predict the future is to create it. Let&apos;s do something incredible together.&quot;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dmeshram@umd.edu"
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors text-center"
              >
                Start a Conversation
              </a>
              <a
                href="https://linkedin.com/in/dhairyashil-meshram"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors text-center"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - What I'm Looking For & Location */}
        <div className="lg:col-span-2 space-y-6">
          {/* What I'm Looking For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#141414] border border-white/5 rounded-xl p-6"
          >
            <h3 className="text-sm font-medium text-gray-400 mb-4">WHAT I&apos;M LOOKING FOR</h3>
            <div className="space-y-3">
              {opportunities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  {item.icon && <item.icon size={16} className="text-[#e53935]" />}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location & Work Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#141414] border border-white/5 rounded-xl p-6"
          >
            <h3 className="text-sm font-medium text-gray-400 mb-4">LOCATION & WORK PREFERENCES</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-500 mt-1" />
                <div>
                  <p className="text-xs text-gray-500">Current Location</p>
                  <p className="text-sm text-white">College Park, MD</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase size={16} className="text-gray-500 mt-1" />
                <div>
                  <p className="text-xs text-gray-500">Work Style</p>
                  <p className="text-sm text-white">Remote & On-site</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={16} className="text-gray-500 mt-1" />
                <div>
                  <p className="text-xs text-gray-500">Travel</p>
                  <p className="text-sm text-white">Open to relocation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
