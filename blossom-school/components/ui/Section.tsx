import clsx from 'clsx'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray'
  id?: string
}

export default function Section({ 
  children, 
  className,
  background = 'white',
  id
}: SectionProps) {
  
  const bgColors = {
    white: { backgroundColor: '#ffffff' },
    gray: { backgroundColor: 'var(--neutral-50)' }
  }

  return (
    <section 
      id={id}
      className={clsx('section-padding', className)}
      style={bgColors[background]}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}
