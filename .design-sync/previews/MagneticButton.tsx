import { MagneticButton, GrainientBtn } from 'notura-landing'

export const Default = () => (
  <MagneticButton>
    <GrainientBtn onClick={() => {}}>Quero o combo →</GrainientBtn>
  </MagneticButton>
)

export const StrongerPull = () => (
  <MagneticButton strength={0.45}>
    <button
      style={{
        padding: '12px 24px',
        borderRadius: 999,
        background: '#0A0A0A',
        color: '#fff',
        fontWeight: 600,
        border: 'none',
      }}
    >
      Arraste o mouse perto
    </button>
  </MagneticButton>
)
