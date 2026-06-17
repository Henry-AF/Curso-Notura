'use client'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export function CountUp({
  target,
  suffix = '',
  prefix = '',
  duration = 1800,
  decimals = 0,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const startTime = performance.now()

          const update = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const value = eased * target

            setCount(parseFloat(value.toFixed(decimals)))

            if (progress < 1) requestAnimationFrame(update)
            else setCount(target)
          }

          requestAnimationFrame(update)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration, decimals])

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  )
}
