'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, var(--pace-700) 0%, var(--pace-600) 50%, var(--pace-800) 100%)',
        }}
      />

      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 rounded-full mb-6 backdrop-blur-xl border"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
            }}
          >
            <span className="font-semibold">Excellence Since 2003</span>
          </motion.div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About <span style={{ color: 'var(--coral-400)' }}>Blossom Public School</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl leading-relaxed mb-8"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            A beacon of quality education in Manjeri for over 20 years, nurturing students with academic excellence, moral integrity, and cultural awareness.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { number: '20+', label: 'Years Legacy' },
              { number: '500+', label: 'Students' },
              { number: '50+', label: 'Faculty' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="backdrop-blur-xl rounded-xl p-4 border"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ 
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
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
