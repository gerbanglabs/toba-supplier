/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: '#0369A1',
        'ocean-deep': '#0C4A6E',
        'ocean-mid': '#0284C7',
        'ocean-lite': '#38BDF8',
        'ocean-pale': '#E0F2FE',
        seafoam: '#BAE6FD',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      animation: {
        'wave-expand': 'wave-expand 6s ease-out infinite',
        'float-up': 'float-up linear infinite',
      },
      keyframes: {
        'wave-expand': {
          '0%': { transform: 'scale(0.85)', opacity: '0.4' },
          '50%': { opacity: '0.15' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0.6' },
          '100%': { transform: 'translateY(-120vh) translateX(30px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};