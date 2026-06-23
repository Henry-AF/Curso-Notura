import { InfiniteMarquee } from 'notura-landing'

const Pill = ({ text }: { text: string }) => (
  <span
    style={{
      display: 'inline-flex',
      padding: '6px 14px',
      borderRadius: 999,
      background: 'rgba(83,65,205,0.07)',
      border: '1px solid rgba(83,65,205,0.15)',
      color: '#5341CD',
      fontSize: 13,
      fontWeight: 500,
      whiteSpace: 'nowrap',
    }}
  >
    {text}
  </span>
)

export const Default = () => (
  <div style={{ width: 480 }}>
    <InfiniteMarquee
      items={[
        <Pill key="1" text="📋 Reunião de alinhamento" />,
        <Pill key="2" text="🎯 Planning de sprint" />,
        <Pill key="3" text="📊 Review de resultados" />,
      ]}
      direction="left"
      speed={30}
      gap={16}
    />
  </div>
)
