'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaFlask, FaLaptopCode } from 'react-icons/fa'
import { fadeInLeft, fadeInRight } from '@/lib/animations'
import { getPageImages, urlFor } from '@/lib/sanity'

const labs = [
  { 
    icon: FaFlask, 
    name: 'Science Lab', 
    equipment: 'Advanced apparatus, microscopes, specimens, and experimental tools for Physics, Chemistry, and Biology' 
  },
  { 
    icon: FaLaptopCode, 
    name: 'Computer Lab', 
    equipment: '40+ computers with latest software and high-speed internet connectivity' 
  },
]

export default function LabsSection() {
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
    <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Science Lab Image from CMS */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="order-2 lg:order-1"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 relative" style={{ borderColor: 'white' }}>
              {pageImages?.scienceLabImage ? (
                <Image
                  src={urlFor(pageImages.scienceLabImage).width(800).url()}
                  alt="Science Lab"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: 'var(--fresh-100)', color: 'var(--fresh-700)' }}>
                  Science Lab Image
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              State-of-the-Art Laboratories
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--neutral-700)' }}>
              Well-equipped labs for hands-on experiments and practical learning across all sciences.
            </p>
            <div className="space-y-4">
              {labs.map((lab) => (
                <motion.div
                  key={lab.name}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: 'white', border: '1px solid var(--neutral-200)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--fresh-100)', color: 'var(--fresh-700)' }}
                  >
                    <lab.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 
                      className="font-bold"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                    >
                      {lab.name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--neutral-600)' }}>
                      {lab.equipment}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
