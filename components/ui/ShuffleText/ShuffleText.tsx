'use client'
import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'

interface ShuffleTextProps {
  text: string
  duration?: number
  fps?: number
  className?: string
  trigger?: boolean
}

export function ShuffleText({
  text,
  duration = 1000,
  fps = 20,
  className = '',
  trigger = true,
}: ShuffleTextProps) {
  const [displayed, setDisplayed] = useState(text)
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!trigger) return
    const totalFrames = Math.round((duration / 1000) * fps)
    let frame = 0

    frameRef.current = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const revealedCount = Math.floor(progress * text.length)

      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < revealedCount) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (frame >= totalFrames) {
        clearInterval(frameRef.current!)
        setDisplayed(text)
      }
    }, 1000 / fps)

    return () => { if (frameRef.current) clearInterval(frameRef.current) }
  }, [text, duration, fps, trigger])

  return <span className={className}>{displayed}</span>
}
