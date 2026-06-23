import { ShinyText } from 'notura-landing'

export const Default = () => (
  <div style={{ background: '#0A0A0A', padding: 24, borderRadius: 16 }}>
    <ShinyText text="Método + Tecnologia." color="#9B9B9B" shineColor="#ffffff" speed={3} spread={100} />
  </div>
)

export const OnLightBackground = () => (
  <div style={{ background: '#FAFAFA', padding: 24, borderRadius: 16 }}>
    <ShinyText
      text="Método R.E.U.N.I.R."
      color="#0A0A0A"
      shineColor="#9B8AFB"
      speed={3}
      spread={100}
      direction="left"
    />
  </div>
)

export const PauseOnHover = () => (
  <div style={{ background: '#0A0A0A', padding: 24, borderRadius: 16 }}>
    <ShinyText text="Passe o mouse para pausar" speed={2} pauseOnHover />
  </div>
)
