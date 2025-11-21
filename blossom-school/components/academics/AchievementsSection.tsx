'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { fadeInUp } from '@/lib/animations'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { client, urlFor } from '@/lib/sanity'

interface Achievement {
  _id: string
  title: string
  description: string
  category: string
  date: string
  image?: any
}

const stats = [
  { number: '95%', label: 'Board Exam Success Rate' },
  { number: '100%', label: 'University Admissions' },
  { number: '50+', label: 'District Level Winners' },
  { number: '20+', label: 'State Level Recognition' },
]

export default function AchievementsSection() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    async function fetchAchievements() {
      try {
        // Get recent achievements (limit to 3 for display)
        const data = await client.fetch(
          `*[_type == "achievement"] | order(date desc)[0...3]`
        )
        setAchievements(data)
      } catch (error) {
        console.error('Error fetching achievements:', error)
      }
      setLoading(false)
    }
    fetchAchievements()
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
          >
            Academic Achievements
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--neutral-700)' }}>
            Consistent excellence in board exams and competitive platforms
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'var(--pace-50)' }}
            >
              <div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-700)' }}
              >
                {stat.number}
              </div>
              <div className="text-sm font-semibold" style={{ color: 'var(--neutral-700)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Achievements from CMS */}
        {!loading && achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h3 
              className="text-2xl font-bold mb-6 text-center"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Recent Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={achievement._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="group rounded-2xl overflow-hidden border-2 transition-all hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: 'white', borderColor: 'var(--neutral-200)' }}
                >
                  {/* Achievement Image */}
                  {achievement.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={urlFor(achievement.image).width(600).url()}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Achievement Details */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold capitalize"
                        style={{ backgroundColor: 'var(--gold-100)', color: 'var(--gold-700)' }}
                      >
                        {achievement.category}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--neutral-500)' }}>
                        {new Date(achievement.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <h4 
                      className="font-bold text-base mb-2 line-clamp-2"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                    >
                      {achievement.title}
                    </h4>
                    <p className="text-sm line-clamp-2" style={{ color: 'var(--neutral-600)' }}>
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/admissions">
            <Button
              size="lg"
              style={{
                background: 'linear-gradient(135deg, var(--coral-500), var(--coral-600))',
                color: 'white',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Enroll Your Child Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
