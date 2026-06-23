// design-sync preview shim for next/image — avoids bundling Next.js client
// runtime (which reads process.env.* at module scope and crashes outside
// a Next app). Renders the same visual result as a plain <img>.
import type { CSSProperties } from 'react'

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  style?: CSSProperties
  className?: string
}

export default function Image({ src, alt, width, height, fill, style, className }: Props) {
  const fillStyle: CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : {}
  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={{ ...fillStyle, ...style }}
    />
  )
}
