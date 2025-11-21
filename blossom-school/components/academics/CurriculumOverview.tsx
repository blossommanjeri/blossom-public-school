'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBook, FaLaptopCode, FaFlask, FaGlobe } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const highlights = [
  {
    icon: FaBook,
    title: 'Kerala State Board',
    description: 'Complete syllabus adherence with focus on conceptual learning',
  },
  {
    icon: FaLaptopCode,
    title: 'Digital Learning',
    description: 'Smart classrooms and technology-integrated teaching methods',
  },
  {
    icon: FaFlask,
    title: 'Practical Learning',
    description: 'Well-equipped labs for hands-on experiments and projects',
  },
  {
    icon: FaGlobe,
    title: 'Holistic Approach',
    description: 'Balance of academics, sports, arts, and life skills development',
  },
]

export default function CurriculumOverview() {
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
            Our Curriculum Highlights
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--coral-500)' }} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl border text-center"
              style={{
                backgroundColor: 'var(--neutral-50)',
                borderColor: 'var(--neutral-200)',
              }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--pace-50)', color: 'var(--pace-700)' }}
              >
                <item.icon className="w-8 h-8" />
              </div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
