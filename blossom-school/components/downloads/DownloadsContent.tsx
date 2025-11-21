'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaDownload, FaFileAlt, FaCalendarAlt, FaBell } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { getDownloads } from '@/lib/sanity'

interface Download {
  _id: string
  title: string
  description: string
  category: string
  file?: {
    asset?: {
      url: string
      originalFilename?: string
      extension?: string
      size?: number
    }
  }
  date: string
  fileSize?: string
  important?: boolean
}



const categories = ['All', 'Forms', 'Timetables', 'Circulars', 'Syllabuses', 'Results']

export default function DownloadsContent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [downloads, setDownloads] = useState<Download[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchDownloads() {
      setLoading(true)
      try {
        const data = await getDownloads(selectedCategory)
        setDownloads(data)
      } catch (error) {
        console.error('Error fetching downloads:', error)
      }
      setLoading(false)
    }
    fetchDownloads()
  }, [selectedCategory])

  const getIcon = (category: string) => {
    switch(category) {
      case 'Forms': return FaFileAlt
      case 'Timetables': return FaCalendarAlt
      case 'Circulars': return FaBell
      default: return FaFileAlt
    }
  }

  return (
    <>
      {/* Category Filter */}
      <section className="py-6" style={{ backgroundColor: 'var(--neutral-50)', borderBottom: '1px solid var(--neutral-200)' }}>
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all"
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--pace-700)' : 'white',
                  color: selectedCategory === category ? 'white' : 'var(--pace-700)',
                  border: `2px solid ${selectedCategory === category ? 'var(--pace-700)' : 'var(--neutral-300)'}`,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container-custom">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: 'var(--pace-700)' }}></div>
              <p className="mt-4" style={{ color: 'var(--neutral-600)' }}>Loading downloads...</p>
            </div>
          )}

          {!loading && (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-5xl mx-auto space-y-4"
              >
                {downloads.map((item, index) => {
                  const Icon = getIcon(item.category)
                  return (
                    <motion.div
                      key={item._id}
                      variants={fadeInUp}
                      custom={index}
                      className="group p-6 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-1"
                      style={{ backgroundColor: 'white', borderColor: 'var(--neutral-200)' }}
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        {/* Icon */}
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: 'var(--pace-100)' }}
                        >
                          <Icon className="w-7 h-7" style={{ color: 'var(--pace-700)' }} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 
                              className="text-lg font-bold"
                              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                            >
                              {item.important && '⭐ '}{item.title}
                            </h3>
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{ backgroundColor: 'var(--coral-100)', color: 'var(--coral-700)' }}
                            >
                              PDF
                            </span>
                          </div>
                          <p className="text-sm mb-2" style={{ color: 'var(--neutral-700)' }}>
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-4 text-xs" style={{ color: 'var(--neutral-600)' }}>
                            {item.fileSize && <span>Size: {item.fileSize}</span>}
                            {item.fileSize && <span>•</span>}
                            <span>Updated: {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        </div>

                        {/* Download Button */}
                        {/* Download Button - FIXED */}
                          <motion.a
                            href={item.file?.asset?.url || '#'}
                            download={item.title}
                            whileHover={{ scale: item.file?.asset?.url ? 1.05 : 1 }}
                            whileTap={{ scale: item.file?.asset?.url ? 0.95 : 1 }}
                            className="flex-shrink-0 px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
                            style={{
                              backgroundColor: item.file?.asset?.url ? 'var(--pace-700)' : 'var(--neutral-400)',
                              color: 'white',
                              fontFamily: 'var(--font-heading)',
                              cursor: item.file?.asset?.url ? 'pointer' : 'not-allowed',
                              opacity: item.file?.asset?.url ? 1 : 0.5,
                            }}
                            onClick={(e) => {
                              if (!item.file?.asset?.url) {
                                e.preventDefault()
                                alert('File not available. Please contact the school office.')
                              }
                            }}
                          >
                            <FaDownload className="w-4 h-4" />
                            {item.file?.asset?.url ? 'Download' : 'Unavailable'}
                          </motion.a>

                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          )}

          {!loading && downloads.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaFileAlt className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--neutral-300)' }} />
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                No downloads found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12" style={{ backgroundColor: 'white' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--pace-50)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}>
              Need Help?
            </h3>
            <p className="text-base mb-6" style={{ color: 'var(--neutral-700)' }}>
              If you're having trouble downloading any document or need assistance, please contact our office.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919895277499"
                className="px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:bg-white"
                style={{
                  borderColor: 'var(--pace-700)',
                  color: 'var(--pace-700)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Call: +91 9895277499
              </a>
              <a
                href="mailto:blossomschoolmji@gmail.com"
                className="px-6 py-3 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: 'var(--pace-700)',
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
