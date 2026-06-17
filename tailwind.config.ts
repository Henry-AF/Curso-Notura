import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        notura: {
          primary: '#5341CD',
          light: '#7B6FE8',
          dark: '#4333B8',
          secondary: '#7B6FE8',
          processing: '#E43790',
          success: '#22C55E',
          'violet-50': '#EEF0FF',
          'violet-200': '#DDD8F5',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 35s linear infinite',
        'morph-orb': 'morphOrb 8s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease-in-out infinite',
        'aurora-1': 'aurora1 10s ease-in-out infinite',
        'aurora-2': 'aurora2 13s ease-in-out infinite',
        'aurora-3': 'aurora3 15s ease-in-out infinite',
        'rotate-border': 'rotateBorder 4s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'blur-in': 'blurIn 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.04)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        morphOrb: {
          '0%, 100%': { borderRadius: '44% 56% 58% 42% / 44% 45% 55% 56%', transform: 'rotate(0deg) scale(1)' },
          '33%': { borderRadius: '56% 44% 48% 52% / 58% 37% 63% 42%', transform: 'rotate(120deg) scale(1.03)' },
          '66%': { borderRadius: '47% 53% 43% 57% / 39% 58% 42% 61%', transform: 'rotate(240deg) scale(0.98)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '25%': { transform: 'translate(5%, -5%) scale(1.1)', opacity: '0.4' },
          '50%': { transform: 'translate(-3%, 8%) scale(0.95)', opacity: '0.25' },
          '75%': { transform: 'translate(6%, 3%) scale(1.05)', opacity: '0.35' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.2' },
          '33%': { transform: 'translate(-6%, 4%) scale(1.08)', opacity: '0.3' },
          '66%': { transform: 'translate(5%, -6%) scale(0.92)', opacity: '0.15' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.15' },
          '50%': { transform: 'translate(4%, -3%) scale(1.12)', opacity: '0.25' },
        },
        rotateBorder: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(12px)', transform: 'translateY(8px)' },
          '100%': { opacity: '1', filter: 'blur(0px)', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
