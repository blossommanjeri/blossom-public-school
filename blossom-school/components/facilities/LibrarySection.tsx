'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBook, FaNewspaper, FaBookReader, FaGlobe } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const libraryFeatures = [
  { icon: FaBook, title: '5,000+ Books', description: 'Diverse collection across subjects and genres' },
  { icon: FaNewspaper, title: 'Magazines & Journals', description: 'Latest periodicals and academic journals' },
  { icon: FaBookReader, title: 'Reading Space', description: 'Quiet, comfortable study areas' },
  { icon: FaGlobe, title: 'Digital Resources', description: 'E-books and online reference materials' },
]

export default function LibrarySection() {
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
            Well-Stocked Library
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            A treasure trove of knowledge to inspire curiosity and foster love for reading
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {libraryFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -6 }}
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'var(--gold-50)', border: '2px solid var(--gold-200)' }}
            >
              <div 
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--gold-100)', color: 'var(--gold-700)' }}
              >
                <feature.icon className="w-7 h-7" />
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
