'use client'
import { ReactNode } from 'react'
import { MagneticButton } from '@/components/animations/MagneticButton'

interface GrainientBtnProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
  magnetic?: boolean
  target?: string
}

export function GrainientBtn({
  children,
  href,
  onClick,
  size = 'md',
  className = '',
  magnetic = false,
  target,
}: GrainientBtnProps) {
  const sizeClass = size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : ''
  const btnClass = `grainient-btn ${sizeClass} ${className}`

  const inner = href ? (
    <a href={href} className={btnClass} target={target}>
      <span className="shimmer-overlay" />
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={btnClass}>
      <span className="shimmer-overlay" />
      {children}
    </button>
  )

  if (magnetic) {
    return <MagneticButton>{inner}</MagneticButton>
  }

  return inner
}
