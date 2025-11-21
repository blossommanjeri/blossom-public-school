'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import PageHero from '@/components/ui/PageHero' // Assuming this is a generic hero component, though not directly used in your example's markup

export default function FacultyHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          // Using a similar gradient, feel free to adjust colors as needed for 'faculty'
          background: 'linear-gradient(135deg, var(--pace-700) 0%, var(--pace-600) 100%)', 
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tagline/Descriptor for Faculty */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 rounded-full mb-6 backdrop-blur-xl border"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
            }}
          >
            Experienced & Dedicated Educators
          </motion.div>

          {/* Main Headline for Faculty */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Meet Our Exceptional <span style={{ color: 'var(--coral-400)' }}>Faculty</span>
          </h1>

          {/* Sub-description for Faculty */}
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            A team of passionate educators committed to fostering a supportive and engaging learning environment for every student.
          </p>
        </motion.div>
      </div>
    </section>
  )
}