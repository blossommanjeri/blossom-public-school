'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaAward } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import Image from 'next/image'
import { getFaculty, urlFor } from '@/lib/sanity'

interface FacultyMember {
  _id: string
  name: string
  position: string
  qualification: string
  department: string
  experience: string
  specialization?: string
  image?: any
  email?: string
}

const departments = ['All', 'Administration', 'Science', 'Languages', 'Mathematics', 'Social Science', 'Primary', 'Arts', 'Sports']

export default function FacultyContent() {
  const [selectedDept, setSelectedDept] = useState('All')
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([])
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  useEffect(() => {
    async function fetchFaculty() {
      setLoading(true)
      try {
        const data = await getFaculty(selectedDept)
        setFacultyMembers(data)
      } catch (error) {
        console.error('Error fetching faculty:', error)
      }
      setLoading(false)
    }
    fetchFaculty()
  }, [selectedDept])

  return (
    <>
      {/* Department Filter */}
      <section className="py-6" style={{ backgroundColor: 'var(--neutral-50)', borderTop: '1px solid var(--neutral-200)' }}>
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className="px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all"
                style={{
                  backgroundColor: selectedDept === dept ? 'var(--pace-700)' : 'white',
                  color: selectedDept === dept ? 'white' : 'var(--pace-700)',
                  border: `1px solid ${selectedDept === dept ? 'var(--pace-700)' : 'var(--neutral-300)'}`,
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section ref={ref} className="py-12 md:py-16" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container-custom">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: 'var(--pace-700)' }}></div>
              <p className="mt-4" style={{ color: 'var(--neutral-600)' }}>Loading faculty...</p>
            </div>
          )}

          {!loading && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {facultyMembers.map((member) => (
                <motion.div
                  key={member._id}
                  variants={fadeInUp}
                  className="group rounded-xl overflow-hidden border transition-all hover:shadow-lg"
                  style={{ backgroundColor: 'white', borderColor: 'var(--neutral-200)' }}
                >
                  {/* Photo */}
                  <div 
                    className="relative aspect-square overflow-hidden"
                    style={{ backgroundColor: 'var(--neutral-200)' }}
                  >
                    {member.image ? (
                      <Image
                        src={urlFor(member.image).width(400).height(400).url()}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold"
                          style={{ backgroundColor: 'var(--pace-100)', color: 'var(--pace-700)' }}
                        >
                          {member.name.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <h3 
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                    >
                      {member.name}
                    </h3>
                    <p 
                      className="text-sm font-semibold mb-3"
                      style={{ color: 'var(--pace-600)' }}
                    >
                      {member.position}
                    </p>

                    <div className="space-y-2 text-sm" style={{ color: 'var(--neutral-700)' }}>
                      <div className="flex items-start gap-2">
                        <FaGraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--neutral-500)' }} />
                        <span>{member.qualification}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <FaAward className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--neutral-500)' }} />
                        <span>{member.experience}</span>
                      </div>
                    </div>

                    {member.specialization && (
                      <div 
                        className="mt-4 pt-4 border-t text-xs font-semibold"
                        style={{ borderColor: 'var(--neutral-200)', color: 'var(--neutral-600)' }}
                      >
                        {member.specialization}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {!loading && facultyMembers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-lg" style={{ color: 'var(--neutral-600)' }}>
                No faculty members found in this department.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'white' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: '50+', label: 'Qualified Teachers' },
              { number: '15+', label: 'Years Avg Experience' },
              { number: '100%', label: 'B.Ed. Certified' },
              { number: '25:1', label: 'Student-Teacher Ratio' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-xl"
                style={{ backgroundColor: 'var(--neutral-50)' }}
              >
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-700)' }}
                >
                  {stat.number}
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--neutral-700)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Join Our Team
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--neutral-700)' }}>
              We're always looking for passionate educators to join our team.
            </p>
            <a
              href="/careers"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
              style={{
                backgroundColor: 'var(--pace-700)',
                color: 'white',
                fontFamily: 'var(--font-heading)',
              }}
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
