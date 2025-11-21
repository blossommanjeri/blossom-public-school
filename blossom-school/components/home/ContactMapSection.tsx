'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'

export default function ContactMapSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 9895277499',
      href: 'tel:+919895277499',
      color: 'var(--coral-500)',
    },
    {
      icon: FiMail,
      title: 'Email',
      value: 'blossomschoolmji@gmail.com',
      href: 'mailto:blossomschoolmji@gmail.com',
      color: 'var(--gold-500)',
    },
    {
      icon: FiMapPin,
      title: 'Address',
      value: 'Cherani, Thrikkalangodu PO, Manjeri, Kerala - 676123',
      href: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.608755958802!2d76.1182644!3d11.142488499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6364f90a5058b%3A0x23e901132f5de7f2!2sBlossom%20Public%20School!5e0!3m2!1sen!2sin!4v1763217730816!5m2!1sen!2sin',
      color: 'var(--fresh-500)',
    }
    ,
    {
      icon: FiClock,
      title: 'Office Hours',
      value: 'Mon - Sat: 9:00 AM - 4:00 PM',
      href: null,
      color: 'var(--pace-600)',
    },
  ]

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container-custom">
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
            Visit Us
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--neutral-700)' }}
          >
            We'd love to meet you! Visit our campus or get in touch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {contactInfo.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--neutral-50)',
                      borderColor: 'var(--neutral-200)',
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-sm font-semibold mb-1"
                        style={{ 
                          color: 'var(--neutral-600)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-base font-semibold group-hover:text-pace-700 transition-colors"
                        style={{ 
                          color: 'var(--pace-900)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex items-start gap-4 p-6 rounded-2xl border"
                    style={{
                      backgroundColor: 'var(--neutral-50)',
                      borderColor: 'var(--neutral-200)',
                    }}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-sm font-semibold mb-1"
                        style={{ 
                          color: 'var(--neutral-600)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-base font-semibold"
                        style={{ 
                          color: 'var(--pace-900)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="https://api.whatsapp.com/send/?phone=919895277499&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-4 rounded-xl text-center font-semibold transition-all"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                }}
              >
                WhatsApp Us
              </motion.a>
              <motion.a
                href="tel:+919895277499"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-4 rounded-xl text-center font-semibold border-2 transition-all"
                style={{
                  borderColor: 'var(--pace-700)',
                  color: 'var(--pace-700)',
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: 'white',
                }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative rounded-2xl overflow-hidden border"
            style={{
              height: '500px',
              borderColor: 'var(--neutral-200)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            }}
          >
            {/* Replace with actual coordinates when available */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.608755958802!2d76.1182644!3d11.142488499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6364f90a5058b%3A0x23e901132f5de7f2!2sBlossom%20Public%20School!5e0!3m2!1sen!2sin!4v1763217730816!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blossom Public School Location"
            />
            
            {/* Map Overlay Badge */}
            <div 
              className="absolute top-4 left-4 px-4 py-2 rounded-xl backdrop-blur-xl border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(31, 61, 124, 0.2)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p 
                className="text-sm font-bold"
                style={{ 
                  color: 'var(--pace-700)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                📍 Blossom Public School
              </p>
              <p 
                className="text-xs"
                style={{ color: 'var(--neutral-600)' }}
              >
                Manjeri, Kerala
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
