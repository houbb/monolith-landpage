/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'bg-black': '#050505',
        'deep-black': '#0A0A0A',
        'card-black': '#111111',
        'gold-primary': '#D8A84F',
        'gold-bright': '#FFD985',
        'gold-dark': '#8A6426',
        'text-white': '#F5F1E8',
        'text-weak': '#9B9488',
        'border-gold': 'rgba(216, 168, 79, 0.22)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Geist Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      borderRadius: {
        'card': '24px',
        'pill': '999px',
      },
      boxShadow: {
        'gold': '0 0 32px rgba(216, 168, 79, 0.35)',
        'gold-lg': '0 0 64px rgba(216, 168, 79, 0.25)',
        'card': '0 0 0 1px rgba(255, 217, 133, 0.04) inset, 0 24px 80px rgba(0, 0, 0, 0.45)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 32px rgba(216, 168, 79, 0.35)' },
          '50%': { boxShadow: '0 0 48px rgba(216, 168, 79, 0.55)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-5px)' },
          '75%': { transform: 'translateY(-30px) translateX(15px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
