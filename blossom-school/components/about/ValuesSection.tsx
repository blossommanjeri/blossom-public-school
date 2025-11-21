'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUsers, FaStar, FaShieldAlt, FaHeart, FaLightbulb, FaHandsHelping } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const values = [
  {
    icon: FaUsers,
    title: 'Respect & Inclusivity',
    description: 'We celebrate diversity and foster an environment where every individual feels valued and respected.',
    color: '#c41230',
    bgLight: '#fef2f2',
  },
  {
    icon: FaStar,
    title: 'Excellence',
    description: 'We pursue the highest standards in all endeavors, encouraging students to achieve their personal best.',
    color: '#0066cc',
    bgLight: '#eff6ff',
  },
  {
    icon: FaShieldAlt,
    title: 'Integrity',
    description: 'We uphold honesty, transparency, and ethical behavior in all aspects of school life.',
    color: '#2eb85c',
    bgLight: '#f0fdf4',
  },
  {
    icon: FaHeart,
    title: 'Compassion',
    description: 'We nurture empathy and kindness, teaching students to care for others and contribute to society.',
    color: '#f59e0b',
    bgLight: '#fffbeb',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'We encourage creative thinking and adaptability, preparing students for a dynamic future.',
    color: '#8b5cf6',
    bgLight: '#faf5ff',
  },
  {
    icon: FaHandsHelping,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and community, fostering strong partnerships between students, staff, and parents.',
    color: '#06b6d4',
    bgLight: '#ecfeff',
  },
]

export default function ValuesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--neutral-50)' }}
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--pace-900)',
            }}
          >
            Our Core Values
          </h2>
          <p 
            className="text-base md:text-lg max-w-2xl mx-auto mb-6"
            style={{ color: 'var(--neutral-700)' }}
          >
            The principles that guide everything we do at Blossom Public School
          </p>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl p-8 border-2 cursor-pointer"
              style={{
                backgroundColor: 'white',
                borderColor: 'transparent',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Top Border Accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: value.color }}
              />

              <div className="relative z-10">
                {/* Icon Container with Background */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-20 h-20 mb-6 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: value.bgLight,
                  }}
                >
                  <value.icon className="w-10 h-10" style={{ color: value.color }} />
                  
                  {/* Pulse Ring on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ border: `3px solid ${value.color}` }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-xl md:text-2xl font-bold mb-3 group-hover:text-pace-700 transition-colors"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--pace-900)',
                  }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: 'var(--neutral-700)' }}
                >
                  {value.description}
                </p>
              </div>

              {/* Bottom Border Animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-1"
                style={{ backgroundColor: value.color }}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
              />

              {/* Hover Background Gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ backgroundColor: value.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
