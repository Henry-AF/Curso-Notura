'use client'
import { Aurora } from '@/components/animations/Aurora'
import { Particles } from '@/components/animations/Particles'
import { SplitText } from '@/components/animations/SplitText'
import { TextReveal } from '@/components/animations/TextReveal'
import { GrainientBtn } from '@/components/ui/GrainientBtn'

const MockupApp = () => (
  <div
    className="rounded-[20px] p-5 max-w-[700px] mx-auto mockup-float"
  >
    {/* Window chrome */}
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-100">
      <span className="w-3 h-3 rounded-full bg-red-400" />
      <span className="w-3 h-3 rounded-full bg-yellow-400" />
      <span className="w-3 h-3 rounded-full bg-green-400" />
      <div className="flex-1 h-2 bg-zinc-100 rounded-full mx-2" />
      <span className="text-[9px] text-zinc-400 font-semibold whitespace-nowrap">Reunião de Alinhamento Q3 · IA processando...</span>
    </div>

    {/* Body */}
    <div className="grid grid-cols-[180px_1fr] gap-3 h-[220px] max-sm:grid-cols-1 max-sm:h-auto">
      {/* Sidebar */}
      <div className="rounded-xl p-3 flex flex-col gap-2" style={{ background: 'linear-gradient(135deg, #EEF0FF 0%, #fff 100%)' }}>
        <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Reuniões</p>
        {[true, false, false, false].map((active, i) => (
          <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${active ? 'bg-white shadow-sm' : ''}`}>
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: active ? '#5341CD' : '#d4d4d8' }} />
            <div className="flex-1 flex flex-col gap-1">
              <div className="h-1.5 rounded-full" style={{ background: active ? 'rgba(83,65,205,0.3)' : '#f4f4f5' }} />
              <div className="h-1.5 rounded-full w-3/5" style={{ background: active ? 'rgba(83,65,205,0.15)' : '#f4f4f5' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Cards area */}
      <div className="flex flex-col gap-2.5">
        {[
          { label: '🎯 Decisões', bg: 'rgba(83,65,205,0.05)', barBg: 'rgba(83,65,205,0.2)', color: '#5341CD' },
          { label: '⚠️ Riscos', bg: 'rgba(239,68,68,0.05)', barBg: 'rgba(239,68,68,0.2)', color: '#dc2626' },
          { label: '✅ Pendências', bg: 'rgba(34,197,94,0.05)', barBg: 'rgba(34,197,94,0.2)', color: '#16a34a' },
        ].map(({ label, bg, barBg, color }) => (
          <div key={label} className="rounded-xl p-3 border" style={{ background: bg, borderColor: 'rgba(0,0,0,0.05)' }}>
            <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color }}>{label}</p>
            <div className="h-1.5 rounded-full mb-1.5" style={{ background: barBg }} />
            <div className="h-1.5 rounded-full w-3/5" style={{ background: barBg, opacity: 0.6 }} />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-16"
      style={{ background: '#FFFFFF', backgroundImage: 'radial-gradient(ellipse 70% 60% at 0% 0%, rgba(83,65,205,0.08) 0%, transparent 70%)' }}
    >
      {/* ReactBits: Aurora background */}
      <Aurora />

      {/* ReactBits: Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles count={55} />
      </div>

      <div className="page-shell relative z-10 w-full">
        <div className="text-center max-w-[880px] mx-auto">
          {/* Badge */}
          <TextReveal delay={0}>
            <div className="inline-flex items-center gap-2 bg-white border border-[#DDD8F5] rounded-full px-4 py-1.5 mb-6 text-xs font-semibold text-[#5341CD] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
              Método + Tecnologia para reuniões produtivas
            </div>
          </TextReveal>

          {/* H1 — ReactBits: SplitText blur-in */}
          <div className="mb-6">
            <SplitText
              text="Transforme Reuniões em"
              className="justify-center text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#0A0A0A]"
              wordDelay={70}
              delay={100}
            />
            <div className="my-1">
              <SplitText
                text="Resultados Reais"
                className="justify-center text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12]"
                wordClassName="gradient-text"
                wordDelay={70}
                delay={280}
              />
            </div>
            <SplitText
              text="e Acabe com o Retrabalho para Sempre."
              className="justify-center text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1.12] text-[#0A0A0A]"
              wordDelay={60}
              delay={460}
            />
          </div>

          {/* Subtitle */}
          <TextReveal delay={700} direction="up">
            <p className="text-[1.0625rem] md:text-lg leading-[1.85] text-zinc-600 max-w-[600px] mx-auto mb-9">
              Combine o poder do <strong className="text-[#0A0A0A] font-semibold">Método R.E.U.N.I.R.</strong> com a automação de IA do{' '}
              <strong className="text-[#0A0A0A] font-semibold">Notura</strong> — e nunca mais perca uma decisão, tarefa ou insight importante de uma reunião.
            </p>
          </TextReveal>

          {/* CTAs */}
          <TextReveal delay={900} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <GrainientBtn href="#preco" size="lg" magnetic>
                🚀 GARANTIR MINHA VAGA
              </GrainientBtn>
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#0891b2]"
                style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)' }}
              >
                🎁 Bônus Exclusivo incluído
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-2">🔒 Garantia incondicional de 7 dias · Acesso imediato</p>
          </TextReveal>

          {/* Mockup */}
          <TextReveal delay={1100} direction="up" className="mt-12">
            <MockupApp />
          </TextReveal>
        </div>
      </div>
    </section>
  )
}
