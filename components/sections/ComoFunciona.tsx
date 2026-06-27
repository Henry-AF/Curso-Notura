'use client'
import Image from 'next/image'
import { TextReveal } from '@/components/animations/TextReveal'
import { GrainientBtn } from '@/components/ui/GrainientBtn'
import { trackEvent } from '@/components/MetaPixel'

// ─────────────────────────────────────────────────────────────────────────────
// Para editar um passo: altere title, description e, quando tiver o print real,
// preencha img com o caminho relativo a /public (ex.: '/prints/passo-1.webp').
// ─────────────────────────────────────────────────────────────────────────────
type Step = { number: number; title: string; description: string; img: string | null }

const STEPS: Step[] = [
  {
    number: 1,
    title: 'Garanta o combo e pague na hora',
    description: 'No Pix, liberação instantânea. No cartão, em minutos.',
    img: null, // PLACEHOLDER_IMG_1 — ex.: '/prints/passo-1.webp'
  },
  {
    number: 2,
    title: 'Receba seus acessos no e-mail',
    description:
      'Acesso à área de membros do Método R.E.U.N.I.R. + convite pra criar sua senha do Notura. Automático.',
    img: null, // PLACEHOLDER_IMG_2
  },
  {
    number: 3,
    title: 'Abra o Método R.E.U.N.I.R.',
    description:
      '5 módulos diretos te ensinam a transformar reunião em decisão e tarefa. Acesso vitalício.',
    img: null, // PLACEHOLDER_IMG_3
  },
  {
    number: 4,
    title: 'Crie sua senha e entre no Notura',
    description: 'Seu mês de Notura PRO já vem ativo. Define a senha e pronto.',
    img: null, // PLACEHOLDER_IMG_4
  },
  // ── PLACEHOLDER_PASSO_5 ── substitua title, description e img ──────────────
  {
    number: 5,
    title: 'PLACEHOLDER_PASSO_5',
    description: 'PLACEHOLDER_PASSO_5',
    img: null, // PLACEHOLDER_IMG_5
  },
  // ── PLACEHOLDER_PASSO_6 ── substitua title, description e img ──────────────
  {
    number: 6,
    title: 'PLACEHOLDER_PASSO_6',
    description: 'PLACEHOLDER_PASSO_6',
    img: null, // PLACEHOLDER_IMG_6
  },
]

function NumberCircle({ n }: { n: number }) {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
      style={{ background: '#5341CD', boxShadow: '0 0 0 4px rgba(83,65,205,0.12)' }}
    >
      {n}
    </div>
  )
}

// Imagem renderizada fora de TextReveal — nunca começa com opacity:0
function StepImage({ step }: { step: Step }) {
  return (
    <div
      className="w-full aspect-video rounded-xl overflow-hidden flex items-center justify-center"
      style={{ background: '#EEF0FF' }}
    >
      {step.img ? (
        <Image
          src={step.img}
          alt={`Passo ${step.number}`}
          width={560}
          height={315}
          className="w-full h-full object-cover"
        />
      ) : (
        // Placeholder — substitua pelo <Image> acima quando tiver o print
        <span className="text-[#C4BFF5] text-[0.75rem] font-semibold select-none pointer-events-none">
          📸 Passo {step.number}
        </span>
      )}
    </div>
  )
}

export function ComoFunciona() {
  const rows: [Step[], Step[]] = [STEPS.slice(0, 3), STEPS.slice(3, 6)]

  return (
    <section id="como-funciona" className="py-24 md:py-28 bg-white">
      <div className="page-shell">

        {/* ── Cabeçalho ─────────────────────────────────────────────────── */}
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="notura-pill mb-6">🗺️ Passo a Passo</div>
          <h2
            className="font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Do pagamento ao primeiro resumo,{' '}
            <span style={{ color: '#5341CD' }}>em minutos</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500 leading-[1.75]">
            Depois que você garante o combo, é só seguir o passo a passo.
          </p>
        </TextReveal>

        {/* ── MOBILE: stepper vertical (linha à esquerda dos números) ───── */}
        <div className="lg:hidden flex flex-col">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1
            return (
              <div key={step.number} className="flex gap-5 items-start">

                {/* Coluna esquerda: círculo + linha vertical */}
                <div className="flex flex-col items-center self-stretch flex-shrink-0">
                  <div className="relative z-10">
                    <NumberCircle n={step.number} />
                  </div>
                  {!isLast && (
                    <div
                      className="w-px flex-1 mt-3"
                      style={{ background: '#DDD8F5' }}
                    />
                  )}
                </div>

                {/* Conteúdo do passo */}
                <div className={`flex-1 ${isLast ? '' : 'pb-10'}`}>
                  {/* Imagem — fora do TextReveal */}
                  <div className="mb-3 -mt-0.5">
                    <StepImage step={step} />
                  </div>
                  <TextReveal direction="up" delay={80}>
                    <h3 className="font-bold text-[#0A0A0A] text-[0.9375rem] leading-snug mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[0.8125rem] text-zinc-500 leading-[1.65]">
                      {step.description}
                    </p>
                  </TextReveal>
                </div>

              </div>
            )
          })}
        </div>

        {/* ── DESKTOP: 2 fileiras de 3 colunas + linha horizontal ────────── */}
        <div className="hidden lg:flex flex-col gap-14">
          {rows.map((rowSteps, rowIndex) => (
            <div key={rowIndex} className="relative">

              {/* Linha horizontal conectando os círculos numerados da fileira */}
              <div
                className="absolute h-px"
                style={{
                  background: '#DDD8F5',
                  top: 18,
                  left: 'calc(16.667% + 18px)',
                  right: 'calc(16.667% + 18px)',
                }}
              />

              <div className="grid grid-cols-3 gap-x-10">
                {rowSteps.map((step, colIndex) => (
                  <div key={step.number} className="flex flex-col">

                    {/* Círculo numerado centralizado na coluna, sobre a linha */}
                    <div className="flex justify-center mb-5 relative z-10">
                      <NumberCircle n={step.number} />
                    </div>

                    {/* Imagem — fora do TextReveal */}
                    <div className="mb-4">
                      <StepImage step={step} />
                    </div>

                    {/* Texto */}
                    <TextReveal direction="up" delay={colIndex * 100}>
                      <h3 className="font-bold text-[#0A0A0A] text-[0.9375rem] leading-snug mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-[0.8125rem] text-zinc-500 leading-[1.65]">
                        {step.description}
                      </p>
                    </TextReveal>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <TextReveal direction="up" delay={200} className="mt-16 flex justify-center">
          <GrainientBtn
            href="https://pay.kiwify.com.br/sNuERYe"
            size="lg"
            magnetic
            onClick={() => trackEvent('InitiateCheckout')}
          >
            Quero o combo →
          </GrainientBtn>
        </TextReveal>

      </div>
    </section>
  )
}
