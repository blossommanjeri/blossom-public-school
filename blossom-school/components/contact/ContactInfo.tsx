'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function ContactInfo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 md:py-20 -mt-12 relative z-10" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Address */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border-2"
            style={{ backgroundColor: 'var(--pace-50)', borderColor: 'var(--pace-200)' }}
          >
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: 'var(--pace-700)' }}
            >
              <FaMapMarkerAlt className="w-7 h-7 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Our Location
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
              Blossom Public School<br />
              Cherani, Thrikkalangodu PO<br />
              Manjeri, Kerala - 676123
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border-2"
            style={{ backgroundColor: 'var(--fresh-50)', borderColor: 'var(--fresh-200)' }}
          >
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: 'var(--fresh-600)' }}
            >
              <FaPhone className="w-7 h-7 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Phone Number
            </h3>
            <a 
              href="tel:+919895277499"
              className="text-sm font-semibold hover:text-fresh-700 transition-colors"
              style={{ color: 'var(--neutral-700)' }}
            >
              +91 9895277499
            </a>
            <p className="text-xs mt-2" style={{ color: 'var(--neutral-600)' }}>
              Available 9 AM - 4 PM
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border-2"
            style={{ backgroundColor: 'var(--gold-50)', borderColor: 'var(--gold-200)' }}
          >
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: 'var(--gold-600)' }}
            >
              <FaEnvelope className="w-7 h-7 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Email Address
            </h3>
            <a 
              href="mailto:blossomschoolmji@gmail.com"
              className="text-sm font-semibold hover:text-gold-700 transition-colors break-all"
              style={{ color: 'var(--neutral-700)' }}
            >
              blossomschoolmji@gmail.com
            </a>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border-2"
            style={{ backgroundColor: 'var(--coral-50)', borderColor: 'var(--coral-200)' }}
          >
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: 'var(--coral-600)' }}
            >
              <FaClock className="w-7 h-7 text-white" />
            </div>
            <h3 
              className="text-xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Connect With Us
            </h3>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: 'https://www.facebook.com/blossom.manjeri', color: '#1877F2' },
                { icon: FaInstagram, href: 'https://www.instagram.com/blossommanjeri', color: '#E4405F' },
                { icon: FaWhatsapp, href: 'https://api.whatsapp.com/send/?phone=919895277499', color: '#25D366' },
              ].map((social) => (
                <motion.a
                  key={social.color}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: social.color }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
