'use client'
import Image from 'next/image'
import { TextReveal } from '@/components/animations/TextReveal'
import ShinyText from '@/components/ui/ShinyText/ShinyText'
import { GrainientBtn } from '@/components/ui/GrainientBtn'
import { trackEvent } from '@/components/FacebookPixelProvider'

const reunirSteps = [
  { l: 'R', w: 'Registrar' },
  { l: 'E', w: 'Estruturar' },
  { l: 'U', w: 'Unificar' },
  { l: 'N', w: 'Nortear' },
  { l: 'I', w: 'Impulsionar' },
  { l: 'R', w: 'Refinar' },
]

const meetingItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Reunião clínica',
    sub: 'Saúde · Hoje, 14h30',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Planning de sprint',
    sub: 'Tech · Seg, 10h00',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    title: 'Reunião com cliente',
    sub: 'Comercial · Sex, 16h00',
  },
]

export function SolutionSection() {
  return (
    <section className="py-24 md:py-28 bg-[#F8F8FC]">
      <div className="page-shell">

        {/* Header */}
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-12">
          <div className="notura-pill mb-6">✨ A Solução</div>
          <h2
            className="font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.12] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Conheça o{' '}
            <ShinyText
              text="Método R.E.U.N.I.R."
              color="#0A0A0A"
              shineColor="#9B8AFB"
              speed={3}
              spread={100}
              direction="left"
            />
            {' '}+ Notura
          </h2>
          <p className="text-base md:text-lg text-zinc-600 leading-[1.85]">
            6 passos simples para conduzir qualquer reunião, turbinados pela inteligência
            artificial do Notura para garantir que cada reunião vire ação real.
          </p>
        </TextReveal>

        {/* 3-row layout */}
        <div className="flex flex-col gap-3 max-w-5xl mx-auto">

          {/* ── ROW 1: Hero card full-width, roxo ── */}
          <TextReveal direction="up" delay={100}>
            <div
              className="flex flex-col sm:flex-row rounded-[24px] overflow-hidden min-h-[160px]"
              style={{ background: '#5341CD' }}
            >
              {/* Capa do livro */}
              <div className="relative h-[160px] sm:h-auto sm:w-[140px] shrink-0 overflow-hidden rounded-[20px] m-3">
                <Image
                  src="/capa-livro.png"
                  alt="Método R.E.U.N.I.R."
                  fill
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                <div>
                  <span className="text-[0.625rem] font-bold text-white/50 uppercase tracking-widest">
                    Mini Curso Incluso
                  </span>
                  <h3 className="text-[1rem] font-bold text-white leading-[1.3] mt-1">
                    Domine o Método R.E.U.N.I.R. do zero!
                  </h3>
                  <p className="text-[0.8125rem] text-white/65 leading-[1.55] mt-1.5">
                    5 e-books com o framework completo para transformar reuniões em
                    decisões, decisões em tarefas e tarefas em resultados reais.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="text-[0.6875rem] text-white/45">5 módulos · acesso vitalício</span>
                  <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe" size="sm" onClick={() => trackEvent('InitiateCheckout')}>
                    Quero o combo →
                  </GrainientBtn>
                </div>
              </div>
            </div>
          </TextReveal>

          {/* ── ROW 2: Left column (55%) + Right app card (45%) ── */}
          <div className="flex flex-col lg:flex-row gap-3">

            {/* Left column */}
            <div className="flex flex-col gap-3 lg:w-[55%]">

              {/* IA card */}
              <TextReveal direction="up" delay={150}>
                <div className="bg-white rounded-[20px] border border-black/[0.07] p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(83,65,205,0.08)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
                         strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="10" rx="2"/>
                      <circle cx="12" cy="5" r="2"/>
                      <path d="M12 7v4"/>
                      <line x1="8" y1="16" x2="8" y2="16"/>
                      <line x1="16" y1="16" x2="16" y2="16"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[0.625rem] font-bold text-[#5341CD] uppercase tracking-widest">
                      Inteligência Artificial
                    </span>
                    <h3 className="text-[0.9375rem] font-bold text-[#0A0A0A] leading-[1.3]">
                      IA que entende o contexto da sua reunião
                    </h3>
                    <p className="text-[0.8125rem] text-zinc-500 leading-[1.55]">
                      Resumos, decisões, riscos e tarefas extraídos automaticamente — sem copiar e colar.
                    </p>
                    <a
                      href="https://pay.kiwify.com.br/sNuERYe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8125rem] font-semibold text-[#5341CD] inline-flex items-center gap-1 mt-1 hover:gap-2 transition-all"
                      onClick={() => trackEvent('InitiateCheckout')}
                    >
                      Quero o combo <span>→</span>
                    </a>
                  </div>
                </div>
              </TextReveal>

              {/* Bottom: 2 small cards */}
              <div className="flex gap-3">
                {/* Kanban */}
                <TextReveal direction="up" delay={200} className="flex-1">
                  <div className="bg-white rounded-[20px] border border-black/[0.07] p-4 flex flex-col gap-3 h-full">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(83,65,205,0.08)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
                           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <line x1="9" y1="3" x2="9" y2="21"/>
                        <line x1="15" y1="3" x2="15" y2="21"/>
                        <line x1="3" y1="9" x2="9" y2="9"/>
                        <line x1="3" y1="15" x2="9" y2="15"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[0.875rem] font-bold text-[#0A0A0A] leading-[1.3]">
                        Kanban de tarefas
                      </p>
                      <p className="text-[0.75rem] text-zinc-500 mt-0.5">Gerado da reunião</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-auto">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(83,65,205,0.1)' }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
                             strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span className="text-[0.6875rem] text-zinc-400">Auto-organizado</span>
                    </div>
                  </div>
                </TextReveal>

                {/* Busca */}
                <TextReveal direction="up" delay={250} className="flex-1">
                  <div className="bg-white rounded-[20px] border border-black/[0.07] p-4 flex flex-col gap-3 h-full">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(83,65,205,0.08)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
                           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[0.875rem] font-bold text-[#0A0A0A] leading-[1.3]">
                        Busca inteligente
                      </p>
                      <p className="text-[0.75rem] text-zinc-500 mt-0.5">Histórico pesquisável</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-auto">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(83,65,205,0.1)' }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
                             strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span className="text-[0.6875rem] text-zinc-400">Resposta em segundos</span>
                    </div>
                  </div>
                </TextReveal>
              </div>
            </div>

            {/* Right: App mockup */}
            <TextReveal direction="up" delay={200} className="lg:flex-1">
              <div className="relative rounded-[24px] overflow-hidden min-h-[280px] lg:min-h-full">
                <Image
                  src="/mulher-reuniao.png"
                  alt="Mulher em reunião"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(83,65,205,0.3) 0%, rgba(83,65,205,0.75) 100%)',
                  }}
                />

                {/* Top text */}
                <div className="absolute top-0 left-0 right-0 p-5">
                  <span className="text-[0.625rem] font-bold text-white/50 uppercase tracking-widest">
                    App Notura
                  </span>
                  <p className="text-[0.9375rem] font-bold text-white mt-1 leading-[1.3]">
                    Sua reunião<br />começa aqui
                  </p>
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <p className="text-[0.875rem] font-bold text-white">Disponível agora</p>
                    <p className="text-[0.75rem] text-white/55">Web · iOS · Android em breve</p>
                  </div>
                  <button
                    className="bg-white text-[#5341CD] rounded-full px-4 py-2 text-[0.75rem] font-bold hover:opacity-90 transition-opacity"
                    onClick={() => window.open('https://notura-app.vercel.app', '_blank')}
                  >
                    Testar grátis
                  </button>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* ── ROW 3: Left método card (63%) + Right 3-item stack (37%) ── */}
          <div className="flex flex-col lg:flex-row gap-3">

            {/* Left: Método visual */}
            <TextReveal direction="up" delay={300} className="lg:w-[63%]">
              <div
                className="rounded-[24px] p-5 flex flex-col gap-5 min-h-[220px]"
                style={{ background: 'linear-gradient(135deg, #1a0a6b, #5341CD 60%, #7B6FE8)' }}
              >
                {/* Topo: label + steps */}
                <div>
                  <span className="text-[0.625rem] font-bold text-white/45 uppercase tracking-widest block mb-3">
                    O framework R.E.U.N.I.R.
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {reunirSteps.map(({ l, w }) => (
                      <div
                        key={w}
                        className="inline-flex items-center gap-1.5 rounded-full pl-1 pr-3 py-1"
                        style={{ background: 'rgba(255,255,255,0.12)' }}
                      >
                        <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[0.5625rem] font-black text-[#5341CD]">
                          {l}
                        </span>
                        <span className="text-[0.6875rem] font-semibold text-white">{w}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rodapé: stat + botão */}
                <div className="flex items-end justify-between mt-auto gap-3 flex-wrap">
                  <div>
                    <p className="text-[1rem] font-bold text-white leading-[1.3]">
                      +100 empresas<br />já usam o método
                    </p>
                    <p className="text-[0.75rem] text-white/55 mt-1">
                      Da saúde ao agro — funciona em qualquer setor
                    </p>
                  </div>
                  <a
                    href="#depoimentos"
                    className="flex-shrink-0 bg-white text-[#5341CD] rounded-full px-4 py-2 text-[0.75rem] font-bold hover:opacity-90 transition-opacity"
                  >
                    Ver cases →
                  </a>
                </div>
              </div>
            </TextReveal>

            {/* Right: 3 meeting list cards */}
            <div className="flex flex-col gap-3 lg:flex-1 justify-between">
              {meetingItems.map(({ icon, title, sub }, i) => (
                <TextReveal key={title} direction="up" delay={350 + i * 60}>
                  <div className="bg-white rounded-[18px] border border-black/[0.07] p-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(83,65,205,0.08)' }}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-[0.875rem] font-semibold text-[#0A0A0A] leading-[1.3]">{title}</p>
                      <p className="text-[0.75rem] text-zinc-400 mt-0.5">{sub}</p>
                    </div>
                  </div>
                </TextReveal>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
