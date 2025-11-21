'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-900)' }}
          >
            Contact Us
          </h1>
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'var(--neutral-600)' }}
          >
            Get in touch with us for admissions, inquiries, or any other questions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
