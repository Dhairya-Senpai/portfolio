'use client'

import { motion } from 'framer-motion'
import TerminalWindow from '@/components/terminal'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-[4rem] sm:pt-[5rem] pb-[5rem] sm:pb-[8rem]">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0f0f0f] to-[#000000]" />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[1200px] mx-auto flex flex-col items-center w-full">
        
        {/* Profile Image with Name Overlay */}
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full"
        style={{
            width: 'clamp(300px, 50vw, 590px)', // fluid width
        }}
        >
        <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Dhairyashil Meshram"
            className="w-full h-auto object-cover opacity-85 rounded-lg"
        />

        {/* Bottom Fadeout */}
        <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000] to-transparent"
            style={{ height: 'clamp(12rem, 20vw, 20rem)' }} // taller, fluid fade
        />

        {/* Name Overlay at the bottom */}
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-0 sm:bottom-20 left-0 right-0 flex flex-col items-center justify-end px-3 sm:px-6"
        >
        <h1
            className="text-center font-bold heading-serif"
            style={{
            fontSize: 'clamp(2.5rem, 9vw, 7rem)',
            lineHeight: '0.9',
            }}
        >
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
          className="text-gray-400 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 px-2"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          }}
        >
          Translating cybersecurity coursework into real-world practice.
        </motion.p>
      </div>

      {/* Terminal Component */}
      <TerminalWindow />

      {/* Bottom fade of the section */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000] to-transparent"
        style={{ height: 'clamp(12rem, 20vw, 20rem)' }} // match image fade
      />
    </section>
  )
}
