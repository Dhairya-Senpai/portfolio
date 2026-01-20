'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Trophy } from 'lucide-react'
import { projectsData, type Project } from '@/data/projects-data'

interface ProjectsSectionProps {
  data?: Project[]
}

export default function ProjectsSection({ data = projectsData }: ProjectsSectionProps) {
  const years = data.map(p => parseInt(p.year)).sort((a, b) => a - b)
  const minYear = Math.min(...years)
  const maxYear = Math.max(...years)
  const projectCount = data.length

  return (
    <section>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-serif">My Works</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A collection of projects focused on building secure, intelligent, and real-world digital solutions.
          </p>
        </div>
        <div className="text-gray-500 text-sm">
          <span className="text-white font-medium">{minYear}—{maxYear}</span>
          <span className="mx-2">——</span>
          <span>{projectCount} Projects</span>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#141414] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#e53935] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                <p className="text-gray-500 text-sm">{project.subtitle}</p>
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Github size={18} className="text-gray-400" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <ExternalLink size={18} className="text-gray-400" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="flex gap-6 mb-4 pt-4 border-t border-white/5">
              {project.metrics.map((metric, i) => (
                <div key={i}>
                  <p className="text-white font-semibold text-sm">{metric.label}</p>
                  <p className="text-gray-500 text-xs">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <Trophy size={14} className={project.statusColor} />
              <span className={`text-xs font-medium ${project.statusColor}`}>
                {project.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
