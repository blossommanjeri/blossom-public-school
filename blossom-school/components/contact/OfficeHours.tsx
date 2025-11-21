'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaClock, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const schedule = [
  { day: 'Monday - Friday', hours: '9:00 AM - 4:00 PM', status: 'Open', color: 'var(--fresh-600)' },
  { day: 'Saturday', hours: '9:00 AM - 1:00 PM', status: 'Open', color: 'var(--fresh-600)' },
  { day: 'Sunday', hours: 'Closed', status: 'Closed', color: 'var(--neutral-400)' },
]

export default function OfficeHours() {
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
            Office Hours
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Plan your visit during our office hours for admissions and general inquiries
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {schedule.map((item, idx) => (
              <motion.div
                key={item.day}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl border-2 text-center"
                style={{
                  backgroundColor: 'white',
                  borderColor: idx === 2 ? 'var(--neutral-200)' : 'var(--pace-200)',
                }}
              >
                <div 
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: item.color + '20', color: item.color }}
                >
                  <FaCalendarAlt className="w-7 h-7" />
                </div>
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                >
                  {item.day}
                </h3>
                <p 
                  className="text-2xl font-bold mb-1"
                  style={{ color: item.color, fontFamily: 'var(--font-display)' }}
                >
                  {item.hours}
                </p>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: item.color + '20',
                    color: item.color,
                  }}
                >
                  {item.status}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* School Hours */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: 'white', border: '2px solid var(--pace-200)' }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--pace-100)', color: 'var(--pace-700)' }}
                >
                  <FaClock className="w-7 h-7" />
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                  >
                    School Timings
                  </h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--neutral-700)' }}>
                    Classes: 9:00 AM - 4:00 PM<br />
                    Morning Assembly: 09:00 AM<br />
                    Lunch Break: 1:00 PM 2:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: 'white', border: '2px solid var(--coral-200)' }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--coral-100)', color: 'var(--coral-700)' }}
                >
                  <FaPhoneAlt className="w-7 h-7" />
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                  >
                    Emergency Contact
                  </h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--neutral-700)' }}>
                    Available 24/7 for urgent matters
                  </p>
                  <a 
                    href="tel:+919895277499"
                    className="text-lg font-bold hover:text-coral-700 transition-colors"
                    style={{ color: 'var(--coral-600)' }}
                  >
                    +91 9895277499
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center p-8 rounded-3xl"
            style={{ 
              background: 'linear-gradient(135deg, var(--pace-700), var(--coral-600))',
              color: 'white',
            }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Visit?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Schedule a campus tour and meet our team
            </p>
            <motion.a
              href="https://api.whatsapp.com/send/?phone=919895277499&text=Hi!%20I%20would%20like%20to%20schedule%20a%20campus%20visit.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 rounded-xl font-bold text-lg"
              style={{
                backgroundColor: 'white',
                color: 'var(--pace-700)',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              }}
            >
              Schedule a Visit via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
