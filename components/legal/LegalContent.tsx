import { ReactNode } from 'react'
import Link from 'next/link'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: ReactNode
  children: ReactNode
}) {
  return (
    <main className="bg-white">
      <div className="page-shell">
        <div className="max-w-[720px] mx-auto py-28 md:py-32">
          <h1
            className="font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.1] mb-2"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            {title}
          </h1>
          <p className="text-[0.8125rem] text-zinc-500 mb-10">
            <strong className="text-zinc-700">Última atualização:</strong> {updated}
          </p>
          <div className="flex flex-col gap-1">{children}</div>
        </div>
      </div>
    </main>
  )
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[0.8125rem] text-zinc-600 leading-[1.7] mb-8 rounded-xl p-4"
      style={{ background: 'rgba(83,65,205,0.06)', border: '1px solid rgba(83,65,205,0.15)' }}
    >
      {children}
    </p>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[1.25rem] font-bold text-[#0A0A0A] tracking-[-0.01em] mt-10 mb-3">
      {children}
    </h2>
  )
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[0.9375rem] text-zinc-600 leading-[1.8] mb-4">{children}</p>
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-4 text-[0.9375rem] text-zinc-600 leading-[1.7]">{children}</ul>
}

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto mb-4 rounded-xl" style={{ border: '1px solid #ECECEC' }}>
      <table className="w-full text-[0.8125rem] border-collapse min-w-[480px]">{children}</table>
    </div>
  )
}

export function Thead({ children }: { children: ReactNode }) {
  return (
    <thead>
      <tr style={{ background: '#FAFAFA' }}>{children}</tr>
    </thead>
  )
}

export function Th({ children }: { children: ReactNode }) {
  return (
    <th className="text-left font-semibold text-[#0A0A0A] px-4 py-2.5" style={{ borderBottom: '1px solid #ECECEC' }}>
      {children}
    </th>
  )
}

export function Td({ children }: { children: ReactNode }) {
  return (
    <td className="text-zinc-600 px-4 py-2.5 align-top" style={{ borderBottom: '1px solid #F4F4F5' }}>
      {children}
    </td>
  )
}

export function Tr({ children }: { children: ReactNode }) {
  return <tr>{children}</tr>
}

export function Fill({ children }: { children: ReactNode }) {
  return (
    <mark className="bg-amber-100 text-amber-800 px-1 rounded-sm font-medium" style={{ fontStyle: 'normal' }}>
      {children}
    </mark>
  )
}

export function CrossLinks({ current }: { current: 'privacidade' | 'termos' | 'lgpd' }) {
  const links = [
    { key: 'privacidade', label: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { key: 'termos', label: 'Termos de Uso', href: '/termos-de-uso' },
    { key: 'lgpd', label: 'Central de Privacidade (LGPD)', href: '/lgpd' },
  ].filter((l) => l.key !== current)

  return (
    <div className="mt-12 pt-6 flex flex-wrap gap-x-5 gap-y-2" style={{ borderTop: '1px solid #ECECEC' }}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="text-[0.8125rem] font-medium text-[#5341CD] no-underline hover:underline"
        >
          {l.label} →
        </Link>
      ))}
    </div>
  )
}
