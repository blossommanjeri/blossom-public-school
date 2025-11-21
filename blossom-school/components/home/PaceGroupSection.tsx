'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { FaGlobeAmericas, FaUniversity } from 'react-icons/fa'

const institutions = [
  { name: 'Gulf Asian English School', location: 'Sharjah, UAE' },
  { name: 'India International School', location: 'Sharjah, UAE' },
  { name: 'Creative British School', location: 'Abu Dhabi, UAE' },
  { name: 'PACE International School', location: 'Sharjah, UAE' },
  { name: 'India International School', location: 'Kuwait' },
  { name: 'P.A. College of Engineering', location: 'Mangalore' },
  { name: 'P.A. Polytechnic', location: 'Mangalore' },
  { name: 'P.A. College of Pharmacy', location: 'Mangalore' },
  { name: 'P.A. Physiotherapy Institute', location: 'Mangalore' },
  { name: 'P.A. First Grade College', location: 'Mangalore' },
  { name: 'PACE Residential School', location: 'Manjeri' },
  { name: 'RIMS International School', location: 'Kannur' },
  { name: 'University of West London', location: 'UAE' },
  { name: 'Delhi Private School', location: 'Ajman' },
  { name: 'PACE British School', location: 'Sharjah' },
  { name: 'PACE Modern British School', location: 'Dubai' },
]

export default function PaceGroupSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--pace-900)',
            }}
          >
            Part of <span style={{ color: 'var(--pace-700)' }}>Pace Education Group</span>
          </h2>
          <p 
            className="text-base max-w-2xl mx-auto"
            style={{ color: 'var(--neutral-700)' }}
          >
            A trusted network of 16 institutions across India, UAE, and Kuwait
          </p>
        </motion.div>

        {/* Compact Institutions Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {institutions.map((institution, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-lg p-3 md:p-4 border cursor-pointer"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--neutral-200)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-all"
                  style={{
                    backgroundColor: 'var(--pace-50)',
                    color: 'var(--pace-700)',
                  }}
                >
                  <FaUniversity className="w-4 h-4" />
                </div>
                <h3 
                  className="text-xs font-semibold line-clamp-2 mb-1"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--pace-900)',
                    minHeight: '2rem',
                  }}
                >
                  {institution.name}
                </h3>
                <p 
                  className="text-xs"
                  style={{ color: 'var(--neutral-600)' }}
                >
                  {institution.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
