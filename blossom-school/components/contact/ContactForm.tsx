'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInUp } from '@/lib/animations'
import { FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
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
            Send Us a Message
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto"
        >
          <form 
            onSubmit={handleSubmit} 
            className="p-8 md:p-12 rounded-3xl"
            style={{ backgroundColor: 'white', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)' }}
          >
            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                  style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                  placeholder="Enter your full name"
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
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500"
                  style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                >
                  <option value="">Select Subject</option>
                  <option value="Admission Inquiry">Admission Inquiry</option>
                  <option value="General Query">General Query</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Career Opportunity">Career Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:border-pace-500 resize-none"
                style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}
                placeholder="Type your message here..."
              />
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl"
                style={{ backgroundColor: 'var(--fresh-50)', border: '1px solid var(--fresh-500)' }}
              >
                <p className="text-sm font-semibold" style={{ color: 'var(--fresh-700)' }}>
                  ✓ Thank you for contacting us! We'll get back to you soon.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl"
                style={{ backgroundColor: 'var(--coral-50)', border: '1px solid var(--coral-500)' }}
              >
                <p className="text-sm font-semibold" style={{ color: 'var(--coral-700)' }}>
                  ✗ Failed to send message. Please try again or call us directly.
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
                background: 'linear-gradient(135deg, var(--pace-700), var(--pace-600))',
                color: 'white',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 6px 20px rgba(31, 61, 124, 0.3)',
              }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
