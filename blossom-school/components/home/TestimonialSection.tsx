'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { fadeInUp } from '@/lib/animations'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { client, urlFor } from '@/lib/sanity'

interface Testimonial {
  _id: string
  name: string
  role: string
  content: string
  rating: number
  photo?: any
  featured?: boolean
}

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        // Fetch testimonials, prioritize featured ones
        const data = await client.fetch(
          `*[_type == "testimonial"] | order(featured desc, date desc)`
        )
        setTestimonials(data)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
      setLoading(false)
    }
    fetchTestimonials()
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      const next = prev + newDirection
      if (next < 0) return testimonials.length - 1
      if (next >= testimonials.length) return 0
      return next
    })
  }

  if (loading || testimonials.length === 0) {
    return (
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container-custom text-center">
          {loading ? (
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: 'var(--pace-700)' }}></div>
          ) : (
            <p style={{ color: 'var(--neutral-600)' }}>No testimonials available</p>
          )}
        </div>
      </section>
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ backgroundColor: 'var(--neutral-50)' }}
    >
      <div className="container-custom relative z-10">
        {/* Section Title */}
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
            What Our Community Says
          </h2>
          <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--coral-500)' }}
          />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="relative overflow-hidden rounded-3xl p-8 md:p-12 backdrop-blur-xl border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(31, 61, 124, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <FaQuoteLeft className="w-16 h-16" style={{ color: 'var(--pace-700)' }} />
              </div>

              {/* Quote Text */}
              <div className="relative z-10">
                <p 
                  className="text-lg md:text-xl leading-relaxed mb-6 italic"
                  style={{ 
                    color: 'var(--neutral-800)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  "{currentTestimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    {/* Photo from CMS or Initial */}
                    {currentTestimonial.photo ? (
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={urlFor(currentTestimonial.photo).width(100).height(100).url()}
                          alt={currentTestimonial.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold"
                        style={{
                          background: 'linear-gradient(135deg, var(--coral-500), var(--gold-500))',
                          color: 'white',
                          boxShadow: '0 4px 15px rgba(244, 138, 138, 0.4)',
                        }}
                      >
                        {currentTestimonial.name.charAt(0)}
                      </div>
                    )}
                    
                    <div>
                      <div 
                        className="font-bold text-base md:text-lg"
                        style={{ 
                          color: 'var(--pace-900)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {currentTestimonial.name}
                      </div>
                      <div 
                        className="text-sm"
                        style={{ color: 'var(--neutral-600)' }}
                      >
                        {currentTestimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: 'var(--gold-500)' }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={() => paginate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  color: 'var(--pace-700)',
                }}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => paginate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  color: 'var(--pace-700)',
                }}
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1)
                      setCurrentIndex(idx)
                    }}
                    className="w-2.5 h-2.5 rounded-full transition-all"
                    style={{
                      backgroundColor: idx === currentIndex ? 'var(--coral-500)' : 'var(--neutral-300)',
                      width: idx === currentIndex ? '2rem' : '0.625rem',
                    }}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
