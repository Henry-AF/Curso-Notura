'use client'
import { CountUp } from '@/components/animations/CountUp'
import { TextReveal } from '@/components/animations/TextReveal'

const stats = [
  { value: 100, suffix: '+', label: 'empresas usando o Notura' },
  { value: 98, suffix: '%', label: 'de satisfação dos usuários' },
  { value: 40, suffix: '%', label: 'menos retrabalho em reuniões' },
  { value: 5, suffix: 'h', label: 'economizadas por semana' },
]

export function AuthorityBar() {
  return (
    <div className="relative bg-white border-t border-b border-zinc-100 py-6 overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(83,65,205,0.02) 50%, transparent)',
        }}
      />

      <div className="page-shell">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {stats.map(({ value, suffix, label }, i) => (
            <TextReveal key={label} delay={i * 100} direction="up">
              <div className="flex items-center gap-3">
                <p
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: '#5341CD' }}
                >
                  <CountUp target={value} suffix={suffix} />
                </p>
                <p className="text-[0.8125rem] text-zinc-500 font-normal leading-tight max-w-[100px]">
                  {label}
                </p>
              </div>

              {i < stats.length - 1 && (
                <div
                  className="hidden sm:block absolute ml-[180px] w-px h-8 bg-[#DDD8F5]"
                  style={{ position: 'relative', display: 'inline-block', width: 1, height: 32, background: '#DDD8F5', marginLeft: 16, verticalAlign: 'middle' }}
                />
              )}
            </TextReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
