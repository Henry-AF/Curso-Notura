'use client'
import { useState } from 'react'
import { TextReveal } from '@/components/animations/TextReveal'

const faqs = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 16v-4m0-4h.01"/>
      </svg>
    ),
    q: 'Preciso ser tech para usar o Notura?',
    a: 'Não! O Notura foi criado para qualquer pessoa — gestores, líderes, analistas. Se você sabe abrir uma reunião no Google Meet ou Teams, já consegue usar. A interface é intuitiva e o onboarding guiado te ensina tudo em minutos.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    q: 'O app funciona em português brasileiro?',
    a: 'Sim! A transcrição e os resumos são otimizados para o português brasileiro — incluindo gírias, termos técnicos e sotaques regionais. A precisão é muito superior às ferramentas em inglês.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    q: 'Como funciona o acesso aos e-books?',
    a: 'Imediatamente após a compra, você recebe um e-mail com o link para download dos 5 e-books em PDF e acesso ao Notura PRO. Todo o material fica disponível para sempre — é seu, sem prazo de expiração.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    q: 'E se eu não gostar? Tenho garantia?',
    a: 'Sim! Você tem 7 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu dinheiro — sem burocracia, sem perguntas.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    q: 'O Método R.E.U.N.I.R. funciona para times pequenos?',
    a: 'Funciona para qualquer tamanho — de solopreneurs que fazem reuniões 1:1 com clientes até times de 50+ pessoas. O método é escalável e se adapta ao contexto da sua empresa.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
    q: 'Posso usar em reuniões gravadas ou ao vivo?',
    a: 'Os dois! O Notura processa arquivos de áudio/vídeo gravados e também transcreve reuniões ao vivo. Você pode subir uma gravação do Google Meet, Zoom ou Teams e receber o resumo estruturado em instantes.',
  },
]

function FAQItem({
  icon, q, a, index, isLast,
}: {
  icon: React.ReactNode; q: string; a: string; index: number; isLast: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <TextReveal direction="up" delay={index * 60}>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-3 py-4 text-left bg-transparent border-none cursor-pointer group"
        >
          <span className="flex-shrink-0 text-white/40 group-hover:text-white/70 transition-colors duration-200">
            {icon}
          </span>
          <span className="flex-1 text-[0.9375rem] font-normal text-white/85 group-hover:text-white transition-colors duration-200">
            {q}
          </span>
          <svg
            className="flex-shrink-0 text-white/40 w-4 h-4 transition-transform duration-300"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div
          style={{
            maxHeight: open ? '300px' : '0',
            overflow: 'hidden',
            transition: 'max-height 360ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="pl-7 pb-4 text-[0.875rem] text-white/55 leading-[1.85]">{a}</p>
        </div>

        {!isLast && (
          <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
        )}
      </div>
    </TextReveal>
  )
}

export function FAQSection() {
  return (
    <section className="py-24 md:py-28" style={{ background: '#111111' }}>
      <div className="page-shell">

        {/* Header */}
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-12">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
          >
            ❓ Dúvidas
          </div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] text-white leading-[1.08]">
            Perguntas Frequentes
          </h2>
        </TextReveal>

        {/* Accordion */}
        <div className="max-w-[600px] mx-auto">
          {faqs.map(({ icon, q, a }, i) => (
            <FAQItem
              key={q}
              icon={icon}
              q={q}
              a={a}
              index={i}
              isLast={i === faqs.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
