'use client'
import { InfiniteMarquee } from '@/components/animations/InfiniteMarquee'
import { TextReveal } from '@/components/animations/TextReveal'

const testimonials = [
  { text: '"Antes do Notura, nossas reuniões eram buracos negros. Agora saímos com um resumo automático, tarefas definidas e responsáveis. Economizamos pelo menos 3h por semana de retrabalho."', name: 'Ana C.', role: 'Head de Marketing', initials: 'AC', gradient: 'linear-gradient(135deg,#5341CD,#7B6FE8)', stars: 5 },
  { text: '"O Método R.E.U.N.I.R. mudou completamente como eu conduzo reuniões com meu time. A parte de Decisões e Pendências é ouro — o pessoal parou de me perguntar \'o que ficou decidido?\'"', name: 'Rafael S.', role: 'CEO de Startup B2B', initials: 'RS', gradient: 'linear-gradient(135deg,#E43790,#C084FC)', stars: 5 },
  { text: '"Uso o Notura para gravar todas as reuniões de RH. A transcrição em português é excelente, e o resumo automático com categorias me poupa horas de escrever atas manualmente."', name: 'Camila M.', role: 'Gerente de RH', initials: 'CM', gradient: 'linear-gradient(135deg,#0ea5e9,#22c55e)', stars: 5 },
  { text: '"Implementei o método em toda a minha equipe de gestão pública. As reuniões ficaram mais curtas, mais objetivas, e o follow-up nunca mais \'sumiu\'. Recomendo 100%."', name: 'Marcos T.', role: 'Coordenador de Gestão Pública', initials: 'MT', gradient: 'linear-gradient(135deg,#34d399,#0ea5e9)', stars: 5 },
  { text: '"Como consultora, participar de 8+ reuniões por semana era exaustivo. O Notura cuida da documentação pra mim. Agora posso focar 100% na conversa e nas entregas — não em anotações."', name: 'Letícia F.', role: 'Consultora de Estratégia', initials: 'LF', gradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)', stars: 5 },
  { text: '"Implementamos o Notura na área de saúde — reuniões médico-administrativas que antes não tinham registro. Hoje temos histórico completo, com busca por IA. Uma revolução na gestão."', name: 'Dr. Diego L.', role: 'Diretor Médico-Administrativo', initials: 'DL', gradient: 'linear-gradient(135deg,#5341CD,#E43790)', stars: 5 },
  { text: '"Em menos de uma semana já senti a diferença nas nossas reuniões de produto. Cada decisão tem dono, prazo e contexto. O retrabalho caiu drasticamente."', name: 'Beatriz A.', role: 'Product Manager', initials: 'BA', gradient: 'linear-gradient(135deg,#818cf8,#5341CD)', stars: 5 },
  { text: '"A IA do Notura identifica até os itens que ficaram implícitos na conversa. Coisas que ninguém anotaria, mas que eram combinados reais. Isso mudou tudo para o nosso time de vendas."', name: 'Carlos V.', role: 'Diretor Comercial', initials: 'CV', gradient: 'linear-gradient(135deg,#f97316,#ef4444)', stars: 5 },
]

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div
    className="w-[340px] bg-white rounded-[20px] p-7 flex-shrink-0"
    style={{
      border: '1px solid #f4f4f5',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    }}
  >
    <div className="flex gap-1 mb-3">
      {Array.from({ length: item.stars }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
    <p className="text-[0.875rem] leading-[1.7] text-zinc-600 mb-5 italic">{item.text}</p>
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-[0.875rem] font-extrabold text-white flex-shrink-0"
        style={{ background: item.gradient }}
      >
        {item.initials}
      </div>
      <div>
        <p className="text-[0.875rem] font-bold text-[#0A0A0A]">{item.name}</p>
        <p className="text-[0.75rem] text-zinc-400">{item.role}</p>
      </div>
    </div>
  </div>
)

export function TestimonialsSection() {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4)

  return (
    <section
      id="depoimentos"
      className="py-24 md:py-28 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="page-shell mb-12">
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center">
          <div className="notura-pill mb-6">⭐ Depoimentos</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.08] mb-4">
            Quem já testou aprovou
          </h2>
          <p className="text-base md:text-lg text-zinc-600 leading-[1.85]">
            Veja o que líderes e gestores estão falando sobre o Notura + Método R.E.U.N.I.R.
          </p>
        </TextReveal>
      </div>

      {/* ReactBits: Infinite Marquee — two rows, opposite directions */}
      <div className="flex flex-col gap-4">
        <InfiniteMarquee
          items={row1.map((t) => <TestimonialCard key={t.name} item={t} />)}
          direction="left"
          speed={40}
          gap={16}
        />
        <InfiniteMarquee
          items={row2.map((t) => <TestimonialCard key={t.name} item={t} />)}
          direction="right"
          speed={38}
          gap={16}
        />
      </div>
    </section>
  )
}
