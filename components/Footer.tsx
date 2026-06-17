'use client'
import Image from 'next/image'

const legal = [
  ['Política de Privacidade', '#'],
  ['Termos de Uso', '#'],
  ['LGPD', '#'],
]

const produto = [
  ['Notura App', '#'],
  ['Método R.E.U.N.I.R.', '#'],
  ['Suporte', '#'],
  ['Blog', '#'],
]

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] pt-16 pb-8">
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--notura-bg-gradient-grainient)' }}
              >
                <Image src="/logo-notura.svg" alt="Notura" width={18} height={18} />
              </div>
              <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Notura
              </span>
            </div>
            <p className="text-[0.8125rem] text-[#9B9B9B] leading-[1.7] max-w-[280px]">
              IA para reuniões mais produtivas. Transcreva, resuma e gerencie suas reuniões com automação inteligente.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[0.75rem] font-bold text-white uppercase tracking-[0.1em] mb-4">Legal</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {legal.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-[0.8125rem] text-[#9B9B9B] hover:text-white no-underline transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-[0.75rem] font-bold text-white uppercase tracking-[0.1em] mb-4">Produto</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {produto.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-[0.8125rem] text-[#9B9B9B] hover:text-white no-underline transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[0.75rem] text-zinc-500">
            © 2026 Notura – Todos os direitos reservados. CNPJ XX.XXX.XXX/0001-XX
          </p>
          <div className="flex gap-3">
            {[
              { label: 'In', title: 'Instagram' },
              { label: 'Li', title: 'LinkedIn' },
              { label: 'X', title: 'X / Twitter' },
            ].map(({ label, title }) => (
              <a
                key={label}
                href="#"
                title={title}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[0.75rem] text-[#9B9B9B] no-underline transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7B6FE8'
                  e.currentTarget.style.color = '#7B6FE8'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = '#9B9B9B'
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
