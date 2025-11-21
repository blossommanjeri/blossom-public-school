'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/blossommanjeri',
    color: '#E4405F',
    gradient: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)',
    description: 'Follow our daily updates and school life',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    href: 'https://www.facebook.com/blossom.manjeri',
    color: '#1877F2',
    gradient: 'linear-gradient(135deg, #1877F2, #0C63D4)',
    description: 'Join our parent community',
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    href: 'https://api.whatsapp.com/send/?phone=919895277499&text&type=phone_number&app_absent=0',
    color: '#25D366',
    gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
    description: 'Quick inquiries and support',
  },
]

export default function SocialMediaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
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
            Connect With Us
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--neutral-700)' }}
          >
            Stay updated with school events, announcements, and connect with our community
          </p>
        </motion.div>

        {/* Social Media Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl p-8 border cursor-pointer"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--neutral-200)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Gradient Overlay on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: social.gradient,
                  opacity: 0.05,
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Animated Icon Container */}
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative"
                  style={{
                    background: social.gradient,
                    boxShadow: `0 8px 24px ${social.color}40`,
                  }}
                >
                  <social.icon className="w-10 h-10 text-white" />
                  
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ border: `2px solid ${social.color}` }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>

                {/* Social Name */}
                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--pace-900)',
                  }}
                >
                  {social.name}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--neutral-600)' }}
                >
                  {social.description}
                </p>

                {/* Follow Button */}
                <motion.div
                  className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: social.gradient,
                    color: 'white',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect Now
                </motion.div>
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
