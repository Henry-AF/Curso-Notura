import { StaggeredMenu } from 'notura-landing'

const navLinks = [
  { label: 'Funcionalidades', ariaLabel: 'Ver funcionalidades', link: '#funcionalidades' },
  { label: 'A Oferta', ariaLabel: 'Ver a oferta', link: '#oferta' },
  { label: 'Depoimentos', ariaLabel: 'Ver depoimentos', link: '#depoimentos' },
  { label: 'Preços', ariaLabel: 'Ver preços', link: '#preco' },
]

export const Closed = () => (
  <div style={{ position: 'relative', height: 420, background: '#FAFAFA', overflow: 'hidden' }}>
    <StaggeredMenu
      position="right"
      items={navLinks}
      socialItems={[]}
      displaySocials={false}
      displayItemNumbering={false}
      menuButtonColor="#0A0A0A"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen
      colors={['#9B8AFB', '#5341CD']}
      accentColor="#9B8AFB"
      closeOnClickAway
    />
  </div>
)
