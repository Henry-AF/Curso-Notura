'use client'
import { useState } from 'react'
import { TextReveal } from '@/components/animations/TextReveal'
import { GrainientBtn } from '@/components/ui/GrainientBtn'
import { trackEvent } from '@/components/MetaPixel'

const tabs = [
  {
    id: 'ebooks',
    label: 'Guias',
    count: 5,
    items: [
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
        title: 'Guia Definitivo: Reuniões que Decidem',
        desc: 'O framework completo para reuniões com foco em decisões acionáveis, responsáveis claros e follow-up garantido.',
        badge: 'INCLUSO', badgeColor: '#db2777', badgeBg: 'rgba(236,72,153,0.08)',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
        title: 'Método R.E.U.N.I.R. na Prática',
        desc: 'Como aplicar os 6 passos do método em qualquer tipo de reunião — do 1:1 semanal ao comitê executivo.',
        badge: 'INCLUSO', badgeColor: '#db2777', badgeBg: 'rgba(236,72,153,0.08)',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>,
        title: 'IA para Reuniões Produtivas',
        desc: 'Como usar inteligência artificial para extrair decisões, tarefas e insights automaticamente — sem esforço manual.',
        badge: 'INCLUSO', badgeColor: '#db2777', badgeBg: 'rgba(236,72,153,0.08)',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
        title: 'Bônus #1: Checklist do Líder Executivo',
        desc: 'O checklist definitivo para líderes conduzirem reuniões de alto impacto e eliminarem retrabalho.',
        badge: 'BÔNUS', badgeColor: '#7c3aed', badgeBg: 'rgba(124,58,237,0.08)',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
        title: 'Bônus #2: Blueprint da Cultura de Execução',
        desc: 'O passo a passo para transformar reuniões em vantagem competitiva e construir uma cultura onde tudo vira resultado.',
        badge: 'BÔNUS', badgeColor: '#7c3aed', badgeBg: 'rgba(124,58,237,0.08)',
      },
    ],
  },
  {
    id: 'app',
    label: 'App Notura',
    count: null,
    items: [
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
        title: '1 Mês de Acesso PRO ao Notura',
        desc: 'App completo com gravação, transcrição, IA, Kanban e busca inteligente — por 30 dias.',
        badge: '🌟 STAR', badgeColor: '#d97706', badgeBg: 'rgba(217,119,6,0.08)',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
        title: 'Gravação de Reuniões (Presencial + Remota)',
        desc: 'Grave diretamente no app — sem integrações externas, funciona offline e online.',
        badge: null, badgeColor: '', badgeBg: '',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
        title: 'Transcrição + Resumo Automático com IA',
        desc: 'Decisões, riscos, pendências e insights extraídos automaticamente em PT-BR.',
        badge: null, badgeColor: '', badgeBg: '',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="9" y2="9"/><line x1="3" y1="15" x2="9" y2="15"/></svg>,
        title: 'Kanban de Tarefas',
        desc: 'Tarefas criadas automaticamente da reunião, organizadas por responsável e prazo.',
        badge: null, badgeColor: '', badgeBg: '',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
        title: 'Busca Inteligente no Histórico',
        desc: 'Pergunte à IA sobre qualquer reunião passada e receba respostas em segundos.',
        badge: null, badgeColor: '', badgeBg: '',
      },
    ],
  },
  {
    id: 'bonus',
    label: 'Bônus',
    count: 3,
    items: [
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
        title: 'Templates e Checklists Editáveis',
        desc: 'Pauta pré-reunião, ATA estruturada, checklist de follow-up — prontos para usar agora.',
        badge: 'BÔNUS', badgeColor: '#7c3aed', badgeBg: 'rgba(124,58,237,0.08)',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/></svg>,
        title: 'Comunidade VIP no Telegram',
        desc: 'Acesso ao grupo exclusivo com suporte direto, trocas de experiências e atualizações.',
        badge: 'BÔNUS', badgeColor: '#7c3aed', badgeBg: 'rgba(124,58,237,0.08)',
      },
      {
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5341CD" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
        title: 'Atualizações Gratuitas para Sempre',
        desc: 'Novos guias, conteúdos e melhorias do app — sem pagar nada a mais.',
        badge: 'BÔNUS', badgeColor: '#7c3aed', badgeBg: 'rgba(124,58,237,0.08)',
      },
    ],
  },
]

const valueLines = [
  { label: '5 Guias R.E.U.N.I.R.',   price: 'R$ 147' },
  { label: '1 mês Notura PRO',         price: 'R$ 97'  },
  { label: 'Templates + Checklists',   price: 'R$ 49'  },
  { label: 'Comunidade VIP',           price: 'R$ 49'  },
]

