'use client'
import Image from 'next/image'
import { TextReveal } from '@/components/animations/TextReveal'

// ─────────────────────────────────────────────────────────────────────────────
// Steps ordenados: 1 Grave → 2 IA organiza → 3 WhatsApp → 4 Kanban
// Para adicionar uma imagem real: coloque o arquivo em /public e mude img para
// o caminho (ex.: '/como-usar-gravar.webp'). null exibe o placeholder cinza.
// ─────────────────────────────────────────────────────────────────────────────
type Step = { number: number; title: string; description: string; img: string | null }

const STEPS: Step[] = [
  {
    number: 1,
    title: 'Grave a reunião',
    description:
      'Abra o Notura no celular ou no computador, aperte gravar e foque na conversa. O app captura tudo em áudio, ao vivo.',
    img: null, // PLACEHOLDER_IMG_1 — ex.: '/como-usar-gravar.webp'
  },
  {
    number: 2,
    title: 'A IA organiza tudo',
    description:
      'Em instantes, a IA transcreve, categoriza e extrai decisões, riscos e pendências — sem você digitar uma palavra.',
    img: null, // PLACEHOLDER_IMG_2 — ex.: '/como-usar-ia.webp'
  },
  {
    number: 3,
    title: 'Receba o resumo no WhatsApp',
    description:
      'O resumo estruturado chega direto no seu WhatsApp assim que a IA processa. Compartilhe com o time em um toque.',
    img: null, // PLACEHOLDER_IMG_3 — ex.: '/como-usar-whatsapp.webp'
  },
  {
    number: 4,
    title: 'Tarefas vão pro Kanban',
    description:
      'Cada tarefa e responsável identificado na reunião vira um card no Kanban do Notura. Nada mais some no esquecimento.',
    img: null, // PLACEHOLDER_IMG_4 — ex.: '/como-usar-kanban.webp'
  },
]

function StepRow({ step }: { step: Step }) {
  const isEven = step.number % 2 === 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

      {/* Imagem emoldurada — fora do TextReveal (nunca opacity:0 em imagens) */}
      <div className={isEven ? 'md:order-2' : 'md:order-1'}>
        <div
          className="rounded-[14px] overflow-hidden"
          style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
        >
          {step.img ? (
            <Image
              src={step.img}
              alt={step.title}
              width={560}
              height={315}
              className="w-full h-auto block"
            />
          ) : (
            <div
              className="aspect-video flex items-center justify-center"
              style={{ background: '#EEF0FF' }}
            >
              <span className="text-[#C4BFF5] text-sm font-medium select-none pointer-events-none">
                📸 Passo {step.number}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo textual */}
      <div className={isEven ? 'md:order-1' : 'md:order-2'}>
        <TextReveal direction="up" delay={100}>
          <span
            className="inline-block px-3 py-1 rounded-full text-[0.625rem] font-black uppercase tracking-[0.15em] mb-4"
            style={{ background: 'rgba(83,65,205,0.08)', color: '#5341CD' }}
          >
            PASSO {step.number}
          </span>
          <h3
            className="font-bold text-[#0A0A0A] leading-[1.2] mb-3"
            style={{ fontSize: 'clamp(1.25rem, 2vw, 1.625rem)' }}
          >
            {step.title}
          </h3>
          <p className="text-[0.9375rem] text-zinc-500 leading-[1.75]">
            {step.description}
          </p>
        </TextReveal>
      </div>

    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="como-usar" className="py-24 md:py-28 bg-white">
      <div className="page-shell">

        {/* Cabeçalho */}
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="notura-pill mb-6">📱 Como Usar</div>
          <h2
            className="font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Do play ao resumo,{' '}
            <span style={{ color: '#5341CD' }}>sem esforço nenhum</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500 leading-[1.75]">
            Quatro passos — e a reunião já virou resultado.
          </p>
        </TextReveal>

        {/* Steps escalonados */}
        <div className="flex flex-col gap-14 md:gap-20">
          {STEPS.map((step) => (
            <StepRow key={step.number} step={step} />
          ))}
        </div>

      </div>
    </section>
  )
}
