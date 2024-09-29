import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-green-500',
    'bg-amber-400',
    'bg-red-500',
    'bg-blue-400',
    'bg-orange-300',
    'bg-lime-300',
    'bg-pink-300',
    'bg-yellow-300',
    'bg-blue-300'
  ],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      main: ['var(--font-space-grotesk)'],
      sans: ['var(--font-inter)'],
      mono: ['var(--font-space-mono)'],
      serif: ['var(--font-ibm-plex-serif)'],
      pixel: ['var(--font-press-start)'],
      alegre: ['var(--font-alegreya)']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'main-yellow': '#fbbf24',
        purple: '#C9A0DC',
        dark: '#0a0a0a',
        blue: {
          discord: '#807cfc'
        },
        discord: {
          light: '#9b98fa',
          vibrant: '#5864f4',
          deselected: '#404675',
          'deselected-mention': '#c9cdfb'
        },
        yellow: {
          'discord-role': '#ffff88'
        },
        amber: {
          450: '#F8AF18',
          550: '#E78B09'
        },
        gray: {
          darker: '#0d0d0d',
          dark: '#1c1c1c',
          discord: '#383c3c',
          'discord-dark': '#303434',
          'discord-darker': '#282424'
        },
        gold: {
          discord: '#f1c40f'
        }
      },
      boxShadow: {
        blocks: '8px 8px',
        'blocks-sm': '4px 4px',
        'blocks-md': '6px 6px',
        'footer-btn': '0px 6px',
        'email-btn': '2px 3px'
      },
      screens: {
        xs: '375px'
      },
      fontSize: {
        mxs: '.9rem',
        '15xl': '15rem'
      },
      top: {
        '100vw': '100vw'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '50%' },
          '100%': { opacity: '100%' }
        },
        'bg-flash': {
          '0%': { backgroundColor: '59, 235, 135' },
          '100%': { backgroundColor: 'rgb(3, 111, 252)' }
        }
      },
      animation: {
        'fade-in': 'fade-in .5s ease-in-out',
        'bg-flash': 'bg-flash 1s linear 0s infinite alternate'
      }
    }
  },
  plugins: [],
};
export default config;
