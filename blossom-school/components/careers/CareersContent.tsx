'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaGraduationCap, FaAward } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

// Dummy data - will be replaced with CMS
const jobOpenings = [
  {
    id: 1,
    title: 'Primary School Teacher',
    department: 'Primary Education',
    type: 'Full-time',
    location: 'Manjeri, Kerala',
    qualification: 'B.Ed., D.Ed.',
    experience: '2-5 Years',
    description: 'We are looking for an enthusiastic and dedicated primary school teacher to join our team. The ideal candidate should have a passion for nurturing young learners and creating an engaging classroom environment.',
    posted: '2025-10-15',
  },
  {
    id: 2,
    title: 'Mathematics Teacher',
    department: 'Secondary Education',
    type: 'Full-time',
    location: 'Manjeri, Kerala',
    qualification: 'M.Sc., B.Ed. in Mathematics',
    experience: '3-7 Years',
    description: 'Seeking an experienced mathematics teacher for classes 6-10 with strong conceptual clarity and the ability to simplify complex mathematical concepts for students.',
    posted: '2025-10-10',
  },
  {
    id: 3,
    title: 'Science Teacher (Biology)',
    department: 'Secondary Education',
    type: 'Full-time',
    location: 'Manjeri, Kerala',
    qualification: 'M.Sc., B.Ed. in Biology',
    experience: '2-5 Years',
    description: 'Looking for a passionate biology teacher to inspire scientific thinking among students. Should be capable of conducting practical sessions and fostering inquiry-based learning.',
    posted: '2025-10-08',
  },
]

export default function CareersContent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: 'white' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--fresh-100)' }}
              >
                <FaBriefcase className="w-6 h-6" style={{ color: 'var(--fresh-600)' }} />
              </div>
              <h1 
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-900)' }}
              >
                Careers
              </h1>
            </div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--neutral-600)' }}>
              Join our team of passionate educators and make a lasting impact on students' lives. We offer competitive compensation, professional development opportunities, and a supportive work environment.
            </p>
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--neutral-700)' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--fresh-600)' }} />
                <span className="font-medium">{jobOpenings.length} Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--pace-600)' }} />
                <span className="font-medium">Competitive Salary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--gold-600)' }} />
                <span className="font-medium">Growth Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="max-w-4xl space-y-6"
          >
            {jobOpenings.length > 0 ? (
              jobOpenings.map((job) => (
                <motion.article
                  key={job.id}
                  variants={fadeInUp}
                  className="group p-6 md:p-8 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: 'white', borderColor: 'var(--neutral-200)' }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h2 
                          className="text-xl md:text-2xl font-bold mb-3 group-hover:text-pace-700 transition-colors"
                          style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                        >
                          {job.title}
                        </h2>
                        <div className="flex flex-wrap gap-3 text-sm" style={{ color: 'var(--neutral-600)' }}>
                          <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <FaClock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--neutral-500)' }}>
                            Posted: {new Date(job.posted).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                      <span 
                        className="px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap self-start"
                        style={{ backgroundColor: 'var(--fresh-100)', color: 'var(--fresh-700)' }}
                      >
                        Now Hiring
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
                      {job.description}
                    </p>

                    {/* Requirements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--neutral-50)' }}>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaGraduationCap className="w-4 h-4" style={{ color: 'var(--pace-600)' }} />
                          <span className="font-semibold text-sm" style={{ color: 'var(--pace-900)' }}>
                            Qualification Required
                          </span>
                        </div>
                        <div className="text-sm" style={{ color: 'var(--neutral-700)' }}>{job.qualification}</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaAward className="w-4 h-4" style={{ color: 'var(--gold-600)' }} />
                          <span className="font-semibold text-sm" style={{ color: 'var(--pace-900)' }}>
                            Experience
                          </span>
                        </div>
                        <div className="text-sm" style={{ color: 'var(--neutral-700)' }}>{job.experience}</div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <motion.a
                      href={`mailto:blossomschoolmji@gmail.com?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to express my interest in the ${job.title} position.`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold transition-all"
                      style={{
                        backgroundColor: 'var(--pace-700)',
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      Apply for this Position
                    </motion.a>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div
                variants={fadeInUp}
                className="text-center py-20 px-6 rounded-2xl border-2"
                style={{ backgroundColor: 'white', borderColor: 'var(--neutral-200)' }}
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--neutral-100)' }}
                >
                  <FaBriefcase className="w-10 h-10" style={{ color: 'var(--neutral-400)' }} />
                </div>
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                >
                  No Current Openings
                </h3>
                <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--neutral-600)' }}>
                  We don't have any open positions right now, but we're always interested in hearing from talented educators. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <a
                  href="mailto:blossomschoolmji@gmail.com?subject=Career Inquiry - Future Opportunities"
                  className="inline-block px-8 py-3 rounded-lg font-semibold border-2 transition-all hover:bg-pace-50"
                  style={{
                    borderColor: 'var(--pace-700)',
                    color: 'var(--pace-700)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Send Your Resume
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
