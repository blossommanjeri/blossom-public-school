'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEye, FaBullseye } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function VisionMissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cards = [
    {
      icon: FaEye,
      title: 'Our Vision',
      content: 'To nurture responsible global citizens who are academically proficient, morally upright, socially committed, and emotionally balanced, capable of meeting the challenges of a rapidly changing world.',
      color: 'var(--pace-600)',
      gradient: 'linear-gradient(135deg, var(--pace-600), var(--pace-700))',
    },
    {
      icon: FaBullseye,
      title: 'Our Mission',
      content: 'To provide a comprehensive education that fosters intellectual curiosity, creative thinking, and strong character development. We strive to create an inclusive learning environment that respects diversity, promotes innovation, and prepares students for lifelong learning and success.',
      color: 'var(--coral-500)',
      gradient: 'linear-gradient(135deg, var(--coral-500), var(--coral-600))',
    },
  ]

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
            Vision & Mission
          </h2>
          <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--coral-500)' }}
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl p-8 md:p-10 border"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--neutral-200)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Gradient Top Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-2"
                style={{ background: card.gradient }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: card.gradient,
                  boxShadow: `0 8px 24px ${card.color}40`,
                }}
              >
                <card.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--pace-900)',
                }}
              >
                {card.title}
              </h3>

              {/* Content */}
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--neutral-700)' }}
              >
                {card.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
