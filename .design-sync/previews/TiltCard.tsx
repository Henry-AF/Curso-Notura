import { TiltCard } from 'notura-landing'

export const Default = () => (
  <TiltCard className="rounded-2xl border border-black/10 p-6" style={{ width: 280, background: '#fff' }}>
    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A', marginBottom: 6 }}>Kanban de tarefas</h3>
    <p style={{ fontSize: 13, color: '#71717a' }}>Tarefas criadas automaticamente da reunião, organizadas por dono e prazo.</p>
  </TiltCard>
)

export const NoGlare = () => (
  <TiltCard glare={false} className="rounded-2xl border border-black/10 p-6" style={{ width: 280, background: '#fff' }}>
    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A', marginBottom: 6 }}>Busca inteligente</h3>
    <p style={{ fontSize: 13, color: '#71717a' }}>Histórico pesquisável — pergunte à IA sobre qualquer reunião passada.</p>
  </TiltCard>
)
