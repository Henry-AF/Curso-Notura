'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TextReveal } from '@/components/animations/TextReveal'
import { ShuffleText } from '@/components/ui/ShuffleText/ShuffleText'
import { GrainientBtn } from '@/components/ui/GrainientBtn'

function CountUp({
  end,
  prefix = '',
  suffix = '',
  className = '',
}: {
  end: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1400
          const fps = 60
          const totalFrames = Math.round((duration / 1000) * fps)
          let frame = 0
          const interval = setInterval(() => {
            frame++
            const progress = frame / totalFrames
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.round(eased * end))
            if (frame >= totalFrames) clearInterval(interval)
          }, 1000 / fps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

export function PricingSection() {
  return (
    <section id="preco" className="py-24 md:py-28 bg-[#FAFAFA]">
      <div className="page-shell">

        {/* Header */}
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-12">
          <div className="notura-pill mb-6">💰 Investimento</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.08] mb-4">
            Invista na sua{' '}
            <ShuffleText
              text="produtividade"
              duration={1200}
              fps={24}
              className="text-[#5341CD]"
              trigger={true}
            />
          </h2>
          <p className="text-base md:text-lg text-zinc-500 leading-[1.75]">
            Um único investimento. Acesso vitalício ao método e 30 dias do app PRO.
            Sem mensalidade surpresa.
          </p>
        </TextReveal>

       

        {/* Pricing Card — two-column layout */}
        <TextReveal direction="up" delay={200}>
          <div
            className="max-w-[820px] mx-auto flex flex-col md:flex-row rounded-[28px] overflow-hidden"
            style={{
              border: '1px solid #DDD8F5',
              boxShadow: '0 2px 24px rgba(0,0,0,0.08)',
            }}
          >

            {/* LEFT — product images */}
            <div className="md:w-[45%] p-8 flex flex-col items-center justify-center gap-4 bg-[#F8F8FC]">
              <Image
                src="/capa-livro.png"
                alt="Método R.E.U.N.I.R."
                width={160}
                height={224}
                style={{
                  borderRadius: '4px 12px 12px 4px',
                  boxShadow: '-5px 5px 0 #1a0a6b, 3px 6px 24px rgba(83,65,205,0.4)',
                  display: 'block',
                }}
              />
              <span className="text-2xl font-black text-[#5341CD] opacity-30 select-none">+</span>
              <Image
                src="/home-mockup-new.png"
                alt="App Notura"
                width={130}
                height={260}
                style={{
                  borderRadius: 12,
                  display: 'block',
                  filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))',
                }}
              />
            </div>

            {/* RIGHT — purchase details */}
            <div
              className="flex-1 p-5 md:p-8 flex flex-col gap-4"
              style={{ background: 'linear-gradient(135deg, #EEF0FF 0%, #fff 100%)' }}
            >

              {/* Badges */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span
                  className="text-[0.6875rem] font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(83,65,205,0.08)', color: '#5341CD' }}
                >
                  Oferta de Lançamento
                </span>
                <span
                  className="text-[0.6875rem] font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(83,65,205,0.08)', color: '#5341CD' }}
                >
                  Vagas limitadas
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[1rem] font-bold text-[#0A0A0A] leading-[1.3]">
                Combo Notura + Método R.E.U.N.I.R.
              </h3>

              {/* Stars + sales */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24"
                      fill={i <= 4 ? '#f59e0b' : 'none'}
                      stroke="#f59e0b" strokeWidth="1.5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="text-[0.75rem] font-bold text-[#0A0A0A] ml-1">4.9</span>
                </div>
                <span className="text-[0.75rem] text-zinc-400">·</span>
                <span className="text-[0.75rem] text-zinc-500">Excelente</span>
                <span className="text-[0.75rem] text-zinc-400">·</span>
                <span className="text-[0.75rem] font-semibold text-zinc-600">+135 vendidos</span>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-[0.8125rem] text-zinc-400 line-through">R$ 342,00</span>
                  <span className="text-[0.6875rem] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md">-71%</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-[1.125rem] font-bold text-[#0A0A0A] mr-0.5">R$</span>
                  <span className="text-[2.5rem] font-black text-[#0A0A0A] leading-none tracking-[-0.03em]">
                    97
                  </span>
                  <span className="text-[1.125rem] font-bold text-[#0A0A0A]">,90</span>
                </div>
                <p className="text-[0.8125rem] text-zinc-500 mt-1">
                  Ou <strong className="text-[#0A0A0A]">10x de R$ 9,79</strong> sem juros no cartão
                </p>
              </div>

              {/* CTA */}
              <div className="w-full">
                <GrainientBtn
                  href="https://pay.kiwify.com.br/sNuERYe"
                  size="lg"
                  className="w-full justify-center text-[0.875rem] font-extrabold tracking-wide"
                  magnetic
                >
                  🚀 Quero o combo por R$97,90
                </GrainientBtn>
              </div>

              {/* Guarantee */}
              <div
                className="flex items-start gap-2.5 rounded-2xl p-3"
                style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-base flex-shrink-0">
                  🛡️
                </div>
                <div>
                  <p className="text-[0.8125rem] text-green-700 font-bold leading-snug">
                    Compra Garantida.
                  </p>
                  <p className="text-[0.75rem] text-green-600 leading-snug">
                    Receba o produto ou devolvemos 100% do seu dinheiro.
                  </p>
                </div>
              </div>

              {/* Official site */}
              <div className="flex items-center gap-2 pt-1">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center text-[0.625rem] font-black text-white flex-shrink-0"
                  style={{ background: '#5341CD' }}
                >
                  N
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[0.75rem] font-semibold text-[#0A0A0A]">
                      Site Oficial do Notura
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#5341CD">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[0.6875rem] text-zinc-400">+135 vendas</p>
                </div>
              </div>

            </div>
          </div>
        </TextReveal>

      </div>
    </section>
  )
}
