'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChalkboardTeacher, FaBook, FaUsers, FaAward, FaLaptop, FaHeartbeat } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const reasons = [
  {
    icon: FaChalkboardTeacher,
    title: 'Experienced Faculty',
    description: 'Qualified and dedicated teachers committed to student success',
  },
  {
    icon: FaBook,
    title: 'Kerala State Board',
    description: 'Comprehensive curriculum aligned with state board standards',
  },
  {
    icon: FaUsers,
    title: 'Small Class Sizes',
    description: 'Personalized attention with optimal student-teacher ratio',
  },
  {
    icon: FaAward,
    title: 'Proven Track Record',
    description: '95% success rate with consistent academic achievements',
  },
  {
    icon: FaLaptop,
    title: 'Modern Infrastructure',
    description: 'Smart classrooms, labs, and digital learning resources',
  },
  {
    icon: FaHeartbeat,
    title: 'Holistic Development',
    description: 'Focus on academics, sports, arts, and character building',
  },
]

export default function WhyChooseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--neutral-50)' }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--pace-900)',
            }}
          >
            Why Choose Blossom?
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto mb-6"
            style={{ color: 'var(--neutral-700)' }}
          >
            Discover what makes us the preferred choice for quality education in Manjeri
          </p>
          <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--coral-500)' }}
          />
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-2xl border transition-all duration-300"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--neutral-200)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: 'var(--pace-50)',
                  color: 'var(--pace-700)',
                }}
              >
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 
                className="text-lg md:text-xl font-bold mb-2"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--pace-900)',
                }}
              >
                {reason.title}
              </h3>
              <p 
                className="text-sm md:text-base"
                style={{ color: 'var(--neutral-700)' }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p 
            className="text-lg mb-6"
            style={{ color: 'var(--neutral-700)' }}
          >
            Ready to join our community of learners?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button
                size="lg"
                style={{
                  background: 'linear-gradient(135deg, var(--coral-500), var(--coral-600))',
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Apply for Admission
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                style={{
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
