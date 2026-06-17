'use client'
import { useEffect, useRef, useState, CSSProperties } from 'react'

interface SplitTextProps {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  wordDelay?: number
}

export function SplitText({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  wordDelay = 75,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const words = text.split(' ')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: '0.28em' }}
        >
          <span
            className={`inline-block ${wordClassName}`}
            style={
              {
                transform: visible ? 'translateY(0)' : 'translateY(110%)',
                opacity: visible ? 1 : 0,
                filter: visible ? 'blur(0px)' : 'blur(6px)',
                transition: `transform 700ms cubic-bezier(0.16,1,0.3,1), opacity 700ms ease, filter 600ms ease`,
                transitionDelay: `${i * wordDelay + delay}ms`,
              } as CSSProperties
            }
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  )
}
