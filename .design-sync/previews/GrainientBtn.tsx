import { GrainientBtn } from 'notura-landing'

export const Default = () => (
  <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe">Quero o combo →</GrainientBtn>
)

export const Small = () => (
  <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe" size="sm">
    Quero o combo →
  </GrainientBtn>
)

export const Large = () => (
  <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe" size="lg" magnetic>
    🚀 Quero o combo por R$97,90
  </GrainientBtn>
)

export const FullWidthButton = () => (
  <div style={{ width: 320 }}>
    <GrainientBtn onClick={() => {}} className="w-full justify-center">
      Ver oferta especial →
    </GrainientBtn>
  </div>
)
