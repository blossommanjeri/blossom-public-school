'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle } from 'react-icons/fa'
import { fadeInUp } from '@/lib/animations'

const milestones = [
  {
    year: '2003',
    title: 'School Established',
    description: 'Blossom Public School was founded with a vision to provide quality education in Manjeri.',
  },
  {
    year: '2005',
    title: 'Kerala State Board Affiliation',
    description: 'Received official affiliation from Kerala State Board, marking a significant milestone.',
  },
  {
    year: '2010',
    title: 'Campus Expansion',
    description: 'Expanded facilities to include modern science labs, computer labs, and sports infrastructure.',
  },
  {
    year: '2015',
    title: 'Smart Classroom Integration',
    description: 'Introduced digital learning with smart boards and interactive teaching methods.',
  },
  {
    year: '2020',
    title: 'Online Learning Platform',
    description: 'Successfully transitioned to hybrid learning model during challenging times.',
  },
  {
    year: '2023',
    title: '20 Years of Excellence',
    description: 'Celebrated two decades of nurturing future leaders with academic and co-curricular achievements.',
  },
]

export default function TimelineSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--pace-900)',
            }}
          >
            Our Journey
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto mb-6"
            style={{ color: 'var(--neutral-700)' }}
          >
            Key milestones in our 20+ years of educational excellence
          </p>
          <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--coral-500)' }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line - Hidden on Mobile */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ backgroundColor: 'var(--neutral-200)' }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="w-full md:w-5/12 p-6 rounded-2xl border"
                  style={{
                    backgroundColor: 'var(--neutral-50)',
                    borderColor: 'var(--neutral-200)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div 
                    className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
                    style={{
                      backgroundColor: 'var(--pace-700)',
                      color: 'white',
                    }}
                  >
                    {milestone.year}
                  </div>
                  <h3 
                    className="text-xl md:text-2xl font-bold mb-2"
                    style={{ 
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--pace-900)',
                    }}
                  >
                    {milestone.title}
                  </h3>
                  <p 
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: 'var(--neutral-700)' }}
                  >
                    {milestone.description}
                  </p>
                </motion.div>

                {/* Center Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.4 }}
                  className="hidden md:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0 z-10"
                  style={{
                    backgroundColor: 'var(--coral-500)',
                    boxShadow: '0 0 0 4px white, 0 0 0 6px var(--coral-500)',
                  }}
                >
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
