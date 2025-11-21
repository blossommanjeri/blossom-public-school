'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaDownload } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const feeData = [
  { grade: 'KG (LKG & UKG)', annual: '₹25,000', term: '₹8,500' },
  { grade: 'Class 1 - 3', annual: '₹28,000', term: '₹9,500' },
  { grade: 'Class 4 - 5', annual: '₹30,000', term: '₹10,000' },
  { grade: 'Class 6 - 7', annual: '₹32,000', term: '₹11,000' },
  { grade: 'Class 8 - 10', annual: '₹35,000', term: '₹12,000' },
]

export default function FeeStructure() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ backgroundColor: 'var(--neutral-50)' }}>
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
            Fee Structure 2026-27
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Transparent and affordable fee structure for quality education
          </p>
        </motion.div>

        {/* Fee Table - Desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="hidden md:block max-w-4xl mx-auto mb-8"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg border-2" style={{ borderColor: 'var(--pace-200)' }}>
            {/* Table Header */}
            <div 
              className="grid grid-cols-3 p-6 text-white font-bold"
              style={{ 
                background: 'linear-gradient(135deg, var(--pace-700), var(--pace-600))',
                fontFamily: 'var(--font-heading)',
              }}
            >
              <div>Grade/Class</div>
              <div className="text-center">Annual Fee</div>
              <div className="text-center">Per Term</div>
            </div>

            {/* Table Rows */}
            {feeData.map((row, idx) => (
              <motion.div
                key={row.grade}
                variants={fadeInUp}
                className="grid grid-cols-3 p-6 border-b last:border-b-0"
                style={{ 
                  backgroundColor: idx % 2 === 0 ? 'white' : 'var(--pace-50)',
                  borderColor: 'var(--neutral-200)',
                }}
              >
                <div className="font-semibold" style={{ color: 'var(--pace-900)' }}>
                  {row.grade}
                </div>
                <div className="text-center font-bold" style={{ color: 'var(--fresh-600)' }}>
                  {row.annual}
                </div>
                <div className="text-center" style={{ color: 'var(--neutral-700)' }}>
                  {row.term}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fee Cards - Mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="md:hidden space-y-4 mb-8"
        >
          {feeData.map((row) => (
            <motion.div
              key={row.grade}
              variants={fadeInUp}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'white', border: '2px solid var(--pace-200)' }}
            >
              <h3 
                className="text-lg font-bold mb-4"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
              >
                {row.grade}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>Annual Fee</span>
                <span className="text-xl font-bold" style={{ color: 'var(--fresh-600)' }}>
                  {row.annual}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>Per Term</span>
                <span className="text-lg font-semibold" style={{ color: 'var(--neutral-700)' }}>
                  {row.term}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note & Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <div 
            className="p-6 rounded-xl"
            style={{ backgroundColor: 'var(--gold-50)', border: '1px solid var(--gold-200)' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--neutral-800)' }}>
              <strong>Note:</strong> Fee includes tuition, activities, and examination charges. Transport and meal charges are additional. Sibling discount of 10% available.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 mx-auto"
            style={{
              background: 'linear-gradient(135deg, var(--pace-700), var(--pace-600))',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 6px 20px rgba(31, 61, 124, 0.3)',
            }}
          >
            <FaDownload className="w-5 h-5" />
            Download Fee Structure PDF
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
