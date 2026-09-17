/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: {
          DEFAULT: '#0D0D0D',
          light: '#151515',
          elevated: '#1A1A1A',
        },
        primary: {
          DEFAULT: '#E10600',
          hover: '#FF1801',
          glow: 'rgba(225, 6, 0, 0.35)',
        },
        racing: {
          red: '#E10600',
          black: '#050505',
          dark: '#0D0D0D',
          carbon: '#111111',
          silver: '#C0C0C0',
          border: '#242424',
          subtle: '#8A8A8A',
        },
        muted: '#8A8A8A',
        border: '#242424',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'carbon-pattern': 'radial-gradient(circle at 1px 1px, #181818 1px, transparent 0)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.92)' },
        },
        trackSweep: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        'track-sweep': 'trackSweep 3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
