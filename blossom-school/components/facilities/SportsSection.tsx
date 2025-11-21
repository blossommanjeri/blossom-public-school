'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaFutbol, FaVolleyballBall, FaRunning, FaTableTennis, FaChessBoard } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { GiKimono, GiHighKick } from 'react-icons/gi'

const sports = [
  { icon: FaFutbol, name: 'Football' },
  { icon: FaVolleyballBall, name: 'Volleyball' },
  { icon: GiHighKick, name: 'Kho-Kho' },
  { icon: FaRunning, name: 'Sepak Takraw' },
  { icon: GiKimono, name: 'Karate' },
  { icon: FaRunning, name: 'Athletics' },
]

export default function SportsSection() {
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
            Sports & Physical Education
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: 'var(--neutral-700)' }}>
            Comprehensive sports facilities to promote physical fitness and team spirit
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {sports.map((sport) => (
            <motion.div
              key={sport.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'white', border: '2px solid var(--neutral-200)' }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--coral-50)', color: 'var(--coral-600)' }}
              >
                <sport.icon className="w-8 h-8" />
              </div>
              <h3 
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
              >
                {sport.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 md:p-8 rounded-3xl"
          style={{ backgroundColor: 'white', border: '2px solid var(--neutral-200)' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--coral-100)', color: 'var(--coral-600)' }}>
              <FaRunning className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}>
                Dedicated Sports Ground & Courts
              </h3>
              <p style={{ color: 'var(--neutral-700)' }}>
                Full-size football field, basketball courts, volleyball court, and dedicated athletic track for comprehensive sports training.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
