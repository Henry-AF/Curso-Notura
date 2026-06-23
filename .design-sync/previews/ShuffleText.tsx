import { ShuffleText } from 'notura-landing'

export const Default = () => (
  <h3 style={{ fontSize: 28, fontWeight: 700, color: '#0A0A0A' }}>
    Invista na sua <ShuffleText text="produtividade" duration={1200} fps={24} className="" trigger={false} />
  </h3>
)

export const Settled = () => (
  <p style={{ fontSize: 16, color: '#52525b' }}>
    <ShuffleText text="Texto já revelado, sem efeito" trigger={false} />
  </p>
)
