'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Briefcase } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Top info bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-24 left-0 right-0 px-6 max-w-[1200px] mx-auto w-full flex justify-between items-start z-10"
      >
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Briefcase size={14} />
          <span>ROLE</span>
          <span className="text-white ml-2">Cyber Security Student</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>BASED IN</span>
          <MapPin size={14} />
          <span className="text-white">College Park, MD</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto flex flex-col items-center">
        {/* Profile Image with Name Overlay */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-fit"
        >
          <Image
            src="profile.jpg"
            alt="Dhairyashil Meshram"
            width={600}
            height={800}
            className="object-cover opacity-85"
            priority
          />
          
          {/* Bottom Fadeout */}
          <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          
          {/* Name Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-8 px-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight heading-serif text-center leading-none">
              <span className="text-white">DHAIRYASHIL</span>
              <br />
              <span>
                <span className="text-[#e53935]">ME</span>SHRAM
              </span>
            </h1>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mt-4"
        >
        Translating cybersecurity coursework into real-world practice.
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  )
}
