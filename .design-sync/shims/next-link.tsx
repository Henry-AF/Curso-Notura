// design-sync preview shim for next/link — avoids bundling Next.js client
// router runtime (which reads process.env.* at module scope). Renders a
// plain anchor so previews keep the same visual result.
import type { ReactNode, CSSProperties } from 'react'

type Props = {
  href: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export default function Link({ href, children, ...rest }: Props) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  )
}
