'use client'
import { useRef, MouseEvent, ReactNode, CSSProperties } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  maxTilt?: number
  glare?: boolean
}

export function TiltCard({ children, className = '', style, maxTilt = 7, glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2

    const rotX = ((y - cy) / cy) * -maxTilt
    const rotY = ((x - cx) / cx) * maxTilt

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`

    if (glare && glareRef.current) {
      const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI)
      glareRef.current.style.opacity = '0.12'
      glareRef.current.style.transform = `rotate(${angle}deg)`
    }
  }

  const handleMouseLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1)'
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }

  const handleMouseEnter = () => {
    const card = ref.current
    if (!card) return
    card.style.transition = 'transform 0.1s ease'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform', ...style } as CSSProperties}
    >
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 z-10 pointer-events-none rounded-[inherit] overflow-hidden"
          style={{ opacity: 0, transition: 'opacity 0.3s' }}
        >
          <div
            className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
            style={{
              background: 'linear-gradient(105deg, rgba(255,255,255,0.3) 0%, transparent 50%, transparent 100%)',
            }}
          />
        </div>
      )}
      {children}
    </div>
  )
}
