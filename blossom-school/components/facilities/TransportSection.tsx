'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBus, FaShieldAlt, FaMapMarkedAlt, FaUserShield, FaVideo, FaMapMarkerAlt } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const transportFeatures = [
  { icon: FaBus, title: 'Modern Fleet', description: 'Well-maintained, GPS-enabled buses' },
  { icon: FaShieldAlt, title: 'Safety First', description: 'Trained drivers and support staff' },
  { icon: FaVideo, title: 'CCTV Surveillance', description: 'All buses equipped with CCTV cameras' },
  { icon: FaMapMarkedAlt, title: 'Wide Coverage', description: 'Routes across Manjeri and surrounding areas' },
  { icon: FaUserShield, title: 'Attendant Support', description: 'Female attendants for student safety' },
]

const busRoutes = [
  { name: 'Kavanoor', distance: '11.9 km', time: '18 mins' },
  { name: 'Pulppatta', distance: '10.8 km', time: '19 mins' },
  { name: 'Narukara', distance: '7.7 km', time: '18 mins' },
  { name: 'Anakkottuppuram', distance: '4.6 km', time: '12 mins' },
  { name: 'Pathiriyal', distance: '8.2 km', time: '14 mins' },
  { name: 'Pookotur', distance: '13.9 km', time: '29 mins' },
  { name: 'Edavanna', distance: '10.9 km', time: '19 mins' },
  { name: 'Nellikuthu', distance: '11.7 km', time: '25 mins' },
  { name: 'Kovilakam kund', distance: '4.9 km', time: '15 mins' },
  { name: 'Amayur', distance: '6.5 km', time: '15 mins' },     // Updated to local Manjeri Amayur
  { name: 'Aindoor', distance: '5.9 km', time: '11 mins' },    // Updated to local Manjeri Aindoor
  { name: 'Irumbuzhi', distance: '10 km', time: '25 mins' },
  { name: 'Marathani', distance: '1.7 km', time: '4 mins' },   // Corrected significantly
]

export default function TransportSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
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
            Safe & Reliable Transport
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--neutral-700)' }}>
            Ensuring safe and comfortable commute for all students
          </p>
        </motion.div>

        {/* Transport Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {transportFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl border-2 text-center"
              style={{ backgroundColor: 'white', borderColor: 'var(--neutral-200)' }}
            >
              <div 
                className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--pace-100)', color: 'var(--pace-700)' }}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 
                className="text-base font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bus Routes Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
            >
              Our Bus Routes
            </h3>
            <p className="text-base" style={{ color: 'var(--neutral-700)' }}>
              We cover 13+ locations across Manjeri and surrounding areas
            </p>
          </div>

          {/* 3D Route Map Container */}
          <div 
            className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, var(--pace-50) 0%, var(--fresh-50) 100%)',
              border: '2px solid var(--neutral-200)',
            }}
          >
            {/* Central School Point */}
            <div className="relative">
              {/* School Center */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring' }}
                className="relative z-20 mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-8"
                style={{
                  background: 'linear-gradient(135deg, var(--pace-700), var(--pace-600))',
                  boxShadow: '0 10px 40px rgba(31, 61, 124, 0.3)',
                }}
              >
                <div className="text-center">
                  <FaBus className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-1" />
                  <div className="text-xs md:text-sm font-bold text-white">Blossom School</div>
                </div>
              </motion.div>

              {/* Routes Grid with 3D Effect */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {busRoutes.map((route, idx) => (
                  <motion.div
                    key={route.name}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ delay: 0.6 + idx * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    }}
                    className="relative p-4 rounded-xl cursor-pointer group"
                    style={{
                      background: 'white',
                      border: '2px solid var(--neutral-200)',
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                    }}
                  >
                    {/* Connection Line to Center */}
                    <div 
                      className="absolute -top-4 left-1/2 w-0.5 h-4 -translate-x-1/2"
                      style={{ backgroundColor: 'var(--pace-300)' }}
                    />

                    {/* Route Marker */}
                    <div 
                      className="w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ 
                        backgroundColor: 'var(--coral-100)',
                        border: '2px solid var(--coral-500)',
                      }}
                    >
                      <FaMapMarkerAlt className="w-4 h-4" style={{ color: 'var(--coral-600)' }} />
                    </div>

                    {/* Route Info */}
                    <h4 
                      className="text-sm font-bold mb-1 text-center"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
                    >
                      {route.name}
                    </h4>
                    <div className="flex items-center justify-center gap-2 text-xs" style={{ color: 'var(--neutral-600)' }}>
                      <span>{route.distance}</span>
                      <span>•</span>
                      <span>{route.time}</span>
                    </div>

                    {/* Hover Effect Badge */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(31, 61, 124, 0.95), rgba(31, 61, 124, 0.9))',
                      }}
                    >
                      <div className="text-center">
                        <div className="text-xs font-bold text-white mb-1">Available</div>
                        <FaBus className="w-6 h-6 text-white mx-auto" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10" style={{ backgroundColor: 'var(--pace-600)' }} />
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: 'var(--coral-600)' }} />
          </div>

          {/* Route Info Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-8 text-center p-6 rounded-2xl"
            style={{ backgroundColor: 'white', border: '1px solid var(--neutral-200)' }}
          >
            <p className="text-sm" style={{ color: 'var(--neutral-700)' }}>
              <strong style={{ color: 'var(--pace-700)' }}>Note:</strong> All buses are equipped with GPS tracking, CCTV cameras, and first aid kits. 
              For route timings and pickup points, please contact the school office.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
