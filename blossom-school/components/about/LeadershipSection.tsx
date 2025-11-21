'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaUsers } from 'react-icons/fa'
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'
import Image from 'next/image'
import { getLeadership, urlFor } from '@/lib/sanity'

interface LeadershipMember {
  _id: string
  name: string
  role: string
  title: string
  message: string
  quote?: string
  image?: any
  email?: string
}

export default function LeadershipSection() {
  const [leadership, setLeadership] = useState<LeadershipMember[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    async function fetchLeadership() {
      try {
        const data = await getLeadership()
        setLeadership(data)
      } catch (error) {
        console.error('Error fetching leadership:', error)
      }
      setLoading(false)
    }
    fetchLeadership()
  }, [])

  // Only Principal and Manager are from CMS
  const principal = leadership.find(member => member.role === 'principal')
  const manager = leadership.find(member => member.role === 'manager')

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        {/* Header */}
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
            Leadership
          </h2>
          <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--coral-500)' }}
          />
        </motion.div>

        {/* STATIC FOUNDER SECTION - P. A. Ibrahim Haji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-6 md:p-8 rounded-2xl border-2"
            style={{
              backgroundColor: 'var(--neutral-50)',
              borderColor: 'var(--pace-200)',
            }}
          >
            {/* Founder Photo Placeholder */}
            <div className="md:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg border-4 mx-auto max-w-[200px]"
                style={{
                  backgroundColor: 'var(--pace-100)',
                  borderColor: 'white',
                }}
              >
                <img
                  src="/images/founder-pa-ibrahim-haji.png"
                  alt="P. A. Ibrahim Haji"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>


            {/* Founder Message */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--pace-400)' }} />
                <div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}>
                    Founder's Vision
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: 'var(--neutral-700)' }}>
                    Education is not just about academic excellence; it's about nurturing young minds to become responsible citizens 
                    who contribute positively to society. At Blossom Public School, we are committed to providing a holistic learning 
                    environment that fosters creativity, critical thinking, and moral values. Our vision is to empower every student 
                    to discover their true potential and become leaders of tomorrow.
                  </p>
                  <div className="pt-3 border-t" style={{ borderColor: 'var(--neutral-300)' }}>
                    <p className="font-bold text-base md:text-lg" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                      P. A. Ibrahim Haji
                    </p>
                    <p className="text-xs md:text-sm" style={{ color: 'var(--neutral-600)' }}>
                      Founder & Chairman, Pace Education Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* STATIC PACE GROUP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mb-12 p-6 md:p-8 rounded-2xl border-2"
          style={{
            backgroundColor: 'var(--pace-50)',
            borderColor: 'var(--pace-200)',
          }}
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div 
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center flex-shrink-0 p-3"
              style={{ backgroundColor: 'white', border: '2px solid var(--pace-300)' }}
            >
              <FaUsers className="w-12 h-12" style={{ color: 'var(--pace-700)' }} />
            </div>

            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}>
                About Pace Education Group
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: 'var(--neutral-700)' }}>
                Founded by visionary educationist <strong>P. A. Ibrahim Haji</strong>, Pace Education Group has been a beacon of quality education in Kerala for over two decades. With a network of premier educational institutions across the state, Pace Group is committed to providing holistic education that nurtures academic excellence, character development, and social responsibility.
              </p>
              <div className="flex flex-wrap gap-4 text-xs md:text-sm" style={{ color: 'var(--neutral-600)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--pace-600)' }} />
                  <span><strong>20+ Years</strong> of Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--coral-600)' }} />
                  <span><strong>Multiple Schools</strong> across Kerala</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--fresh-600)' }} />
                  <span><strong>10,000+</strong> Students Educated</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DYNAMIC PRINCIPAL & MANAGER FROM CMS */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Principal - FROM CMS */}
          {loading ? (
            <div className="p-6 rounded-2xl border flex items-center justify-center" style={{ backgroundColor: 'var(--neutral-50)', borderColor: 'var(--neutral-200)', minHeight: '300px' }}>
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 mb-2" style={{ borderColor: 'var(--pace-700)' }}></div>
                <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>Loading...</p>
              </div>
            </div>
          ) : principal ? (
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: 'var(--neutral-50)',
                borderColor: 'var(--neutral-200)',
              }}
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3" style={{ backgroundColor: 'var(--pace-100)' }}>
                  {principal.image ? (
                    <Image
                      src={urlFor(principal.image).width(200).height(200).url()}
                      alt={principal.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold" style={{ color: 'var(--pace-700)' }}>
                      {principal.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}>
                  {principal.name}
                </h3>
                <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                  {principal.title}
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
                {principal.message}
              </p>
            </motion.div>
          ) : (
            <div className="p-6 rounded-2xl border text-center" style={{ backgroundColor: 'var(--neutral-50)', borderColor: 'var(--neutral-200)' }}>
              <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                Add Principal information in Sanity Studio
              </p>
            </div>
          )}

          {/* Manager - FROM CMS */}
          {loading ? (
            <div className="p-6 rounded-2xl border flex items-center justify-center" style={{ backgroundColor: 'var(--neutral-50)', borderColor: 'var(--neutral-200)', minHeight: '300px' }}>
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 mb-2" style={{ borderColor: 'var(--pace-700)' }}></div>
                <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>Loading...</p>
              </div>
            </div>
          ) : manager ? (
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: 'var(--neutral-50)',
                borderColor: 'var(--neutral-200)',
              }}
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3" style={{ backgroundColor: 'var(--coral-100)' }}>
                  {manager.image ? (
                    <Image
                      src={urlFor(manager.image).width(200).height(200).url()}
                      alt={manager.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold" style={{ color: 'var(--coral-700)' }}>
                      {manager.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}>
                  {manager.name}
                </h3>
                <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                  {manager.title}
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
                {manager.message}
              </p>
            </motion.div>
          ) : (
            <div className="p-6 rounded-2xl border text-center" style={{ backgroundColor: 'var(--neutral-50)', borderColor: 'var(--neutral-200)' }}>
              <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                Add Manager information in Sanity Studio
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
