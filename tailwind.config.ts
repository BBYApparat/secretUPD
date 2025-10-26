import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'Orbitron', 'sans-serif'],
      },
      colors: {
        linear: {
          black: '#000000',
          darker: '#0A0A0A',
          dark: '#111111',
          gray: '#171717',
          'gray-light': '#1F1F1F',
          'gray-lighter': '#262626',
          white: '#FFFFFF',
          accent: '#5C67DE',
          'accent-light': '#7C85E8',
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
        },
        cid: {
          red: '#8B0000',
          darkred: '#450000',
          badge: '#FFD700',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
export default config
