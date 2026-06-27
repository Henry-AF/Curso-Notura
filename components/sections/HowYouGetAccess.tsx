'use client'
import Image from 'next/image'
import { TextReveal } from '@/components/animations/TextReveal'
import { GrainientBtn } from '@/components/ui/GrainientBtn'
import { trackEvent } from '@/components/MetaPixel'

// ─────────────────────────────────────────────────────────────────────────────
// Para adicionar uma imagem: coloque o WebP em /public e mude img de null para
// o caminho (ex.: '/acesso-checkout.webp'). null exibe o placeholder cinza.
// ─────────────────────────────────────────────────────────────────────────────
type Step = { number: number; title: string; description: string; img: string | null }

const STEPS: Step[] = [
  {
    number: 1,
    title: 'Pague e libere na hora',
    description:
      'Pix com liberação instantânea ou cartão em minutos. Aprovou, o acesso já sai.',
    img: null, // PLACEHOLDER_IMG_1 — adicione /acesso-checkout.webp quando tiver o print
  },
  {
    number: 2,
    title: 'Receba o acesso ao Método',
    description:
      'Chega o e-mail do Kiwify com seu acesso à área de membros.',
    img: null, // PLACEHOLDER_IMG_2 — adicione /acesso-email-metodo.webp
  },
  {
    number: 3,
    title: 'Comece o Método R.E.U.N.I.R.',
    description:
      '7 módulos diretos ao ponto, do primeiro passo à prática com IA. Acesso vitalício.',
    img: null, // PLACEHOLDER_IMG_3 — adicione /acesso-modulos.webp
  },
  {
    number: 4,
    title: 'Ative seu Notura PRO',
    description:
      'Seu mês de PRO já vem ativo. Defina a senha pelo e-mail do Notura e grave sua primeira reunião.',
    img: null, // PLACEHOLDER_IMG_4 — adicione /acesso-notura-pro.webp
  },
]

// Visual 100% espelhado do HowItWorks: mesma moldura, pill, stagger, animações.
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

export function HowYouGetAccess() {
  return (
    <section id="como-receber" className="py-24 md:py-28 bg-[#FAFAFA]">
      <div className="page-shell">

        {/* Cabeçalho */}
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-16">
          <div className="notura-pill mb-6">🔑 Como Você Recebe</div>
          <h2
            className="font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            Tudo liberado{' '}
            <span style={{ color: '#5341CD' }}>na hora.</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500 leading-[1.75]">
            Do pagamento ao seu primeiro acesso em minutos — sem espera.
          </p>
        </TextReveal>

        {/* Steps escalonados */}
        <div className="flex flex-col gap-14 md:gap-20">
          {STEPS.map((step) => (
            <StepRow key={step.number} step={step} />
          ))}
        </div>

        {/* CTA */}
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
