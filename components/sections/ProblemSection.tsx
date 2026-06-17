'use client'
import { TextReveal } from '@/components/animations/TextReveal'
import TextType from '@/components/ui/TextType/TextType'

const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'A Decisão Fantasma',
    desc: 'Decisões tomadas na reunião que nunca são escritas em lugar nenhum.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Ninguém Lembra Igual',
    desc: 'Cada pessoa guarda uma versão diferente do que foi decidido.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Custo de Re-explicar',
    desc: 'Quem não estava na reunião precisa perder tempo perguntando para alguém.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5341CD"
           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'Tarefa sem Dono',
    desc: 'Combinados que ficam no ar porque não tinham responsável ou prazo.',
  },
]

export function ProblemSection() {
  return (
    <section id="funcionalidades" className="py-24 md:py-28 bg-white">
      <div className="page-shell">
        {/* Header */}
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-14">
          <div className="notura-pill mb-6">😰 O Problema</div>
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.08] mb-4"
          >
            Você reconhece esses sinais na sua empresa?
          </h2>
          <div className="text-base md:text-lg text-zinc-600 leading-[1.85] min-h-[2rem]">
            <TextType
              as="span"
              text={[
                'reuniões sem dono de decisão.',
                'combinados que ninguém cumpre.',
                'tempo perdido re-explicando.',
                'tarefas que somem após a reunião.',
              ]}
              typingSpeed={55}
              deletingSpeed={25}
              pauseDuration={2200}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-[#5341CD] font-light"
              loop={true}
              startOnVisible={true}
              className="text-zinc-600"
            />
          </div>
        </TextReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map(({ icon, title, desc }, i) => (
            <TextReveal key={title} delay={i * 100} direction="up">
              <div
                className="bg-white rounded-[20px] p-6 flex flex-col gap-4 h-full"
                style={{ border: '1px solid #f0f0f4' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(83,65,205,0.08)' }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0A0A0A] leading-[1.3] mb-2 tracking-[-0.01em]">
                    {title}
                  </h3>
                  <p className="text-[0.8125rem] text-zinc-500 leading-[1.65]">{desc}</p>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
