import { TextReveal } from 'notura-landing'

export const Up = () => (
  <TextReveal direction="up" delay={0}>
    <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0A0A0A' }}>Conheça o Método R.E.U.N.I.R.</h3>
  </TextReveal>
)

export const Blur = () => (
  <TextReveal direction="blur" delay={0}>
    <p style={{ fontSize: 16, color: '#52525b' }}>Revela com leve desfoque, do jeito que aparece na LP.</p>
  </TextReveal>
)

export const FromLeft = () => (
  <TextReveal direction="left" delay={0}>
    <span style={{ fontSize: 16, fontWeight: 600, color: '#5341CD' }}>Entra deslizando da esquerda</span>
  </TextReveal>
)
