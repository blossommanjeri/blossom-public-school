'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBaby, FaChild, FaUserGraduate, FaAward } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const programs = [
  {
    icon: FaBaby,
    title: 'Kindergarten',
    grades: 'LKG & UKG',
    description: 'Play-based learning with focus on foundational skills, creativity, and social development.',
    color: '#f59e0b',
  },
  {
    icon: FaChild,
    title: 'Primary School',
    grades: 'Classes 1-4',
    description: 'Building strong academic foundation with emphasis on reading, writing, and numerical skills.',
    color: '#10b981',
  },
  {
    icon: FaUserGraduate,
    title: 'Upper Primary',
    grades: 'Classes 5-7',
    description: 'Advanced learning with specialized subjects, practical labs, and critical thinking development.',
    color: '#3b82f6',
  },
  {
    icon: FaAward,
    title: 'High School',
    grades: 'Classes 8-10',
    description: 'Comprehensive board exam preparation with focus on conceptual clarity and competitive readiness.',
    color: '#8b5cf6',
  },
]

export default function ProgramsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
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
            Academic Programs
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Structured learning pathways from early childhood to secondary education
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -6 }}
              className="p-8 rounded-3xl border-2"
              style={{
                backgroundColor: 'white',
                borderColor: program.color + '30',
              }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: program.color + '20', color: program.color }}
              >
                <program.icon className="w-8 h-8" />
              </div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
              >
                {program.title}
              </h3>
              <div 
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: program.color + '20', color: program.color }}
              >
                {program.grades}
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
                {program.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
