'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInUp } from '@/lib/animations'
import { FaMapMarkerAlt, FaDirections, FaBus, FaCar } from 'react-icons/fa'

export default function LocationMap() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="map" ref={ref} className="py-16 md:py-24" style={{ backgroundColor: 'white' }}>
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
            Find Us on Map
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Conveniently located in Cherani, easily accessible from all parts of Manjeri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="lg:col-span-2"
          >
            <div 
              className="relative rounded-3xl overflow-hidden border-4"
              style={{ 
                aspectRatio: '16/10',
                borderColor: 'var(--pace-100)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Google Maps Embed - Update with actual location coordinates */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.608755958802!2d76.1182644!3d11.142488499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6364f90a5058b%3A0x23e901132f5de7f2!2sBlossom%20Public%20School!5e0!3m2!1sen!2sin!4v1763217730816!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blossom Public School Location"
              />

              {/* Map Overlay Badge */}
              <div 
                className="absolute top-4 left-4 px-4 py-3 rounded-xl backdrop-blur-xl"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-5 h-5" style={{ color: 'var(--coral-600)' }} />
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--neutral-600)' }}>
                      We are here
                    </p>
                    <p className="font-bold" style={{ color: 'var(--pace-900)', fontFamily: 'var(--font-heading)' }}>
                      Blossom Public School
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <motion.a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.608755958802!2d76.1182644!3d11.142488499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6364f90a5058b%3A0x23e901132f5de7f2!2sBlossom%20Public%20School!5e0!3m2!1sen!2sin!4v1763217730816!5m2!1sen!2sin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 px-6 py-3 rounded-xl backdrop-blur-xl font-semibold flex items-center gap-2"
                style={{
                  backgroundColor: 'var(--pace-700)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(31, 61, 124, 0.3)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                <FaDirections className="w-5 h-5" />
                Get Directions
              </motion.a>
            </div>
          </motion.div>

          {/* Travel Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            {/* Address Card */}
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--pace-50)', border: '2px solid var(--pace-200)' }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--pace-700)' }}
                >
                  <FaMapMarkerAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                  >
                    Our Address
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
                    Blossom Public School<br />
                    Cherani, Thrikkalangodu PO<br />
                    Manjeri, Kerala - 676123<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* By Car */}
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--fresh-50)', border: '2px solid var(--fresh-200)' }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--fresh-600)' }}
                >
                  <FaCar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                  >
                    By Car
                  </h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--neutral-700)' }}>
                    5 minutes from Manjeri town center. Ample parking space available.
                  </p>
                  <p className="text-xs font-semibold" style={{ color: 'var(--fresh-700)' }}>
                    Free parking for visitors
                  </p>
                </div>
              </div>
            </div>

            {/* By Public Transport */}
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--gold-50)', border: '2px solid var(--gold-200)' }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--gold-600)' }}
                >
                  <FaBus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                  >
                    Public Transport
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--neutral-700)' }}>
                    Well-connected by local buses. Nearest stop: Cherani Junction (200m)
                  </p>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--coral-50)', border: '2px solid var(--coral-200)' }}
            >
              <h3 
                className="text-lg font-bold mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
              >
                Nearby Landmarks
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--neutral-700)' }}>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--coral-600)' }} />
                  Manjeri Municipality Office
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--coral-600)' }} />
                  Cherani Masjid
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--coral-600)' }} />
                  Thrikkalangodu Post Office
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
