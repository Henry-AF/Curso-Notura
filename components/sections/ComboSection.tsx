  'use client'
  import Image from 'next/image'
  import { TextReveal } from '@/components/animations/TextReveal'
  import ShinyText from '@/components/ui/ShinyText/ShinyText'
  import { GrainientBtn } from '@/components/ui/GrainientBtn'
  import { trackEvent } from '@/components/MetaPixel'

  const tags = [
    '📋 Reunião de alinhamento semanal',
    '🎯 Planning de sprint',
    '📊 Review de resultados',
    '🤝 1:1 com liderado',
    '💡 Brainstorming de produto',
  ]

  export function ComboSection() {
    return (
      <section
        className="flex items-center py-28 md:py-36"
        style={{ background: '#FAFAFA', minHeight: '92vh' }}
      >
        <div className="page-shell w-full">
          {/* Header */}
          <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-16">
            
            <h2
              className="font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.08] mb-4"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
            >
              Toda reunião vira{' '}
              <ShinyText
                text="resumo, decisões e tarefas"
                color="#0A0A0A"
                shineColor="#9B8AFB"
                speed={3}
                spread={100}
                direction="left"
                pauseOnHover
                className="font-bold tracking-[-0.02em]"
                style={{ fontSize: 'inherit', lineHeight: 'inherit' }}
              />
              <br />
              <span className="text-zinc-500 font-normal" style={{ fontSize: '85%' }}>
                sem você anotar nada.
              </span>
            </h2>
            <p className="text-base md:text-lg text-zinc-600 leading-[1.85] mb-8">
              O Notura é o app brasileiro que grava e organiza suas reuniões com IA.
              E o Método R.E.U.N.I.R. te ensina a transformar cada conversa em resultado.
              
            </p>
            <div className="flex flex-col items-center gap-2">
              <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe" size="lg" magnetic onClick={() => trackEvent('InitiateCheckout')}>
                Quero o combo →
              </GrainientBtn>
              <p className="text-[0.75rem] text-zinc-400">
                Acesso vitalício ao método + 1 mês de Notura PRO
              </p>
            </div>
          </TextReveal>

          {/* Product showcase */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-16">
            {/* Book with 3D effect — sem TextReveal para não atrasar LCP */}
            <div
              style={{
                boxShadow: '-8px 8px 0 #1a0a6b, 6px 12px 48px rgba(83,65,205,0.5)',
                borderRadius: '4px 18px 18px 4px',
                width: 280,
                maxWidth: 'min(280px, 85vw)',
                flexShrink: 0,
              }}
            >
              <Image
                src="/capa-livro.webp"
                alt="Método R.E.U.N.I.R. — Capa do livro"
                width={280}
                height={420}
                priority
                unoptimized
                sizes="(max-width: 639px) 85vw, 280px"
                style={{ borderRadius: '4px 18px 18px 4px', display: 'block', maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Plus sign */}
            <TextReveal direction="up" delay={200}>
              <span className="text-3xl font-black text-[#5341CD] opacity-40 select-none">+</span>
            </TextReveal>

            {/* App mockup — sem TextReveal para não atrasar LCP */}
            <Image
              src="/home-mockup-new.webp"
              alt="App Notura — Mockup"
              width={270}
              height={541}
              priority
              unoptimized
              sizes="(max-width: 639px) 85vw, 270px"
              style={{
                borderRadius: 16,
                display: 'block',
                maxWidth: 'min(270px, 85vw)',
                height: 'auto',
                filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.15))',
              }}
            />
          </div>

          {/* Exemplos práticos */}
          <TextReveal direction="up" delay={400}>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                Aplicações práticas do método
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.8125rem] font-medium text-[#5341CD] transition-all duration-200 cursor-default hover:scale-105"
                    style={{
                      background: 'rgba(83,65,205,0.07)',
                      border: '1px solid rgba(83,65,205,0.15)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TextReveal>
        </div>
      </section>
    )
  }
