'use client'

import { motion } from 'framer-motion'
import { cardHover } from '@/lib/animations'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ 
  children, 
  className,
  hoverable = true,
  padding = 'md'
}: CardProps) {
  
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <motion.div
      variants={hoverable ? cardHover : undefined}
      initial="rest"
      whileHover={hoverable ? "hover" : undefined}
      className={clsx(
        'bg-white rounded-xl',
        hoverable && 'cursor-pointer',
        paddingStyles[padding],
        className
      )}
      style={{
        boxShadow: 'var(--shadow-card)',
        transition: 'box-shadow 0.3s ease'
      }}
    >
      {children}
    </motion.div>
  )
}
