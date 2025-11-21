'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUsers, FaStar, FaShieldAlt } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const values = [
  {
    icon: FaUsers,
    title: 'Student-Centered Focus',
    description: 'We place students at the heart of everything we do, ensuring each decision supports their growth and wellbeing.',
    color: '#c41230',
  },
  {
    icon: FaStar,
    title: 'Excellence',
    description: 'We strive for excellence in all aspects of education, continuously raising standards and embracing innovation.',
    color: '#0066cc',
  },
  {
    icon: FaShieldAlt,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards, teaching by example and fostering honesty in all interactions.',
    color: '#2eb85c',
  },
]

export default function CoreValuesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--neutral-50)' }}
    >
      {/* Background Decoration */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, var(--pace-700) 2px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--pace-900)',
            }}
          >
            Our Core Values
          </h2>
          <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--coral-500)' }}
          />
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl border cursor-pointer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderColor: 'rgba(31, 61, 124, 0.1)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Gradient Overlay on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: value.color }}
              />

              <div className="relative z-10">
                {/* Icon with Animated Border */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-20 h-20 mb-6"
                >
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, ${value.color}, transparent)`,
                      animation: 'spin 3s linear infinite',
                    }}
                  />
                  <div 
                    className="absolute inset-1 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'white' }}
                  >
                    <value.icon className="w-10 h-10" style={{ color: value.color }} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--pace-900)',
                  }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p 
                  className="leading-relaxed"
                  style={{ color: 'var(--neutral-700)' }}
                >
                  {value.description}
                </p>

                {/* Number Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{
                    backgroundColor: `${value.color}20`,
                    color: value.color,
                  }}
                >
                  {idx + 1}
                </motion.div>
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
