'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaIdCard, FaFile, FaImage, FaClipboardCheck } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const documents = [
  {
    icon: FaIdCard,
    title: 'Birth Certificate',
    description: 'Original birth certificate from Municipal Corporation',
    color: '#3b82f6',
  },
  {
    icon: FaFile,
    title: 'Transfer Certificate',
    description: 'TC from previous school (for classes above KG)',
    color: '#10b981',
  },
  {
    icon: FaImage,
    title: 'Passport Photos',
    description: '4 recent passport size photographs of student',
    color: '#f59e0b',
  },
  {
    icon: FaClipboardCheck,
    title: 'Address Proof',
    description: 'Aadhar card or any valid address proof',
    color: '#8b5cf6',
  },
]

export default function RequiredDocuments() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
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
            Required Documents
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Please keep these documents ready for a smooth admission process
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {documents.map((doc) => (
            <motion.div
              key={doc.title}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 rounded-2xl text-center border-2"
              style={{ 
                backgroundColor: 'white',
                borderColor: `${doc.color}30`,
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ 
                  backgroundColor: `${doc.color}20`,
                  color: doc.color,
                }}
              >
                <doc.icon className="w-8 h-8" />
              </motion.div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
              >
                {doc.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                {doc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
