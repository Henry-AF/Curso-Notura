'use client'
import { useState, CSSProperties } from 'react'
import { TextReveal } from '@/components/animations/TextReveal'

function SilkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Silk layers */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(123,111,232,0.65) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(155,138,251,0.55) 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 50% 80%, rgba(67,51,184,0.65) 0%, transparent 60%)
          `,
          animation: 'silkShift1 10s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 40% at 60% 60%, rgba(192,132,252,0.3) 0%, transparent 50%),
            radial-gradient(ellipse 50% 70% at 10% 80%, rgba(129,140,248,0.25) 0%, transparent 55%)
          `,
          animation: 'silkShift2 14s ease-in-out infinite',
        }}
      />
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.07,
          mixBlendMode: 'overlay',
          backgroundSize: '200px',
        }}
      />

    </div>
  )
}

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: '#5341CD' }}
    >
      {/* ReactBits: Silk animated background */}
      <SilkBackground />

      <div className="page-shell relative z-10">
        <TextReveal direction="up" className="max-w-[560px] mx-auto text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold text-white tracking-[-0.03em] mb-3">
            Receba dicas semanais sobre reuniões produtivas
          </h2>
          <p className="text-base text-white/75 mb-8">
            Conteúdo exclusivo sobre gestão, método e IA — direto no seu e-mail. Grátis, sem spam.
          </p>

          {submitted ? (
            <div
              className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-6 py-4 text-white font-semibold"
            >
              ✅ Incrível! Você está na lista. Confira seu e-mail.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                autoComplete="email"
                aria-label="Seu endereço de e-mail"
                className="flex-1 rounded-full px-6 text-white font-[Poppins,sans-serif] text-[0.9375rem] outline-none w-full"
                style={{
                  height: '52px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'border-color 200ms, background 200ms',
                } as CSSProperties}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.5)'
                  e.target.style.background = 'rgba(255,255,255,0.22)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.target.style.background = 'rgba(255,255,255,0.15)'
                }}
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-white text-[#5341CD] font-bold text-[0.875rem] cursor-pointer border-none whitespace-nowrap font-[Poppins,sans-serif] px-7"
                style={{
                  height: '52px',
                  minHeight: '52px',
                  boxSizing: 'border-box',
                  transition: 'box-shadow 200ms, transform 200ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                Quero receber →
              </button>
            </form>
          )}
        </TextReveal>
      </div>
    </section>
  )
}
