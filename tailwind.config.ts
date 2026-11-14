import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f2fbff',
        'surface-low': '#e4f7ff',
        'surface-high': '#d6ecf5',
        ink: '#091e25',
        muted: '#41484d',
        primary: '#00344a',
        'primary-container': '#0d4c68',
        secondary: '#00677d',
        'secondary-fixed': '#b3ebff'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
