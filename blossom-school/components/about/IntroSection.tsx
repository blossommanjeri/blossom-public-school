'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'
import { getPageImages, urlFor } from '@/lib/sanity'

export default function IntroSection() {
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
      className="py-16 md:py-24"
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
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--pace-900)',
              }}
            >
              Kerala State Board Excellence
            </h2>

            <div className="space-y-4 text-base md:text-lg leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
              <p>
                <strong style={{ color: 'var(--pace-700)' }}>Established in 2003</strong>, Blossom Public School in Manjeri has been a beacon of quality education in the region for over 20 years. As a Kerala State Board affiliated institution, we take pride in nurturing students with academic excellence, moral integrity, and cultural awareness.
              </p>
              <p>
                Our dedicated faculty members are committed to providing a supportive learning environment where students develop critical thinking skills, creativity, and ethical values that prepare them for future challenges.
              </p>
              <p>
                At Blossom, we believe in a <strong style={{ color: 'var(--pace-700)' }}>holistic approach to education</strong> that balances academic rigor with co-curricular activities, ensuring the all-round development of each child.
              </p>
            </div>
          </motion.div>

          {/* Image Grid - FROM CMS */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Campus */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-xl relative"
              >
                {pageImages?.mainCampusImage ? (
                  <Image
                    src={urlFor(pageImages.mainCampusImage).width(800).url()}
                    alt="Main Campus"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-lg font-semibold" style={{ backgroundColor: 'var(--pace-100)', color: 'var(--pace-700)' }}>
                    Main Campus Building
                  </div>
                )}
              </motion.div>
              
              {/* Classroom */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="h-40 rounded-2xl overflow-hidden shadow-lg relative"
              >
                {pageImages?.classroomImage ? (
                  <Image
                    src={urlFor(pageImages.classroomImage).width(400).url()}
                    alt="Classroom"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-semibold text-center p-4" style={{ backgroundColor: 'var(--coral-100)', color: 'var(--coral-700)' }}>
                    Smart Classrooms
                  </div>
                )}
              </motion.div>
              
              {/* Activities */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="h-40 rounded-2xl overflow-hidden shadow-lg relative"
              >
                {pageImages?.activitiesImage ? (
                  <Image
                    src={urlFor(pageImages.activitiesImage).width(400).url()}
                    alt="Activities"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm font-semibold text-center p-4" style={{ backgroundColor: 'var(--gold-100)', color: 'var(--gold-700)' }}>
                    Student Activities
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
