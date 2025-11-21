'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiX, FiPhone } from 'react-icons/fi'
import { getAdmissionPopup, urlFor } from '@/lib/sanity'

interface PopupData {
  enabled: boolean
  title: string
  message: string
  buttonText: string
  buttonLink: string
  image?: any
  backgroundColor: string
  delaySeconds: number
  showOnce: boolean
}

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [popupData, setPopupData] = useState<PopupData | null>(null)

  useEffect(() => {
    async function loadPopup() {
      try {
        const data = await getAdmissionPopup()
        
        // If CMS data not available or disabled, use defaults
        if (!data || !data.enabled) return

        setPopupData(data)

        // Check if already shown
        if (data.showOnce && sessionStorage.getItem('admissionPopupSeen')) {
          return
        }

        // Show popup after delay
        const timer = setTimeout(() => {
          setIsOpen(true)
          if (data.showOnce) {
            sessionStorage.setItem('admissionPopupSeen', 'true')
          }
        }, (data.delaySeconds || 3) * 1000)

        return () => clearTimeout(timer)
      } catch (error) {
        console.error('Error loading popup:', error)
      }
    }

    loadPopup()
  }, [])

  const closePopup = () => setIsOpen(false)

  if (!popupData) return null

  const getBackgroundColor = () => {
    const colors: { [key: string]: string } = {
      pace: 'var(--pace-700)',
      coral: 'var(--coral-500)',
      fresh: 'var(--fresh-500)',
      gold: 'var(--gold-500)',
    }
    return colors[popupData.backgroundColor] || 'var(--pace-700)'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: 'white' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                <FiX className="w-5 h-5" style={{ color: getBackgroundColor() }} />
              </button>

              {/* Image from CMS (if provided) */}
              {popupData.image && (
                <div className="relative aspect-video">
                  <Image
                    src={urlFor(popupData.image).width(600).url()}
                    alt={popupData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8 text-center">
                {/* Badge */}
                <div 
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4"
                  style={{ backgroundColor: 'var(--fresh-100)', color: 'var(--fresh-700)' }}
                >
                  Part of Pace Education Group
                </div>

                {/* Title from CMS */}
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--pace-900)' }}
                >
                  {popupData.title}
                </h2>
                
                {/* Message from CMS */}
                <p className="text-base mb-6" style={{ color: 'var(--neutral-700)' }}>
                  {popupData.message}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 text-sm text-left" style={{ color: 'var(--neutral-700)' }}>
                  {[
                    'Kerala State Board Curriculum(English Medium)',
                    'Experienced Faculty',
                    'Modern Facilities',
                    'Classes: LKG to 10th Standard',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: getBackgroundColor() }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Contact */}
                <div className="flex items-center justify-center gap-2 mb-6 text-sm font-semibold flex-wrap" style={{ color: getBackgroundColor() }}>
                  <FiPhone className="w-4 h-4" />
                  <a href="tel:9745013826" className="hover:underline">9745013826</a>
                  <span>|</span>
                  <a href="tel:9485137524" className="hover:underline">9485137524</a>
                  <span>|</span>
                  <a href="tel:9895277499" className="hover:underline">9895277499</a>
                </div>

                {/* CTA Button from CMS */}
                <Link
                  href={popupData.buttonLink}
                  onClick={closePopup}
                  className="block w-full py-3 rounded-lg font-bold text-base transition-all hover:scale-105"
                  style={{
                    backgroundColor: getBackgroundColor(),
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {popupData.buttonText}
                </Link>

                {/* Location */}
                <p className="mt-4 text-xs" style={{ color: 'var(--neutral-600)' }}>
                  📍 Cherani, Manjeri, Kerala
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
