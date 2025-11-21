'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { fadeInUp } from '@/lib/animations'

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, var(--pace-700) 0%, var(--pace-600) 50%, var(--pace-800) 100%)',
        }}
      />

      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--coral-500)' }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--gold-500)' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Heading */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Join Our Community?
          </h2>

          {/* Subtext */}
          <p 
            className="text-xl md:text-2xl mb-10 leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Enroll your child today and give them the foundation for lifelong success at Blossom Public School
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--coral-500), var(--coral-600))',
                  color: 'white',
                  boxShadow: '0 10px 40px rgba(244, 138, 138, 0.5)',
                  paddingLeft: '2.5rem',
                  paddingRight: '2.5rem',
                }}
              >
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  Enroll Now
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="backdrop-blur-xl border-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  paddingLeft: '2.5rem',
                  paddingRight: '2.5rem',
                }}
              >
                <span className="flex items-center gap-2 font-bold">
                  <FiPhone className="w-5 h-5" />
                  Contact Us
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/80"
          >
            Call us: <a href="tel:+919895277499" className="font-semibold hover:text-coral-300 transition-colors">+91 9895277499</a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
