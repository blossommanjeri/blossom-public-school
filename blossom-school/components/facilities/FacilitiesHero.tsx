'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function FacilitiesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, var(--fresh-600) 0%, var(--fresh-500) 100%)',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            World-Class <span style={{ color: 'var(--gold-300)' }}>Facilities</span>
          </h1>

          <p 
            className="text-lg md:text-xl leading-relaxed mb-8"
            style={{ color: 'rgba(255, 255, 255, 0.95)' }}
          >
            Modern infrastructure designed to provide the best learning environment for comprehensive student development
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { number: '10+', label: 'Smart Classrooms' },
              { number: '2+', label: 'Science Labs' },
              { number: '5,000+', label: 'Library Books' },
              { number: '1 Acres', label: 'Campus Area' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="backdrop-blur-xl rounded-xl p-4 border"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                }}
              >
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'white' }}
                >
                  {stat.number}
                </div>
                <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
