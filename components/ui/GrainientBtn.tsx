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
  const displayStyle = className.includes('w-full') ? { display: 'flex' as const } : undefined

  const inner = href ? (
    <a href={href} className={btnClass} style={displayStyle} target={target}>
      <span className="shimmer-overlay" />
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={btnClass} style={displayStyle}>
      <span className="shimmer-overlay" />
      {children}
    </button>
  )

  if (magnetic) {
    const magneticClass = className.includes('w-full') ? 'w-full' : ''
    return <MagneticButton className={magneticClass}>{inner}</MagneticButton>
  }

  return inner
}
