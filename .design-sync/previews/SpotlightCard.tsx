import { SpotlightCard } from 'notura-landing'

export const Default = () => (
  <SpotlightCard
    className="rounded-2xl border border-black/10 p-6"
    spotlightColor="rgba(83,65,205,0.13)"
  >
    <div style={{ width: 280 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A', marginBottom: 6 }}>IA que entende a reunião</h3>
      <p style={{ fontSize: 13, color: '#71717a' }}>
        Resumos, decisões e tarefas extraídos automaticamente — sem copiar e colar.
      </p>
    </div>
  </SpotlightCard>
)
