'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { GrainientBtn } from '@/components/ui/GrainientBtn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid rgba(221,216,245,0.5)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(83,65,205,0.06)' : 'none',
          transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
        }}
      >
        <div className="page-shell w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 no-underline group">
              <div
                className="w-9 h-9 rounded-[14px] flex items-center justify-center"
                style={{
                  background: 'var(--notura-bg-gradient-grainient)',
                  boxShadow: 'var(--notura-shadow-glow)',
                }}
              >
                <Image src="/logo-notura.svg" alt="Notura" width={20} height={20} />
              </div>
              <span
                className="font-semibold text-base tracking-tight text-[#0A0A0A]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Notura<span className="text-[#5341CD]"> + R.E.U.N.I.R.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8 list-none">
              {[['Funcionalidades', '#funcionalidades'], ['Depoimentos', '#depoimentos'], ['Preços', '#preco']].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm font-medium text-zinc-500 hover:text-[#5341CD] no-underline transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe" magnetic>
                  QUERO ACESSAR AGORA
                </GrainientBtn>
              </div>
              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#DDD8F5] bg-white cursor-pointer text-zinc-600"
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className="fixed inset-x-0 top-[72px] z-40 md:hidden"
        style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #DDD8F5',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 350ms cubic-bezier(0.16,1,0.3,1)',
          boxShadow: '0 12px 40px rgba(83,65,205,0.1)',
        }}
      >
        <div className="page-shell py-6 flex flex-col gap-4">
          {[['Funcionalidades', '#funcionalidades'], ['Depoimentos', '#depoimentos'], ['Preços', '#preco']].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-zinc-700 hover:text-[#5341CD] no-underline py-2 border-b border-[#f4f4f5] transition-colors"
            >
              {label}
            </a>
          ))}
          <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe" size="lg" className="w-full text-center mt-2">
            🚀 QUERO ACESSAR AGORA
          </GrainientBtn>
        </div>
      </div>
    </>
  )
}
