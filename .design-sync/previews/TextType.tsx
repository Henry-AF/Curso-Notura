import { TextType } from 'notura-landing'

export const Default = () => (
  <TextType
    text="Transforme reuniões em resultado"
    typingSpeed={1}
    initialDelay={0}
    loop={false}
    showCursor={false}
    className="text-xl font-bold"
    style={{ color: '#0A0A0A' }}
  />
)

export const MultipleLines = () => (
  <TextType
    text={['Decisões claras.', 'Tarefas com dono.', 'Resultado real.']}
    typingSpeed={1}
    loop
    showCursor
    cursorCharacter="|"
    className="text-lg font-semibold"
    style={{ color: '#5341CD' }}
  />
)
