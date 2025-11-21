'use client'

import { useEffect, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

interface PageHeroProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  badge?: string
  children?: ReactNode
}

export default function PageHero({ title, subtitle, icon, badge, children }: PageHeroProps) {
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
        value: 60,
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
        value: 0.4,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      size: {
        value: { min: 1, max: 4 },
        random: true,
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
        speed: 0.8,
        direction: 'none',
        random: false,
        straight: false,
        outModes: 'out',
      },
    },
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
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
          id={`particles-${title}`}
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
      <div className="container-custom relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          {icon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-6 backdrop-blur-xl border-2"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              <div className="text-white" style={{ fontSize: '2rem' }}>
                {icon}
              </div>
            </motion.div>
          )}

          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block mb-6"
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
                {badge}
              </div>
            </motion.div>
          )}

          {/* Title */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ 
              fontFamily: 'var(--font-display)', 
              color: 'white',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p 
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 1px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Custom Children */}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
