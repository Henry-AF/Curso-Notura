'use client'
import { useState, CSSProperties } from 'react'
import { TextReveal } from '@/components/animations/TextReveal'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-10" style={{ background: '#0F0F0F' }}>
      <div className="page-shell">
        <TextReveal direction="up" className="max-w-[480px] mx-auto text-center">
          <p className="text-[0.8125rem] text-zinc-400 mb-3">
            Quer dicas semanais sobre reuniões produtivas, antes de comprar? Deixe seu e-mail.
          </p>

          {submitted ? (
            <div
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2.5 text-zinc-300 text-[0.8125rem] font-medium"
            >
              ✅ Você está na lista. Confira seu e-mail.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                autoComplete="email"
                aria-label="Seu endereço de e-mail"
                className="flex-1 rounded-full px-5 text-zinc-200 font-[Poppins,sans-serif] text-[0.8125rem] outline-none w-full"
                style={{
                  height: '40px',
                  minHeight: '40px',
                  boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'border-color 200ms, background 200ms',
                } as CSSProperties}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.3)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.12)'
                }}
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-white/10 text-zinc-200 font-semibold text-[0.8125rem] cursor-pointer border-none whitespace-nowrap font-[Poppins,sans-serif] px-5 hover:bg-white/15 transition-colors"
                style={{
                  height: '40px',
                  minHeight: '40px',
                  boxSizing: 'border-box',
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
