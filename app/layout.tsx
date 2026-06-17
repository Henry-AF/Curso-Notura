import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Notura + R.E.U.N.I.R. — Reuniões que Geram Resultados',
  description: 'Combine o Método R.E.U.N.I.R. com a IA do Notura e transforme cada reunião em resultados reais. Nunca mais perca uma decisão, tarefa ou insight importante.',
  keywords: 'reuniões produtivas, notura, método reunir, transcrição IA, produtividade',
  openGraph: {
    title: 'Notura + R.E.U.N.I.R.',
    description: 'Transforme reuniões em resultados com IA + método comprovado.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
