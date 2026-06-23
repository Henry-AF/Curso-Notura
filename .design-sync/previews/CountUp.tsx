import { CountUp } from 'notura-landing'

export const Stats = () => (
  <div style={{ display: 'flex', gap: 24 }}>
    <p style={{ fontSize: 28, fontWeight: 700, color: '#5341CD' }}>
      <CountUp target={500} suffix="+" />
    </p>
    <p style={{ fontSize: 28, fontWeight: 700, color: '#5341CD' }}>
      <CountUp target={98} suffix="%" />
    </p>
    <p style={{ fontSize: 28, fontWeight: 700, color: '#5341CD' }}>
      <CountUp target={3} suffix="h" />
    </p>
  </div>
)
