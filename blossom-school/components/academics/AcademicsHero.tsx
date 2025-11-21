'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import PageHero from '@/components/ui/PageHero'

export default function AcademicsHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
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
            Kerala State Board Affiliated
          </motion.div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Academic Excellence Through <span style={{ color: 'var(--coral-400)' }}>Innovation</span>
          </h1>

          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Comprehensive curriculum from Kindergarten to Higher Secondary, designed to nurture critical thinking and holistic development
          </p>
        </motion.div>
      </div>
    </section>
  )
}
