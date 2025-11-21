'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaNewspaper } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import Image from 'next/image'
import Link from 'next/link'  // ADD THIS IMPORT
import { getNews, urlFor } from '@/lib/sanity'

interface NewsArticle {
  _id: string
  title: string
  slug?: { current: string }  // Make sure this is here
  excerpt: string
  category: string
  featuredImage?: any
  publishedAt: string
  author?: string
}

const categories = ['All', 'Achievements', 'Events', 'Updates', 'Awards']

export default function NewsContent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    async function fetchNews() {
      setLoading(true)
      try {
        const data = await getNews(selectedCategory)
        setNews(data)
      } catch (error) {
        console.error('Error fetching news:', error)
      }
      setLoading(false)
    }
    fetchNews()
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

      {/* News Grid */}
      <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container-custom">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: 'var(--pace-700)' }}></div>
              <p className="mt-4" style={{ color: 'var(--neutral-600)' }}>Loading news...</p>
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
              >
                {news.map((article) => (
                  <motion.div
                    key={article._id}
                    variants={fadeInUp}
                    className="group rounded-2xl overflow-hidden border-2 transition-all hover:shadow-lg hover:-translate-y-1"
                    style={{ backgroundColor: 'white', borderColor: 'var(--neutral-200)' }}
                  >
                    {/* Featured Image */}
                    <div 
                      className="relative aspect-video overflow-hidden"
                      style={{ backgroundColor: 'var(--neutral-200)' }}
                    >
                      {article.featuredImage ? (
                        <Image
                          src={urlFor(article.featuredImage).width(600).height(400).url()}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FaNewspaper className="w-16 h-16" style={{ color: 'var(--neutral-400)' }} />
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div 
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: 'var(--pace-700)', color: 'white' }}
                      >
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 
                        className="text-lg font-bold mb-2 line-clamp-2"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                      >
                        {article.title}
                      </h3>

                      <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--neutral-700)' }}>
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--neutral-200)' }}>
                        <span className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                          {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                        
                        {/* FIXED READ MORE BUTTON */}
                        <Link
                          href={`/news/${article.slug?.current || article._id}`}
                          className="text-xs font-semibold transition-colors hover:underline"
                          style={{ color: 'var(--pace-700)' }}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {!loading && news.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FaNewspaper className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--neutral-300)' }} />
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                No news articles found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
