'use client'
import { ReactNode } from 'react'

interface InfiniteMarqueeProps {
  items: ReactNode[]
  direction?: 'left' | 'right'
  speed?: number
  gap?: number
  className?: string
  pauseOnHover?: boolean
}

export function InfiniteMarquee({
  items,
  direction = 'left',
  speed = 35,
  gap = 16,
  className = '',
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  const animationName = direction === 'left' ? 'marquee' : 'marquee-reverse'

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
    >
      <div
        className={`flex ${pauseOnHover ? 'group' : ''}`}
        style={{
          width: 'max-content',
          gap: `${gap}px`,
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0" style={{ marginRight: `${gap}px` }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
