'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function HeroSection() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ['#1F3D7C', '#F48A8A', '#f59e0b'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      size: {
        value: { min: 1, max: 5 },
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#1F3D7C',
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: 'out',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32 pb-32 md:pb-48">
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #1F3D7C 0%, #2a4a82 50%, #5079b8 100%)',
        }}
      />

      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-10"
          options={particlesConfig}
        />
      )}

      {/* Glassmorphic Overlay */}
      <div 
        className="absolute inset-0 z-20"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(244, 138, 138, 0.15), transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-30 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block"
          >
            <div 
              className="px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-xl border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-coral-500"></span>
                </span>
                Admissions Open 2026-27
              </span>
            </div>
          </motion.div>

          {/* Main Headline with Gradient Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-4"
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'white',
            }}
          >
            Where Education Meets
            <br />
            <span 
              className="inline-block mt-2"
              style={{
                background: 'linear-gradient(135deg, #F48A8A, #f59e0b, #F48A8A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite',
              }}
            >
              Excellence
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4"
            style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Nurturing future leaders through holistic education, modern facilities, and unwavering support at Blossom Public School, Manjeri
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4 px-4"
          >
            <Link href="/admissions" className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full">
                <Button
                  size="lg"
                  fullWidth
                  className="relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, var(--coral-500), var(--coral-600))',
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(244, 138, 138, 0.4)',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, var(--coral-400), var(--coral-500))' }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 font-bold">Enroll Today</span>
                </Button>
              </motion.div>
            </Link>

            <Link href="/facilities" className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full">
                <Button
                  size="lg"
                  fullWidth
                  className="backdrop-blur-xl border-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                  }}
                >
                  <span className="font-bold">Explore Facilities</span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Stats/Quick Info - IMPROVED WITH MORE SPACING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 pt-12 md:pt-16 max-w-6xl mx-auto px-4"
          >
            {[
              { number: '500+', label: 'Students' },
              { number: '50+', label: 'Faculty' },
              { number: '15+', label: 'Years' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border group hover:border-coral-400 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                }}
              >
                <motion.div 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                  style={{ 
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div 
                  className="text-xs sm:text-sm md:text-base font-semibold"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontFamily: 'var(--font-heading)',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }}
        >
          <span className="text-white text-sm font-medium">Scroll to explore</span>
          <div 
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
            style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--coral-500)' }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient Animation Keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}
