'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { GrainientBtn } from '@/components/ui/GrainientBtn'
import { trackEvent } from '@/components/MetaPixel'
import { StaggeredMenu } from '@/components/ui/StaggeredMenu/StaggeredMenu'

const navLinks = [
  { label: 'Funcionalidades', ariaLabel: 'Ver funcionalidades', link: '#funcionalidades' },
  { label: 'A Oferta',        ariaLabel: 'Ver a oferta',        link: '#oferta'          },
  { label: 'Depoimentos',     ariaLabel: 'Ver depoimentos',     link: '#depoimentos'     },
  { label: 'Preços',          ariaLabel: 'Ver preços',          link: '#preco'           },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handlePanelLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      e.preventDefault()

      // Fechar o menu StaggeredMenu clicando no toggle se estiver aberto
      const wrapper = document.querySelector('.staggered-menu-wrapper')
      const isOpen = wrapper?.hasAttribute('data-open')
      if (isOpen) {
        const toggleBtn = document.querySelector('.sm-toggle') as HTMLButtonElement | null
        toggleBtn?.click()
      }

      // Scroll suave com pequeno delay para aguardar animação de fechar
      setTimeout(() => {
        const section = document.querySelector(href)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        document.body.style.overflow = ''
      }, 320)
    }

    document.addEventListener('click', handlePanelLinkClick)
    return () => document.removeEventListener('click', handlePanelLinkClick)
  }, [])

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[72px] items-center hidden md:flex"
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

            {/* Links */}
            <ul className="flex items-center gap-8 list-none">
              {navLinks.map(({ label, link }) => (
                <li key={label}>
                  <a
                    href={link}
                    className="text-sm font-medium text-zinc-500 hover:text-[#5341CD] no-underline transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <GrainientBtn href="https://pay.kiwify.com.br/sNuERYe" magnetic onClick={() => trackEvent('InitiateCheckout')}>
              Quero o combo →
            </GrainientBtn>
          </div>
        </div>
      </nav>

      {/* ── MOBILE NAVBAR com StaggeredMenu ── */}
      <div
        className="fixed top-0 left-0 right-0 md:hidden"
        style={{
          height: '100dvh',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      >
        {/* Fundo da navbar — só os 72px do topo */}
        <div
          className="absolute top-0 left-0 right-0 h-[72px]"
          style={{
            background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderBottom: scrolled
              ? '1px solid rgba(221,216,245,0.5)'
              : '1px solid transparent',
            boxShadow: scrolled ? '0 2px 20px rgba(83,65,205,0.06)' : 'none',
            transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
            pointerEvents: 'none',
          }}
        />

        {/* Logo à esquerda */}
        <div
          className="absolute top-0 left-0 h-[72px] flex items-center px-5"
          style={{ pointerEvents: 'auto', zIndex: 60 }}
        >
          <a href="#" className="flex items-center gap-2 no-underline">
            <div
              className="w-8 h-8 rounded-[12px] flex items-center justify-center"
              style={{
                background: 'var(--notura-bg-gradient-grainient)',
                boxShadow: 'var(--notura-shadow-glow)',
              }}
            >
              <Image src="/logo-notura.svg" alt="Notura" width={18} height={18} />
            </div>
            <span
              className="font-semibold text-sm tracking-tight text-[#0A0A0A]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Notura<span className="text-[#5341CD]"> + R.E.U.N.I.R.</span>
            </span>
          </a>
        </div>

        {/* StaggeredMenu — ocupa height total para o painel funcionar */}
        <div
          className="absolute inset-0"
          style={{ pointerEvents: 'none' }}
        >
          <StaggeredMenu
            position="right"
            items={navLinks}
            socialItems={[]}
            displaySocials={false}
            displayItemNumbering={false}
            menuButtonColor="#0A0A0A"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={true}
            colors={['#9B8AFB', '#5341CD']}
            logoUrl=""
            accentColor="#9B8AFB"
            closeOnClickAway={true}
            onMenuOpen={() => { document.body.style.overflow = 'hidden' }}
            onMenuClose={() => { document.body.style.overflow = '' }}
          />
        </div>
      </div>

      {/* Spacer para compensar navbar fixa */}
      <div className="h-[72px]" />
    </>
  )
}
