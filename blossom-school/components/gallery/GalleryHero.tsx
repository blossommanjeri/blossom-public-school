'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { FaImages, FaCamera } from 'react-icons/fa'

export default function GalleryHero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231f3d7c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Floating Icons */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl relative"
              style={{ backgroundColor: 'var(--pace-50)' }}
            >
              <FaImages className="w-8 h-8" style={{ color: 'var(--pace-700)' }} />
              
              {/* Small Camera Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--coral-500)' }}
              >
                <FaCamera className="w-3.5 h-3.5 text-white" />
              </motion.div>
            </motion.div>
          </div>

          {/* Title */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-900)' }}
          >
            Our Gallery
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl font-medium mb-3"
            style={{ color: 'var(--pace-600)' }}
          >
            Life at Blossom
          </p>

          {/* Description */}
          <p 
            className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--neutral-600)' }}
          >
            Capturing the joy, learning, and memorable moments that make our school community special
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="inline-flex flex-wrap justify-center gap-4 md:gap-6 px-6 py-4 rounded-xl"
            style={{ backgroundColor: 'var(--neutral-50)', border: '1px solid var(--neutral-200)' }}
          >
            {[
              { number: '500+', label: 'Photos', icon: '📸' },
              { number: '50+', label: 'Events', icon: '🎉' },
              { number: '10+', label: 'Albums', icon: '📁' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <span className="text-xl">{stat.icon}</span>
                <div className="text-left">
                  <div 
                    className="text-xl md:text-2xl font-bold leading-none mb-0.5"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-700)' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs font-medium" style={{ color: 'var(--neutral-600)' }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
