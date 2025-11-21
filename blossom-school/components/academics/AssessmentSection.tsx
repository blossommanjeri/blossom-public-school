'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaClipboardCheck, FaChartLine, FaFileAlt, FaTrophy } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const assessmentTypes = [
  { icon: FaClipboardCheck, title: 'Continuous Assessment', description: 'Regular tests and class participation' },
  { icon: FaChartLine, title: 'Progress Tracking', description: 'Detailed performance reports for parents' },
  { icon: FaFileAlt, title: 'Board Exams', description: 'Comprehensive preparation for state board exams' },
  { icon: FaTrophy, title: 'Competitive Training', description: 'Olympiads and scholarship exam coaching' },
]

export default function AssessmentSection() {
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
            Assessment & Evaluation
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Comprehensive evaluation system to track student progress and ensure academic growth
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {assessmentTypes.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.03 }}
              className="p-6 rounded-2xl text-center border-2"
              style={{ backgroundColor: 'white', borderColor: 'var(--neutral-200)' }}
            >
              <div 
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--coral-50)', color: 'var(--coral-600)' }}
              >
                <item.icon className="w-7 h-7" />
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
