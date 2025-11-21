'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaSchool, FaChalkboardTeacher, FaWifi, FaShieldAlt } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const features = [
  {
    icon: FaSchool,
    title: 'Modern Architecture',
    description: 'Spacious, well-ventilated classrooms with natural lighting and ergonomic furniture',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Smart Classrooms',
    description: 'Digital boards, projectors, and audio-visual aids for interactive learning',
  },
  {
    icon: FaWifi,
    title: 'High-Speed Internet',
    description: 'Campus-wide WiFi connectivity for digital learning resources',
  },
  {
    icon: FaShieldAlt,
    title: 'Safe Environment',
    description: 'CCTV surveillance, fire safety systems, and secure campus premises',
  },
]

export default function InfrastructureSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
          >
            Campus Infrastructure
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Thoughtfully designed spaces that inspire learning and creativity
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl border text-center"
              style={{ backgroundColor: 'var(--neutral-50)', borderColor: 'var(--neutral-200)' }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--fresh-50)', color: 'var(--fresh-600)' }}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
