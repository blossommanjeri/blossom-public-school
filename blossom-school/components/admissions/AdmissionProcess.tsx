'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaWpforms, FaUserCheck, FaFileAlt, FaCheckCircle, FaUserGraduate } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const steps = [
  {
    icon: FaWpforms,
    title: 'Submit Enquiry',
    description: 'Fill the online enquiry form with basic details',
    color: '#10b981',
  },
  {
    icon: FaUserCheck,
    title: 'Campus Visit',
    description: 'Schedule a visit to tour our facilities and meet faculty',
    color: '#3b82f6',
  },
  {
    icon: FaFileAlt,
    title: 'Application Form',
    description: 'Complete the admission application with required documents',
    color: '#f59e0b',
  },
  {
    icon: FaCheckCircle,
    title: 'Assessment',
    description: 'Student interaction and parent interview',
    color: '#8b5cf6',
  },
  {
    icon: FaUserGraduate,
    title: 'Admission Confirmed',
    description: 'Fee payment and enrollment completion',
    color: '#ef4444',
  },
]

export default function AdmissionProcess() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 md:py-24 -mt-12 relative z-10" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
          >
            Simple Admission Process
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Easy 5-step process to enroll your child at Blossom Public School
          </p>
        </motion.div>

        {/* Desktop Timeline View */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="hidden md:block relative"
        >
          {/* Connection Line */}
          <div 
            className="absolute top-20 left-0 right-0 h-1"
            style={{ 
              background: 'linear-gradient(90deg, var(--fresh-500), var(--pace-600))',
              opacity: 0.2,
            }}
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="relative z-10 w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                    boxShadow: `0 10px 30px ${step.color}40`,
                  }}
                >
                  <step.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  <div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: 'white', color: step.color }}
                  >
                    {idx + 1}
                  </div>
                </motion.div>
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Card View */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="md:hidden space-y-4"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--neutral-50)' }}
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: step.color, color: 'white' }}
                  >
                    {idx + 1}
                  </span>
                  <h3 
                    className="text-lg font-bold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
