'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity'


import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { getEvents } from '@/lib/sanity'

// Update the interface at the top:
interface Event {
  _id: string
  title: string
  description: string
  category: string
  date: string
  time: string
  location: string
  status: string
  image?: any  // Add this
}

const statusFilters = ['all', 'upcoming', 'past']

export default function EventsContent() {
  const [selectedStatus, setSelectedStatus] = useState('upcoming')
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true)
      try {
        const data = await getEvents(selectedStatus)
        setEvents(data)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
      setLoading(false)
    }
    fetchEvents()
  }, [selectedStatus])

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Cultural': 'var(--coral-500)',
      'Sports': 'var(--fresh-500)',
      'Academic': 'var(--pace-500)',
      'Meeting': 'var(--gold-500)',
      'Examination': 'var(--coral-600)',
      'Holiday': 'var(--fresh-600)',
    }
    return colors[category] || 'var(--neutral-500)'
  }

  return (
    <>
      {/* Status Filter */}
      <section className="py-6" style={{ backgroundColor: 'var(--neutral-50)', borderTop: '1px solid var(--neutral-200)' }}>
        <div className="container-custom">
          <div className="flex gap-3 justify-center">
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className="px-6 py-2.5 rounded-lg font-semibold text-sm capitalize transition-all"
                style={{
                  backgroundColor: selectedStatus === status ? 'var(--pace-700)' : 'white',
                  color: selectedStatus === status ? 'white' : 'var(--pace-700)',
                  border: `2px solid ${selectedStatus === status ? 'var(--pace-700)' : 'var(--neutral-300)'}`,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container-custom">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: 'var(--pace-700)' }}></div>
              <p className="mt-4" style={{ color: 'var(--neutral-600)' }}>Loading events...</p>
            </div>
          )}

          {!loading && (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStatus}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="max-w-4xl mx-auto space-y-4"
              >
                {events.map((event) => (
                  <motion.div
                    key={event._id}
                    variants={fadeInUp}
                    className="group p-6 rounded-2xl border-2 transition-all hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'white', 
                      borderColor: 'var(--neutral-200)',
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Date Badge */}
                      {/* Event Image or Date Badge */}
                      <div className="flex-shrink-0">
                        {event.image ? (
                          <div className="w-32 h-32 rounded-xl overflow-hidden">
                            <Image
                              src={urlFor(event.image).width(300).height(300).url()}
                              alt={event.title}
                              width={300}
                              height={300}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div 
                            className="w-20 h-20 rounded-xl flex flex-col items-center justify-center"
                            style={{ backgroundColor: getCategoryColor(event.category) }}
                          >
                            <div className="text-2xl font-bold text-white">
                              {new Date(event.date).getDate()}
                            </div>
                            <div className="text-xs text-white uppercase">
                              {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ 
                              backgroundColor: `${getCategoryColor(event.category)}20`,
                              color: getCategoryColor(event.category),
                            }}
                          >
                            {event.category}
                          </span>
                          {event.status === 'upcoming' && (
                            <span 
                              className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{ backgroundColor: 'var(--fresh-100)', color: 'var(--fresh-700)' }}
                            >
                              Upcoming
                            </span>
                          )}
                        </div>

                        <h3 
                          className="text-xl font-bold mb-2"
                          style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                        >
                          {event.title}
                        </h3>

                        <p className="text-sm mb-4" style={{ color: 'var(--neutral-700)' }}>
                          {event.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--neutral-600)' }}>
                          <div className="flex items-center gap-2">
                            <FaClock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {!loading && events.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaCalendarAlt className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--neutral-300)' }} />
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                No {selectedStatus} events found.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
