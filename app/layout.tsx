import type { Metadata } from 'next'
import Script from 'next/script'
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
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x93pstivtq");`}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
