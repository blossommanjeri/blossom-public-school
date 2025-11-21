'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { FaCalendarAlt, FaCheckCircle, FaUserGraduate } from 'react-icons/fa'

export default function AdmissionsHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
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
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border-2"
            style={{
              backgroundColor: 'var(--fresh-50)',
              borderColor: 'var(--fresh-200)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaCheckCircle className="w-5 h-5" style={{ color: 'var(--fresh-600)' }} />
            </motion.div>
            <span className="font-bold text-sm" style={{ color: 'var(--fresh-700)' }}>
              Admissions Open for 2026-27
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-900)' }}
          >
            Begin Your Child's Journey<br />
            <span style={{ color: 'var(--pace-600)' }}>Towards Excellence</span>
          </h1>

          {/* Description */}
          <p 
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'var(--neutral-700)' }}
          >
            Join our community of learners where education meets character building and holistic development
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: FaCalendarAlt, title: 'Academic Year', text: '2026-27', color: 'var(--pace-600)' },
              { icon: FaUserGraduate, title: 'Classes', text: 'LKG to Class 10', color: 'var(--coral-600)' },
              { icon: FaCheckCircle, title: 'Board', text: 'Kerala State', color: 'var(--fresh-600)' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="p-6 rounded-xl border-2"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'var(--neutral-200)',
                }}
              >
                <div 
                  className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold mb-1" style={{ color: 'var(--neutral-600)' }}>
                  {item.title}
                </div>
                <div 
                  className="text-lg font-bold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-900)' }}
                >
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
