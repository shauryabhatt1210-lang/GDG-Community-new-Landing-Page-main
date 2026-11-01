/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gdg: {
          blue: {
            DEFAULT: '#4285F4',
            light: '#E8F0FE',
            hover: '#1A73E8',
            dark: '#174EA6'
          },
          red: {
            DEFAULT: '#EA4335',
            light: '#FCE8E6',
            hover: '#D93025',
            dark: '#A50E0E'
          },
          yellow: {
            DEFAULT: '#FBBC04',
            light: '#FEF7E0',
            hover: '#F29900',
            dark: '#E37400'
          },
          green: {
            DEFAULT: '#34A853',
            light: '#E6F4EA',
            hover: '#1E8E3E',
            dark: '#0D652D'
          },
          dark: {
            bg: '#0F172A',
            surface: '#1E293B',
            border: '#334155',
            text: '#F8FAFC',
            muted: '#94A3B8'
          }
        }
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace']
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        blink: { '0%, 49%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        blink: 'blink 1s steps(1) infinite',
        float: 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
