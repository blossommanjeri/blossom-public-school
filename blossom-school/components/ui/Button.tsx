'use client'

import { motion } from 'framer-motion'
import { buttonHover } from '@/lib/animations'
import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  fullWidth?: boolean
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children,
  fullWidth = false,
  disabled = false,
  ...props 
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const variantStyles = {
    primary: 'text-white focus-visible:outline-pace-500',
    secondary: 'border-2 focus-visible:outline-pace-500',
    ghost: 'focus-visible:outline-pace-500',
  }

  const variantInlineStyles = {
    primary: {
      backgroundColor: 'var(--pace-700)',
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    secondary: {
      borderColor: 'var(--pace-700)',
      color: 'var(--pace-700)',
      backgroundColor: 'transparent'
    },
    ghost: {
      color: 'var(--pace-700)',
      backgroundColor: 'transparent'
    }
  }

  return (
    <motion.button
      variants={buttonHover}
      initial="rest"
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && 'w-full',
        className
      )}
      style={variantInlineStyles[variant]}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}
