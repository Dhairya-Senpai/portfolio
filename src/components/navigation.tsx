'use client'

import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Clock, Briefcase, MapPin, Download } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/story', label: 'Story' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume.pdf', label: 'Resume', download: true }
]

export default function Navigation() {
  const { pathname } = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const etTime = now.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      setCurrentTime(`${etTime} ET`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-6 inset-x-0 z-50 px-8"
    >
      <div className="relative flex items-center justify-between text-sm text-gray-300">

        {/* LEFT */}
        <div className="hidden md:block">
        <div>
            <p className="uppercase tracking-widest text-xs text-gray-500 flex items-center gap-1">
            <Briefcase size={14} className="text-gray-500" />
            <span>Role</span>
            </p>
            <p className="text-white">Cyber Security Student</p>
        </div>
        </div>


        {/* CENTER — ROUNDED RECTANGLE */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div
            className="flex items-center gap-6 whitespace-nowrap
                       px-6 py-2 rounded-2xl
                       bg-[#000000]/80 backdrop-blur-md
                       border border-white/10"
          >

            {/* DM */}
            <Link to="/" className="font-bold text-white">
              D<span className="text-[#e53935]">M</span>
            </Link>

            {/* TIME */}
            <div className="flex items-center gap-1 text-xs text-gray-300
                            px-2 py-1 rounded-full
                            bg-white/5 border border-white/10">
              <Clock size={12} />
              {currentTime}
            </div>

            {/* NAV LINKS */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                if (link.download) {
                  const assetHref = `${import.meta.env.BASE_URL}${link.href.replace(/^\//, '')}`
                  return (
                    <a
                      key={assetHref}
                      href={assetHref}
                      download
                      className={`transition ${
                        pathname === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`transition ${
                      pathname === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 rounded-full
                         bg-white/10 hover:bg-white/20
                         text-white transition border border-white/10
                         hidden md:inline-flex"
            >
              Get in Touch
            </Link>

          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block text-right">
        <div className="flex items-center justify-end gap-2">
            <div>
            <p className="uppercase tracking-widest text-xs text-gray-500 flex items-center justify-end gap-1">
                <MapPin size={14} className="text-gray-500" />
                <span>Based in</span>
            </p>
            <p className="text-white">College Park, MD</p>
            </div>
        </div>
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-auto text-gray-400 hover:text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-6 rounded-2xl
                     bg-[#000000]/90 backdrop-blur-md
                     border border-white/10 p-4"
        >
          <div className="flex flex-col gap-2">

            {/* NAV LINKS + CTA inside mobile */}
            {navLinks.map((link) => {
              if (link.download) {
                const assetHref = `${import.meta.env.BASE_URL}${link.href.replace(/^\//, '')}`
                return (
                  <a
                    key={assetHref}
                    href={assetHref}
                    onClick={() => setMobileMenuOpen(false)}
                    download
                    className={`px-4 py-3 rounded-lg ${
                      pathname === link.href
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg ${
                    pathname === link.href
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Get in Touch inside mobile menu */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg
                         bg-[#e53935] text-white text-center"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
