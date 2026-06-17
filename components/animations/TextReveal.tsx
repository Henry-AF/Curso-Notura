'use client'
import { useEffect, useRef, useState, CSSProperties, ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'blur'
  threshold?: number
}

const transforms = {
  up: 'translateY(32px)',
  down: 'translateY(-32px)',
  left: 'translateX(32px)',
  right: 'translateX(-32px)',
  blur: 'translateY(8px)',
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.15,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div
      ref={ref}
      className={className}
      style={
        {
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : transforms[direction],
          filter: visible ? 'blur(0px)' : direction === 'blur' ? 'blur(10px)' : 'blur(0px)',
          transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, filter 600ms ease ${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
