import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      colors: {
        pace: {
          50: 'var(--pace-50)',
          100: 'var(--pace-100)',
          200: 'var(--pace-200)',
          300: 'var(--pace-300)',
          400: 'var(--pace-400)',
          500: 'var(--pace-500)',
          600: 'var(--pace-600)',
          700: 'var(--pace-700)',
          800: 'var(--pace-800)',
          900: 'var(--pace-900)',
        },
        coral: {
          50: 'var(--coral-50)',
          100: 'var(--coral-100)',
          200: 'var(--coral-200)',
          300: 'var(--coral-300)',
          400: 'var(--coral-400)',
          500: 'var(--coral-500)',
          600: 'var(--coral-600)',
          700: 'var(--coral-700)',
          800: 'var(--coral-800)',
          900: 'var(--coral-900)',
        },
        fresh: {
          50: 'var(--fresh-50)',
          100: 'var(--fresh-100)',
          200: 'var(--fresh-200)',
          300: 'var(--fresh-300)',
          400: 'var(--fresh-400)',
          500: 'var(--fresh-500)',
          600: 'var(--fresh-600)',
          700: 'var(--fresh-700)',
          800: 'var(--fresh-800)',
          900: 'var(--fresh-900)',
        },
        gold: {
          50: 'var(--gold-50)',
          100: 'var(--gold-100)',
          200: 'var(--gold-200)',
          300: 'var(--gold-300)',
          400: 'var(--gold-400)',
          500: 'var(--gold-500)',
          600: 'var(--gold-600)',
          700: 'var(--gold-700)',
          800: 'var(--gold-800)',
          900: 'var(--gold-900)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
