'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInLeft, fadeInRight } from '@/lib/animations'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { getPageImages, urlFor } from '@/lib/sanity'

export default function AboutSection() {
  const [pageImages, setPageImages] = useState<any>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    async function loadImages() {
      try {
        const images = await getPageImages()
        setPageImages(images)
      } catch (error) {
        console.error('Error loading images:', error)
      }
    }
    loadImages()
  }, [])

  return (
    <section 
      ref={ref}
      className="py-20 md:py-32"
      style={{ backgroundColor: 'white' }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <div 
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: 'var(--pace-50)',
                  color: 'var(--pace-700)',
                }}
              >
                Part of Pace Education Group
              </div>
            </motion.div>

            <h2 
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--pace-900)',
              }}
            >
              Welcome to <br />
              <span style={{ color: 'var(--coral-500)' }}>
                Blossom Public School
              </span>
            </h2>

            <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
              <p>
                At Blossom Public School, Manjeri, part of the Pace Education Group, we believe in nurturing young minds in an environment where learning comes alive. Our commitment to excellence goes beyond textbooks, creating spaces where curiosity thrives and character develops.
              </p>
              <p>
                We provide every child with a strong foundation that balances academic rigor with joy and creativity, preparing them not just for exams, but for life's greatest challenges and opportunities.
              </p>
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 group"
                style={{
                  backgroundColor: 'var(--pace-700)',
                  color: 'white',
                }}
              >
                Learn More About Us
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Grid - FROM CMS */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Campus Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="col-span-2 rounded-2xl overflow-hidden shadow-xl relative"
                style={{ aspectRatio: '16/9' }}
              >
                {pageImages?.mainCampusImage ? (
                  <Image
                    src={urlFor(pageImages.mainCampusImage).width(800).url()}
                    alt="Main Campus"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                    style={{ background: 'linear-gradient(135deg, var(--pace-700), var(--pace-500))' }}
                  >
                    Main Campus
                  </div>
                )}
              </motion.div>

              {/* Classroom Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg relative"
                style={{ aspectRatio: '1/1' }}
              >
                {pageImages?.classroomImage ? (
                  <Image
                    src={urlFor(pageImages.classroomImage).width(400).url()}
                    alt="Classroom"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4"
                    style={{ background: 'linear-gradient(135deg, var(--coral-500), var(--coral-400))' }}
                  >
                    Classroom
                  </div>
                )}
              </motion.div>

              {/* Activities Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg relative"
                style={{ aspectRatio: '1/1' }}
              >
                {pageImages?.activitiesImage ? (
                  <Image
                    src={urlFor(pageImages.activitiesImage).width(400).url()}
                    alt="Activities"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4"
                    style={{ background: 'linear-gradient(135deg, var(--gold-500), var(--gold-400))' }}
                  >
                    Activities
                  </div>
                )}
              </motion.div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 -z-10"
              style={{ backgroundColor: 'var(--coral-500)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
