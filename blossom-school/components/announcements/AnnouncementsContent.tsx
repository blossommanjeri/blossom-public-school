'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBullhorn } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { getAnnouncements } from '@/lib/sanity'

interface Announcement {
  _id: string
  title: string
  excerpt: string
  category: string
  urgent: boolean
  date: string
}

const categories = ['All', 'Admissions', 'Events', 'Examinations', 'Holiday', 'Meetings', 'General']

export default function AnnouncementsContent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchAnnouncements() {
      setLoading(true)
      try {
        const data = await getAnnouncements(selectedCategory)
        setAnnouncements(data)
      } catch (error) {
        console.error('Error fetching announcements:', error)
      }
      setLoading(false)
    }
    fetchAnnouncements()
  }, [selectedCategory])

  return (
    <>
      {/* Category Filter */}
      <section className="py-6" style={{ backgroundColor: 'var(--neutral-50)', borderTop: '1px solid var(--neutral-200)' }}>
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

      {/* Announcements Grid */}
      <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container-custom">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: 'var(--pace-700)' }}></div>
              <p className="mt-4" style={{ color: 'var(--neutral-600)' }}>Loading announcements...</p>
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
                className="max-w-4xl mx-auto space-y-4"
              >
                {announcements.map((item) => (
                  <motion.div
                    key={item._id}
                    variants={fadeInUp}
                    className="p-6 rounded-2xl border-2 transition-all hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'white', 
                      borderColor: item.urgent ? 'var(--coral-500)' : 'var(--neutral-200)',
                      borderLeftWidth: item.urgent ? '6px' : '2px',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: item.urgent ? 'var(--coral-100)' : 'var(--pace-100)' }}
                      >
                        <FaBullhorn 
                          className="w-6 h-6" 
                          style={{ color: item.urgent ? 'var(--coral-700)' : 'var(--pace-700)' }} 
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {item.urgent && (
                            <span 
                              className="px-2 py-1 rounded text-xs font-bold"
                              style={{ backgroundColor: 'var(--coral-500)', color: 'white' }}
                            >
                              URGENT
                            </span>
                          )}
                          <span 
                            className="px-2 py-1 rounded text-xs font-semibold"
                            style={{ backgroundColor: 'var(--pace-100)', color: 'var(--pace-700)' }}
                          >
                            {item.category}
                          </span>
                        </div>

                        <h3 
                          className="text-lg md:text-xl font-bold mb-2"
                          style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                        >
                          {item.title}
                        </h3>
                        
                        <p className="text-sm md:text-base mb-3" style={{ color: 'var(--neutral-700)' }}>
                          {item.excerpt}
                        </p>

                        <p className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                          {new Date(item.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {!loading && announcements.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                No announcements found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
