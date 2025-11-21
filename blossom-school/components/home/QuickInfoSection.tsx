'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaSchool, FaGraduationCap, FaHeart } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const features = [
  {
    icon: FaSchool,
    title: 'Modern Facilities',
    description: 'Modern classrooms, labs, sports facilities, and more for comprehensive learning',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaGraduationCap,
    title: 'Academic Excellence',
    description: 'Developing academic excellence, character, and creativity in every student',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: FaHeart,
    title: 'Student-Centered',
    description: 'We place students at the heart of everything we do, ensuring their growth and wellbeing',
    gradient: 'from-red-500 to-orange-500',
  },
]

export default function QuickInfoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="quick-info"
      className="relative py-20 -mt-20"
      style={{ backgroundColor: 'var(--neutral-50)' }}
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-xl border cursor-pointer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: 'rgba(31, 61, 124, 0.1)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Gradient Background on Hover */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient}`}
              />

              <div className="relative z-10 p-8">
                {/* Icon with Gradient Background */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--pace-900)',
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--neutral-700)' }}
                >
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
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
    </section>
  )
}
