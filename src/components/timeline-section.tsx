'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar, Building2, Trophy } from 'lucide-react'
import { timelineData, type TimelineItem } from '@/data/timeline-data'

type FilterType = 'all' | 'experience' | 'education' | 'achievement'

interface TimelineSectionProps {
  data?: TimelineItem[]
}

export default function TimelineSection({ data = timelineData }: TimelineSectionProps) {
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredData = data.filter((item) => {
    if (filter === 'all') return true
    return item.type === filter
  })

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'experience', label: 'Experience' },
    { value: 'education', label: 'Education' },
    { value: 'achievement', label: 'Achievements' },
  ]

  return (
    <section>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-serif">My Journey</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          From computer engineering studies to leading AI innovations that generate millions in business value. Here&apos;s how it unfolded.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 mb-12"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === f.value
                ? 'bg-white text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#e53935] via-white/20 to-transparent" />

        <div className="space-y-8">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full -translate-x-1/2 border-2 ${
                item.current
                  ? 'bg-[#e53935] border-[#e53935] shadow-lg shadow-[#e53935]/50'
                  : 'bg-[#0a0a0a] border-white/30'
              }`} />

              {/* Card */}
              <div className="bg-[#141414] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === 'experience' ? (
                        <Briefcase size={16} className="text-[#e53935]" />
                      ) : item.type === 'achievement' ? (
                        <Trophy size={16} className="text-[#e53935]" />
                      ) : (
                        <GraduationCap size={16} className="text-[#e53935]" />
                      )}
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {item.type}
                      </span>
                      {item.current && (
                        <span className="px-2 py-0.5 bg-[#e53935]/20 text-[#e53935] text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#e53935] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Organization & Location */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Building2 size={14} />
                    <span>{item.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Note */}
                {item.note && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-sm text-gray-500 italic">
                      &quot;{item.note}&quot;
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
