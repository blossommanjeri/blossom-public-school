'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInUp } from '@/lib/animations'
import { FaPaperPlane } from 'react-icons/fa'

export default function EnquiryForm() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    address: '',
    previousSchool: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({
          studentName: '',
          dateOfBirth: '',
          parentName: '',
          email: '',
          phone: '',
          grade: '',
          address: '',
          previousSchool: '',
          message: '',
        })
        setTimeout(() => setSubmitStatus('idle'), 8000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
          >
            Submit Admission Enquiry
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Fill the form below and our admission team will get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 rounded-3xl" style={{ backgroundColor: 'white', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}>
            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                  style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                  placeholder="Enter student's full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                  style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                  Parent Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                  style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                  placeholder="Enter parent's name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                  style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                  style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                  Class/Grade Applying For *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                  style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                >
                  <option value="">Select Class/Grade</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                placeholder="Full address"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                Previous School (if any)
              </label>
              <input
                type="text"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                placeholder="Previous school name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500 resize-none"
                style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                placeholder="Any specific queries or requirements..."
              />
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl"
                style={{ backgroundColor: 'var(--fresh-50)', border: '1px solid var(--fresh-500)' }}
              >
                <p className="text-sm font-semibold" style={{ color: 'var(--fresh-700)' }}>
                  ✓ Thank you! Your enquiry has been submitted successfully. We'll contact you within 24 hours.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl"
                style={{ backgroundColor: 'var(--coral-50)', border: '1px solid var(--coral-500)' }}
              >
                <p className="text-sm font-semibold" style={{ color: 'var(--coral-700)' }}>
                  ✗ Failed to submit. Please try again or contact us directly.
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, var(--coral-500), var(--coral-600))',
                color: 'white',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 6px 20px rgba(244, 138, 138, 0.3)',
              }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Submitting...
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-5 h-5" />
                  Submit Enquiry
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
