'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaChalkboardTeacher, FaUsers, FaProjectDiagram, FaLightbulb } from 'react-icons/fa'
import { fadeInLeft, fadeInRight } from '@/lib/animations'
import { getPageImages, urlFor } from '@/lib/sanity'

const methods = [
  {
    icon: FaChalkboardTeacher,
    title: 'Interactive Teaching',
    description: 'Smart boards, multimedia content, and engaging classroom activities',
  },
  {
    icon: FaUsers,
    title: 'Collaborative Learning',
    description: 'Group projects, peer learning, and team-based problem solving',
  },
  {
    icon: FaProjectDiagram,
    title: 'Project-Based Learning',
    description: 'Real-world applications and hands-on project work',
  },
  {
    icon: FaLightbulb,
    title: 'Critical Thinking',
    description: 'Focus on analytical skills, creativity, and independent thinking',
  },
]

export default function TeachingMethodology() {
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
    <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Modern Teaching Methods
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--neutral-700)' }}>
              Our teaching methodology combines traditional values with modern pedagogy, ensuring students develop both academic excellence and practical life skills.
            </p>
            <div className="space-y-4">
              {methods.map((method) => (
                <motion.div
                  key={method.title}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: 'var(--neutral-50)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--pace-100)', color: 'var(--pace-700)' }}
                  >
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 
                      className="font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                    >
                      {method.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                      {method.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Classroom Image from CMS */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 relative" style={{ borderColor: 'white' }}>
              {pageImages?.academicClassroomImage ? (
                <Image
                  src={urlFor(pageImages.academicClassroomImage).width(800).url()}
                  alt="Classroom"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: 'var(--pace-100)', color: 'var(--pace-700)' }}>
                  Classroom Image
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
