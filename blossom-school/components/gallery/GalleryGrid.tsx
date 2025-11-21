'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import Image from 'next/image'
import { getGallery, urlFor } from '@/lib/sanity'

interface GalleryItem {
  _id: string
  title: string
  image: any
  category: string
  date: string
  description?: string
}

const categories = ['all', 'events', 'classrooms', 'sports', 'labs', 'cultural', 'facilities']

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true)
      try {
        const data = await getGallery(selectedCategory)
        setGalleryItems(data)
      } catch (error) {
        console.error('Error fetching gallery:', error)
      }
      setLoading(false)
    }
    fetchGallery()
  }, [selectedCategory])

  const lightboxSlides = galleryItems.map(item => ({
    src: urlFor(item.image).width(1920).url(),
    title: item.title,
  }))

  return (
    <section ref={ref} className="py-16 md:py-20 -mt-12 relative z-10" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className="relative px-6 py-3 rounded-full font-semibold transition-all text-sm md:text-base overflow-hidden group capitalize"
              style={{
                backgroundColor: selectedCategory === category ? 'var(--pace-700)' : 'white',
                color: selectedCategory === category ? 'white' : 'var(--pace-700)',
                fontFamily: 'var(--font-heading)',
                border: `2px solid ${selectedCategory === category ? 'var(--pace-700)' : 'var(--neutral-200)'}`,
                boxShadow: selectedCategory === category ? '0 4px 12px rgba(31, 61, 124, 0.2)' : 'none',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-coral-500 to-gold-500 opacity-0 group-hover:opacity-10 transition-opacity"
              />
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: 'var(--pace-700)' }}></div>
            <p className="mt-4" style={{ color: 'var(--neutral-600)' }}>Loading gallery...</p>
          </div>
        )}

        {/* Dynamic Masonry Grid - Respects Original Aspect Ratios */}
        {!loading && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
          >
            <AnimatePresence mode="wait">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  variants={fadeInUp}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    setPhotoIndex(index)
                    setLightboxOpen(true)
                  }}
                  className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer mb-4 md:mb-6"
                  style={{ backgroundColor: 'var(--neutral-100)' }}
                >
                  {/* Image with Original Aspect Ratio */}
                  <div className="relative w-full">
                    <Image
                      src={urlFor(item.image).width(800).url()}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      style={{ display: 'block' }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <motion.div 
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 capitalize"
                          style={{ 
                            backgroundColor: 'var(--coral-500)',
                            color: 'white',
                          }}
                        >
                          {item.category}
                        </motion.div>
                        <h3 
                          className="text-white font-bold text-sm md:text-lg line-clamp-2"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-white text-xs md:text-sm opacity-90 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Zoom Icon */}
                    <motion.div 
                      className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                      whileHover={{ scale: 1.15, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--pace-700)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </motion.div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && galleryItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--neutral-100)' }}>
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--neutral-400)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xl font-semibold mb-2" style={{ color: 'var(--neutral-700)', fontFamily: 'var(--font-heading)' }}>
              No photos found
            </p>
            <p className="text-sm" style={{ color: 'var(--neutral-500)' }}>
              Try selecting a different category or add images in Sanity Studio
            </p>
          </motion.div>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={lightboxSlides}
          plugins={[Zoom]}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' } }}
          animation={{ fade: 300, swipe: 500 }}
          carousel={{ finite: false }}
        />
      )}
    </section>
  )
}
