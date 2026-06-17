# Notura — Design System

> Documentação completa do design system da landing page Notura. Extraída diretamente do código-fonte em `artifacts/notura/`.

---

## Índice

1. [Tokens de Cor](#1-tokens-de-cor)
2. [Tipografia](#2-tipografia)
3. [Espaçamento](#3-espaçamento)
4. [Border Radius](#4-border-radius)
5. [Sombras](#5-sombras)
6. [Gradientes](#6-gradientes)
7. [Animações](#7-animações)
8. [Breakpoints](#8-breakpoints)
9. [Padrões de Componente](#9-padrões-de-componente)
10. [Ícones](#10-ícones)
11. [Inventário de Componentes](#11-inventário-de-componentes)
12. [Stack Técnica](#12-stack-técnica)

---

## 1. Tokens de Cor

### Cores da Marca (CSS Custom Properties)

| Token | Valor | Uso |
|---|---|---|
| `--notura-primary` | `#5341CD` | Roxo primário da marca |
| `--notura-primary-light` | `#7B6FE8` | Roxo claro |
| `--notura-primary-dark` | `#4333B8` | Roxo escuro |
| `--notura-primary-glow` | `rgba(83,65,205,0.3)` | Efeito glow |
| `--notura-secondary` | `#7B6FE8` | Cor secundária |
| `--notura-processing` | `#E43790` | Pink/magenta — estados de processamento |
| `--notura-success` | `#22C55E` | Verde — estados de sucesso |
| `--notura-violet-50` | `#EEF0FF` | Background violeta muito claro |
| `--notura-violet-200` | `#DDD8F5` | Bordas e acentos violeta claro |

### Tokens Semânticos — Light Mode (HSL)

| Token | Valor HSL | Equivalente |
|---|---|---|
| `--background` | `240 10% 98%` | Off-white |
| `--foreground` | `240 10% 10%` | Texto escuro |
| `--border` | `240 5% 90%` | Borda clara |
| `--card` | `0 0% 100%` | Branco |
| `--card-foreground` | `240 10% 10%` | |
| `--card-border` | `240 5% 90%` | |
| `--primary` | `248 58% 53%` | Roxo-azulado primário |
| `--primary-foreground` | `0 0% 100%` | Branco |
| `--secondary` | `240 5% 96%` | Cinza muito claro |
| `--secondary-foreground` | `240 10% 10%` | |
| `--muted` | `240 5% 96%` | Background muted |
| `--muted-foreground` | `240 5% 45%` | Texto muted |
| `--accent` | `232 100% 96%` | Accent claro |
| `--accent-foreground` | `248 58% 53%` | |
| `--destructive` | `0 84% 60%` | Vermelho |
| `--destructive-foreground` | `0 0% 100%` | Branco |
| `--input` | `240 5% 90%` | Input background |
| `--ring` | `248 58% 53%` | Focus ring |

### Tokens Semânticos — Dark Mode (HSL)

| Token | Valor HSL |
|---|---|
| `--background` | `240 10% 4%` |
| `--foreground` | `0 0% 98%` |
| `--border` | `240 5% 15%` |
| `--card` | `240 10% 6%` |
| `--primary` | `248 58% 62%` |
| `--secondary` | `240 5% 15%` |
| `--muted` | `240 5% 15%` |
| `--muted-foreground` | `240 5% 65%` |
| `--accent` | `248 30% 18%` |
| `--accent-foreground` | `248 58% 78%` |
| `--ring` | `248 58% 62%` |

### Tokens Utilitários (Elevation / Outline)

```css
/* Light Mode */
--button-outline:  rgba(0, 0, 0, 0.10);
--badge-outline:   rgba(0, 0, 0, 0.05);
--elevate-1:       rgba(0, 0, 0, 0.03);
--elevate-2:       rgba(0, 0, 0, 0.08);

/* Dark Mode */
--button-outline:  rgba(255, 255, 255, 0.10);
--badge-outline:   rgba(255, 255, 255, 0.05);
--elevate-1:       rgba(255, 255, 255, 0.04);
--elevate-2:       rgba(255, 255, 255, 0.09);
```

### Cores Semânticas de Ícones (Seção Pricing)

| Ícone | Cor | Background |
|---|---|---|
| Sparkles | `#9598A8` | `rgba(149,152,168,0.12)` |
| Users | `#10B981` | `rgba(16,185,129,0.12)` |
| Zap | `#6851FF` | `rgba(104,81,255,0.15)` |
| Building2 | `#06B6D4` | `rgba(6,182,212,0.12)` |

### Cores de Use Cases (Silk / Orb)

| Caso | Hue | Cor principal |
|---|---|---|
| Saúde | `160` | `#0ea5e9` (cyan) |
| Startups | `260` | `#5341CD` (brand purple) |
| RH | `320` | `#f472b6` (pink) |
| Gestão Pública | `120` | `#34d399` (green) |
| Consultoria | `30` | `#fbbf24` (amber) |

### Escala de Cinzas (uso em componentes)

| Valor | Uso |
|---|---|
| `#0A0A0A` | Texto principal |
| `#0F0F0F` | Background do footer |
| `#120F17` | Overlay escuro |
| `#F8F8FC` | Background claro |
| `#fcfcfe` | Background muito claro |
| `#F0F0F0` | Bordas claras |
| `#9B9B9B` | Texto do footer |
| Escala Tailwind `zinc-50` → `zinc-950` | Hierarquia de cinzas |

---

## 2. Tipografia

### Famílias de Fonte

```css
--app-font-sans:    'Poppins', sans-serif;
--app-font-serif:   Georgia, serif;
--app-font-mono:    Menlo, monospace;
--app-font-display: 'Poppins', sans-serif;
```

**Google Fonts (import URL):**
```
Poppins:wght@400;500;600;700;800
Bricolage Grotesque:wght@400;500;600;700;800
DM Sans:wght@400;500;700
Plus Jakarta Sans:wght@400;500;600;700;800
Inter:wght@300;400;500;600;700
```

> **Fonte principal da marca:** `Poppins` — usada em display e body.

### Escala de Tamanhos (uso em componentes)

| Classe Tailwind | Tamanho | Uso |
|---|---|---|
| `text-[11px]` | 11px | Meta, badge text, step badge |
| `text-xs` | 12px | Legenda, caption |
| `text-sm` | 14px | Botões, labels |
| `text-base` | 16px | Body text padrão |
| `text-lg` | 18px | Body text ênfase |
| `text-xl` | 20px | Card titles |
| `text-3xl` | 30px | Section titles mobile |
| `text-4xl` | 36px | Section titles tablet |
| `text-5xl` | 48px | Section titles desktop |
| `text-[3.25rem]` | 52px | Hero h1 tablet |
| `text-[3.5rem]` | 56px | Hero h1 desktop |

### Padrões de Headings

```
H1 (Hero):
  font-display text-5xl font-bold tracking-[-0.03em] leading-[1.15]
  md:text-[3.25rem]  lg:text-[3.5rem]

H2 (Section title):
  font-display text-3xl font-bold tracking-[-0.03em] text-zinc-900
  md:text-5xl

  Variante escura:
  font-display text-4xl font-black tracking-tight text-[#0A0A0A]
  md:text-5xl  (classe: .notura-section-title)

H3 (Cards):
  text-base font-bold text-zinc-900
  ou font-display text-xl font-bold
```

### Pesos

| Valor | Classe Tailwind |
|---|---|
| 300 | `font-light` |
| 400 | `font-normal` |
| 500 | `font-medium` |
| 600 | `font-semibold` |
| 700 | `font-bold` |
| 800 | `font-extrabold` / `font-black` |

### Letter Spacing

| Classe | Valor | Uso |
|---|---|---|
| `tracking-[-0.03em]` | -0.03em | Títulos H1/H2 |
| `tracking-[-0.02em]` | -0.02em | Subtítulos |
| `tracking-tight` | -0.025em | Nav brand |
| `tracking-widest` | 0.1em | Labels UPPERCASE |

### Line Height

| Classe | Valor | Uso |
|---|---|---|
| `leading-none` | 1 | Compacto |
| `leading-[1.08]` | 1.08 | Section titles |
| `leading-[1.15]` | 1.15 | Hero H1 |
| `leading-snug` | 1.375 | Tight |
| `leading-7` | 1.75rem | Body dense |
| `leading-relaxed` | 1.625 | Body padrão |

### Classes CSS Customizadas

```css
.notura-section-title {
  font-family: var(--app-font-display);
  font-size: clamp(2.25rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #0A0A0A;
}

.notura-muted {
  font-size: 1rem;
  line-height: 1.75;
  color: theme(colors.zinc.500);
  /* md: text-lg */
}
```

---

## 3. Espaçamento

### Variáveis de Radius

```css
--radius:    0.75rem;  /* 12px — base */
--radius-sm: calc(var(--radius) - 4px);  /* 8px */
--radius-md: calc(var(--radius) - 2px);  /* 10px */
--radius-lg: var(--radius);              /* 12px */
--radius-xl: calc(var(--radius) + 4px);  /* 16px */
--notura-radius-xl:   24px;
--notura-radius-2xl:  32px;
--notura-radius-full: 9999px;
```

### Padding por Seção (vertical)

| Seção | Mobile | Desktop |
|---|---|---|
| Navbar | `h-18` (72px) | `h-18` |
| Hero | `pt-28 pb-20` | `pt-36 pb-32` |
| Sections | `py-24` | `py-28` a `py-32` |
| Newsletter | `py-20` | `py-24` |
| Authority Bar | `py-6` | `py-6` |
| Footer | `py-16` | `py-16` |

### Padding Horizontal (container)

```
px-4  →  sm:px-6  →  lg:px-8
```

### Larguras de Container

| Classe | Largura | Uso |
|---|---|---|
| `.page-shell` / `max-w-[1280px]` | 1280px | Container principal da página |
| `max-w-5xl` | 1024px | Conteúdo de seções |
| `max-w-3xl` | 768px | Áreas de título |
| `max-w-2xl` | 672px | Blocos de texto |
| `max-w-xl` | 576px | Texto estreito |
| `max-w-sm` | 384px | Sidebars |

---

## 4. Border Radius

| Classe | Valor | Uso |
|---|---|---|
| `rounded-md` | 6px | Elementos pequenos |
| `rounded-xl` | 12px | Cards menores, containers de ícones |
| `rounded-2xl` | 16px | Cards principais |
| `rounded-[16px]` | 16px | Embed de vídeo |
| `rounded-[18px]` | 18px | Logo da marca |
| `rounded-[20px]` | 20px | Itens de nav mobile |
| `rounded-[40px]` | 40px | Frame do mockup do telefone |
| `rounded-full` | 9999px | Botões pill, badges, avatars |

---

## 5. Sombras

### CSS Custom Properties

```css
--notura-shadow-glow:     0 6px 24px rgba(83, 65, 205, 0.20);
--notura-shadow-elevated: 0 2px 12px rgba(0, 0, 0, 0.06);
```

### Shadows por Contexto

| Contexto | Valor |
|---|---|
| Hero video | `0 20px 60px rgba(83,65,205,0.18)` |
| Logo da marca | `var(--notura-shadow-glow)` |
| GrainientButton | `var(--notura-shadow-glow)` |
| Cards de depoimento | `0 2px 12px rgba(0,0,0,0.04)` |
| Cards de depoimento (hover) | `0 8px 32px rgba(83,65,205,0.10)` |
| HowItWorks imagens | `0 2px 16px rgba(0,0,0,0.08)` |
| Newsletter button hover | `shadow-xl` |
| Mockup | `drop-shadow-2xl` |

---

## 6. Gradientes

### CSS Custom Properties

```css
--notura-bg-gradient-mesh:
  linear-gradient(135deg, #FAFAFA 0%, #EEF0FF 55%, #FFFFFF 100%);

--notura-bg-gradient-violet:
  linear-gradient(135deg, #5341CD 0%, #7B6FE8 100%);

--notura-bg-gradient-grainient:
  linear-gradient(135deg, #9B8AFB 0%, #5341CD 55%, #3B28A8 100%);
```

### Gradiente Animado do Hero (texto)

```js
// Framer Motion - GradientText
colors: ["#9B8AFB", "#5341CD", "#C084FC", "#5341CD", "#9B8AFB"]
animationSpeed: 6  // segundos, efeito yoyo
```

### Camadas Silk (Newsletter)

```css
/* Camada 1 (opacity 60%) */
radial-gradient(ellipse 80% 60% at 20% 40%, #7B6FE8 0%, transparent 60%),
radial-gradient(ellipse 60% 80% at 80% 20%, #9B8AFB 0%, transparent 55%),
radial-gradient(ellipse 70% 50% at 50% 80%, #4333B8 0%, transparent 60%)

/* Camada 2 (opacity 30%) */
radial-gradient(ellipse 100% 40% at 60% 60%, #C084FC 0%, transparent 50%),
radial-gradient(ellipse 50% 70% at 10% 80%, #818CF8 0%, transparent 55%)
```

### Gradientes Placeholder (HowItWorks)

```
Passo 1: from-violet-400 to-indigo-500
Passo 2: from-purple-400 to-violet-600
Passo 3: from-indigo-400 to-blue-500
Passo 4: from-violet-500 to-purple-700
```

---

## 7. Animações

### Keyframes (index.css)

```css
@keyframes notura-grainient-shift {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}

@keyframes notura-float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}

@keyframes notura-pulse-slow {
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50%       { opacity: 0.9;  transform: scale(1.04); }
}

@keyframes notura-marquee {
  from { transform: translateX(0%); }
  to   { transform: translateX(-50%); }
}

@keyframes notura-wave {
  0%, 100% { transform: scaleY(0.45); opacity: 0.55; }
  50%       { transform: scaleY(1);    opacity: 1; }
}

@keyframes morphOrb {
  0%, 100% { transform: rotate(0deg)   scale(1);    border-radius: 44% 56% 58% 42% / 44% 45% 55% 56%; }
  33%       { transform: rotate(120deg) scale(1.03); border-radius: 56% 44% 48% 52% / 58% 37% 63% 42%; }
  66%       { transform: rotate(240deg) scale(0.98); border-radius: 47% 53% 43% 57% / 39% 58% 42% 61%; }
}

@keyframes silkShift {
  0%   { transform: scale(1)    translate(0%,  0%); }
  33%  { transform: scale(1.08) translate(3%, -2%); }
  66%  { transform: scale(0.96) translate(-2%, 4%); }
  100% { transform: scale(1.04) translate(1%, -3%); }
}
```

### Classes Utilitárias de Animação

| Classe | Keyframe | Duração |
|---|---|---|
| `.animate-float` | `notura-float` | 6s ease-in-out infinite |
| `.animate-pulse-slow` | `notura-pulse-slow` | 6s ease-in-out infinite |
| `.animate-marquee` | `notura-marquee` | 18s linear infinite |
| `.animate-wave` | `notura-wave` | 1.2s ease-in-out infinite |
| `.animate-morph-orb` | `morphOrb` | 6s ease-in-out infinite |

### Variantes Framer Motion (`src/lib/animations.ts`)

```ts
fadeInUp:    { opacity: 0→1, y: 24→0,  duration: 0.5s,  easing: easeOut }
stagger:     { staggerChildren: 0.1s }
scaleIn:     { opacity: 0→1, scale: 0.95→1, duration: 0.4s, easing: easeOut }
slideInLeft: { opacity: 0→1, x: -28→0, duration: 0.55s, easing: easeOut }
slideInRight:{ opacity: 0→1, x: 28→0,  duration: 0.55s, easing: easeOut }
```

**Easing personalizado:** `[0, 0, 0.2, 1]` (cubic-bezier easeOut)

### Durações de Transição

| Token | Valor | Uso |
|---|---|---|
| `duration-200` | 200ms | Hovers rápidos |
| `duration-300` | 300ms | Padrão |
| `duration-350` | 350ms | Transições de UI |
| `duration-500` | 500ms | Gradient text |
| `duration-22` | 22ms | FAQ expand |

---

## 8. Breakpoints

| Prefixo | Largura | Descrição |
|---|---|---|
| (sem prefixo) | 0px+ | Mobile first |
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets / small desktop |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |

### Padrões Responsivos Comuns

```
Grid:    grid-cols-1  →  sm:grid-cols-2  →  lg:grid-cols-3
Títulos: text-3xl     →  md:text-4xl     →  lg:text-5xl
Padding: px-4         →  sm:px-6         →  lg:px-8
Flex:    flex-col     →  md:flex-row
Gap:     gap-4        →  md:gap-6        →  lg:gap-8
```

---

## 9. Padrões de Componente

### Botões

**GrainientButton (primário):**
```
background: var(--notura-bg-gradient-grainient)
border-radius: 9999px (rounded-full)
padding: px-7 py-3
font: text-sm font-semibold
color: white
hover: translateY(-1px) + shadow-glow
```

**Botão Secundário (`.notura-button-secondary`):**
```
background: transparent
border: solid, primary color
color: primary color
border-radius: rounded-full
padding: px-7 py-3
```

### Badges / Pills

**`.notura-pill`:**
```
background: var(--notura-violet-50)   → #EEF0FF
border: 1px solid var(--notura-violet-200)  → #DDD8F5
color: var(--notura-primary)          → #5341CD
border-radius: rounded-full
padding: px-4 py-2
font-weight: medium
```

**Badge de Pricing:**
```
background: #5341CD / 10%
padding: px-2.5 py-0.5
font: text-[11px] font-bold
color: #5341CD
```

**Badge de Step:**
```
background: #5341CD
padding: px-3 py-1
font: text-[11px] font-bold uppercase tracking-wider
color: white
```

### Cards

**`.notura-card`:**
```
border-radius: var(--notura-radius-2xl)   → 32px
border: 1px solid var(--notura-violet-200)
background: white
box-shadow: var(--notura-shadow-elevated)
```

**Card de Depoimento:**
```
border-radius: rounded-2xl
border: 1px solid rgba(83,65,205,0.30)
background: white
padding: p-7
box-shadow: 0 2px 12px rgba(0,0,0,0.04)
hover → border: rgba(83,65,205,0.60)
hover → shadow: 0 8px 32px rgba(83,65,205,0.10)
```

**Card de Pricing:**
```
border-radius: rounded-2xl
background: white
padding: p-5
(variações de borda e background por plano)
```

### Seções

**Estrutura padrão de seção:**
```html
<section class="py-24 md:py-28">
  <div class="page-shell">     <!-- max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -->
    <div class="mx-auto max-w-3xl text-center mb-14 md:mb-16">
      <!-- pill label -->
      <!-- .notura-section-title -->
      <!-- .notura-muted -->
    </div>
    <!-- grid / flex content -->
  </div>
</section>
```

### Efeito Grain (`.notura-grainient`)

```css
.notura-grainient::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");  /* SVG fractal noise */
  opacity: 0.12;
  mix-blend-mode: overlay;
  background-size: 160px;
  border-radius: inherit;
  pointer-events: none;
}
```

### Navbar

```
height: h-18 (72px)
background scrolled: bg-white/80 backdrop-blur-md
mobile nav button: rounded-full border border-[--notura-violet-200] bg-white/80
```

### Inputs (Newsletter)

```
height: h-15 (60px)
border-radius: rounded-full
border: 1px solid rgba(255,255,255,0.20)
background: rgba(255,255,255,0.15)
padding: px-6
color: white
placeholder: rgba(255,255,255,0.50)
focus → border: rgba(255,255,255,0.40)
focus → background: rgba(255,255,255,0.20)
focus → ring: 2px rgba(255,255,255,0.20)
```

---

## 10. Ícones

### Lucide React (biblioteca principal)

```
ArrowRight, ArrowLeft, Menu, X, ChevronDown, Check,
Sparkles, Zap, Users, Building2
```

**Tamanhos:**
- `h-4 w-4` — pequeno
- `h-5 w-5` — padrão
- `h-9 w-9` — nav / features

### React Icons (secundária)

Importada mas usada pontualmente.

### Emoji como ícones (Features)

```
🎙️  Gravação de reuniões
🧠  Análise por IA
📄  Geração de resumos
🔍  Busca inteligente
👥  Colaboração em equipe
📁  Organização automática
```

### SVG Customizado — Logo Notura

```
viewBox="0 0 48 48"
Linha de gráfico + círculos ponteiros
Cor: var(--notura-primary)
```

### Container de Ícones

```
Quadrado: flex h-10 w-10 items-center justify-center rounded-xl
Círculo:  flex h-10 w-10 items-center justify-center rounded-full
Background: cor semântica com 12–15% de opacidade
```

---

## 11. Inventário de Componentes

### Landing Page (`src/components/landing/`)

| Componente | Descrição |
|---|---|
| `Navbar.tsx` | Header fixo com logo, links de nav, CTA e menu mobile |
| `Hero.tsx` | Hero com texto gradiente animado e embed de vídeo |
| `SocialProofFullWidth.tsx` | Marquee com logos de clientes |
| `AuthorityBar.tsx` | Bar de métricas em 3 colunas |
| `Features.tsx` | Grid 3 colunas com mockup central |
| `UseCases.tsx` | Interface em abas com animação WebGL Orb |
| `HowItWorks.tsx` | Processo em 4 passos com grid offset |
| `Testimonials.tsx` | Cards de depoimento filtráveis (grade 3×2) |
| `Pricing.tsx` | 4 planos com toggle mensal/anual |
| `FAQ.tsx` | Accordion com 6 perguntas e layout sidebar |
| `Newsletter.tsx` | Captura de e-mail com background silk texturizado |
| `Footer.tsx` | Footer com logo, colunas de links e ícones sociais |
| `constants.ts` | Constantes compartilhadas (`LOGIN_URL`) |

### UI Primitives (`src/components/ui/`)

**Radix UI (wrappers):**
`accordion`, `alert-dialog`, `alert`, `avatar`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `hover-card`, `menubar`, `navigation-menu`, `popover`, `progress`, `radio-group`, `scroll-area`, `select`, `separator`, `sheet`, `slider`, `switch`, `tabs`, `toggle`, `toggle-group`, `tooltip`

**Componentes de Formulário:**
`input`, `input-otp`, `input-group`, `textarea`, `label`, `field`, `form`

**Componentes Visuais:**
`button`, `button-group`, `badge`, `card`, `calendar`, `carousel`, `chart`, `pagination`, `sidebar`, `skeleton`, `spinner`, `toast`, `toaster`, `sonner`

**Componentes de Design System Notura:**
| Componente | Descrição |
|---|---|
| `grainient.tsx` | Aplica `.notura-grainient` com efeito grain |
| `grainient-button.tsx` | Botão primário com gradiente + grain |
| `GradientText.tsx` | Texto com gradiente animado (Framer Motion) |
| `GradientText.css` | Estilos do gradiente animado |
| `OrbGL.tsx` | Orb 3D WebGL (Three.js / React Three Fiber) |
| `Silk.tsx` | Animação de textura silk |

### Hooks (`src/hooks/`)

| Hook | Descrição |
|---|---|
| `use-mobile.tsx` | Detecta breakpoint mobile |
| `use-toast.ts` | Notificações toast |
| `useInView.ts` | Intersection Observer para animações de scroll |

### Utilitários (`src/lib/`)

| Arquivo | Descrição |
|---|---|
| `utils.ts` | `cn()` — helper clsx + tailwind-merge |
| `animations.ts` | Variantes de animação Framer Motion |

---

## 12. Stack Técnica

### Build & Ferramentas

| Tecnologia | Versão / Detalhe |
|---|---|
| **Vite** | Build tool + dev server |
| **React** | v19 |
| **TypeScript** | tsconfig.json configurado |
| **Tailwind CSS** | v4 com `@tailwindcss/vite` plugin |

### Dependências Principais

| Pacote | Uso |
|---|---|
| `framer-motion` | Animações declarativas |
| `@react-three/fiber` + `three` | WebGL / 3D (OrbGL) |
| `@radix-ui/*` | Primitivos de UI acessíveis |
| `lucide-react` | Ícones |
| `react-icons` | Ícones adicionais |
| `class-variance-authority` | Variantes de componentes |
| `clsx` + `tailwind-merge` | Composição de classes |
| `wouter` | Roteamento leve |
| `embla-carousel-react` | Carousel |
| `recharts` | Gráficos |
| `react-hook-form` + `zod` | Formulários + validação |
| `sonner` | Toasts |
| `next-themes` | Troca de tema |
| `date-fns` | Utilitários de data |
| `@tailwindcss/typography` | Estilos de prosa |

### Arquivos-Chave do Design System

```
src/index.css               → Tokens CSS, keyframes, classes utilitárias
src/lib/animations.ts       → Variantes Framer Motion
src/components/ui/
  ├── grainient.tsx          → Efeito grain
  ├── grainient-button.tsx   → Botão primário da marca
  ├── GradientText.tsx       → Texto com gradiente animado
  ├── GradientText.css       → Estilos do gradiente
  ├── OrbGL.tsx              → Orb 3D WebGL
  └── Silk.tsx               → Textura silk animada
```

---

*Gerado em 2026-06-16 a partir do código-fonte em `artifacts/notura/`.*
