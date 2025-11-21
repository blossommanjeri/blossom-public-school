'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { getFAQs } from '@/lib/sanity'

interface FAQ {
  _id: string
  question: string
  answer: string
  category: string
}

export default function AdmissionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchFAQs() {
      try {
        // Get only admission-related FAQs
        const data = await getFAQs('admissions')
        setFaqs(data)
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      }
      setLoading(false)
    }
    fetchFAQs()
  }, [])

  if (loading) {
    return (
      <section className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
        <div className="container-custom text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: 'var(--pace-700)' }}></div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaQuestionCircle className="w-8 h-8" style={{ color: 'var(--coral-500)' }} />
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Find answers to common questions about our admission process
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq._id}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden border-2 transition-all duration-300"
              style={{
                backgroundColor: openIndex === index ? 'var(--pace-50)' : 'white',
                borderColor: openIndex === index ? 'var(--pace-300)' : 'var(--neutral-200)',
              }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-all"
                whileHover={{ backgroundColor: 'var(--pace-50)' }}
              >
                <span 
                  className="font-bold text-base md:text-lg flex-1"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--pace-900)',
                  }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: openIndex === index ? 'var(--pace-700)' : 'var(--neutral-100)',
                    color: openIndex === index ? 'white' : 'var(--pace-700)',
                  }}
                >
                  <FaChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p 
                        className="text-base leading-relaxed"
                        style={{ color: 'var(--neutral-700)' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 p-8 rounded-3xl"
          style={{ backgroundColor: 'var(--neutral-50)' }}
        >
          <h3 
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
          >
            Still have questions?
          </h3>
          <p className="text-lg mb-6" style={{ color: 'var(--neutral-700)' }}>
            Our admission team is here to help you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+919895277499"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl font-semibold"
              style={{
                background: 'linear-gradient(135deg, var(--pace-700), var(--pace-600))',
                color: 'white',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Call: +91 9895277499
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send/?phone=919895277499&text=Hi!%20I%20have%20a%20question%20about%20admissions.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl font-semibold"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: 'white',
                fontFamily: 'var(--font-heading)',
              }}
            >
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