export function OfferSection() {
  const [activeTab, setActiveTab] = useState('ebooks')
  const current = tabs.find((t) => t.id === activeTab)!

  return (
    <section id="oferta" className="py-24 md:py-28 bg-white">
      <div className="page-shell">

        {/* Header */}
        <TextReveal direction="up" className="max-w-3xl mx-auto text-center mb-14">
          <div className="notura-pill mb-6">📦 A Oferta</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] text-[#0A0A0A] leading-[1.08] mb-4">
            O Combo Completo para Reuniões Produtivas
          </h2>
          <p className="text-base md:text-lg text-zinc-600 leading-[1.85]">
            Tudo que você precisa para transformar reuniões em resultados — e ainda com bônus exclusivos para os primeiros.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left — Tabs + list */}
          <TextReveal direction="up" delay={100}>
            <div>
              {/* Tab bar */}
              <div
                className="flex items-center gap-1 p-1 rounded-full mb-6 w-fit max-w-full overflow-x-auto"
                style={{ background: '#5341CD' }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.8125rem] font-medium transition-all duration-200 cursor-pointer border-none"
                    style={{
                      background: activeTab === tab.id ? '#ffffff' : 'transparent',
                      color: activeTab === tab.id ? '#0A0A0A' : 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {tab.label}
                    {tab.count !== null && (
                      <span
                        className="text-[0.625rem] font-bold px-1.5 py-0.5 rounded-full leading-none"
                        style={{
                          background: activeTab === tab.id ? '#5341CD' : 'rgba(255,255,255,0.2)',
                          color: '#fff',
                        }}
                      >
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Item list */}
              <div className="flex flex-col">
                {current.items.map(({ icon, title, desc, badge, badgeColor, badgeBg }, i) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 py-4"
                    style={{
                      borderBottom: i < current.items.length - 1 ? '1px solid #f4f4f5' : 'none',
                    }}
                  >
                    {/* Ícone SVG */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(83,65,205,0.08)' }}
                    >
                      {icon}
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <span className="text-[0.875rem] font-semibold text-[#0A0A0A]">{title}</span>
                        {badge && (
                          <span
                            className="text-[0.5625rem] font-bold uppercase tracking-wider rounded-full px-2 py-0.5"
                            style={{ color: badgeColor, background: badgeBg }}
                          >
                            {badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[0.75rem] text-zinc-500 leading-[1.55]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TextReveal>

          {/* Right — Sticky highlight card */}
          <TextReveal direction="right" delay={200}>
            <div
              className="rounded-[32px] border border-[#DDD8F5] p-9 text-center sticky top-24"
              style={{ background: 'linear-gradient(135deg, #EEF0FF 0%, #fff 100%)' }}
            >
              {/* Avatar group — social proof */}
              <div className="flex flex-col items-center gap-2 mb-5">
                <div className="flex -space-x-2">
                  {[
                    { src: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg',   fb: 'JD' },
                    { src: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg',  fb: 'KW' },
                    { src: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg', fb: 'EC' },
                    { src: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg', fb: 'MB' },
                    { src: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg',    fb: 'OD' },
                  ].map((u, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white flex-shrink-0"
                      style={{ zIndex: 5 - i }}
                    >
                      <img
                        src={u.src}
                        alt={u.fb}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                    </div>
                  ))}
                  <div
                    className="w-8 h-8 rounded-full ring-2 ring-white flex items-center justify-center text-[0.5625rem] font-bold text-white flex-shrink-0"
                    style={{ background: '#5341CD', zIndex: 0 }}
                  >
                    +95
                  </div>
                </div>
                <p className="text-[0.75rem] text-zinc-500 text-center leading-[1.5]">
                  <span className="font-semibold text-[#0A0A0A]">+100 pessoas</span>{' '}
                  já compraram essa oferta
                </p>
              </div>

              <div className="text-[2rem] mb-3">🎯</div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 tracking-tight">
                Tudo que você precisa em um único lugar
              </h3>
              <p className="text-[0.875rem] text-zinc-600 mb-6">Método + App + Suporte + Templates</p>

              <div className="flex flex-col gap-2 mb-6">
                {valueLines.map(({ label, price }) => (
                  <div key={label} className="flex justify-between items-center text-[0.8125rem] text-zinc-500">
                    <span>{label}</span>
                    <span className="font-semibold text-[#0A0A0A]">{price}</span>
                  </div>
                ))}
                <div className="h-px border-t border-dashed border-[#DDD8F5] my-1" />
                <div className="flex justify-between items-center text-[0.8125rem] text-zinc-400">
                  <span className="line-through">Valor real</span>
                  <span className="line-through">R$ 342</span>
                </div>
              </div>

              <p className="text-[0.75rem] text-zinc-500 leading-[1.6] mb-5">
                Só o mês de Notura PRO já vale R$97. O método completo e os bônus vêm junto — praticamente de graça.
              </p>

              <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe" className="w-full justify-center" magnetic onClick={() => trackEvent('InitiateCheckout')}>
                Quero o combo →
              </GrainientBtn>
            </div>
          </TextReveal>

        </div>
      </div>
    </section>
  )
}
