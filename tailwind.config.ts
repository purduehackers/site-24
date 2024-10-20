import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
const plugin = require('tailwindcss/plugin');

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
          '0%': { opacity: '30%' },
          '100%': { opacity: '100%' }
        },
        'fade-out': {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' }
        },
        'zoom-in': {
          '0%': { transform: 'scale(.3)' },
          '100%': { transform: 'scale(1)' }
        },
        'zoom-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        },
        'bg-flash': {
          '0%': { backgroundColor: '59, 235, 135' },
          '100%': { backgroundColor: 'rgb(3, 111, 252)' }
        },
        'horizontal-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(0px - 50%))' }
        }
      },
      animation: {
        'fade-in': 'fade-in .5s ease-in-out',
        'fade-out': 'fade-out .5s ease-in-out',
        'zoom-in': 'zoom-in .5s ease-in-out',
        'zoom-out': 'zoom-out .5s ease-in-out',
        'bg-flash': 'bg-flash 1s linear 0s infinite alternate',
        'horizontal-scroll': 'horizontal-scroll 14s linear 0s infinite',
        'horizontal-scroll-reverse': 'horizontal-scroll 14s linear 0s infinite reverse'
      },
      textShadow: {
        '2': '-2px 2px 0 var(--tw-shadow-color)',
        DEFAULT: '-4px 4px 0 var(--tw-shadow-color)',
        '6': '-6px 6px 0 var(--tw-shadow-color)',
        '8': '-8px 8px 0 var(--tw-shadow-color)',
      },
      textStroke: {
        sm: '2px black',
        DEFAULT: '4px black',
        lg: '8px black',
      },
    },

    // Text fill and stroke plugin
    textFillColor: (theme: PluginAPI["theme"]) => theme('borderColor'),
    textStrokeColor: (theme: PluginAPI["theme"]) => theme('borderColor'),
    textStrokeWidth: (theme: PluginAPI["theme"]) => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
  },
  variants: {
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-text-fill-stroke')(),
    plugin(function ({ matchUtilities, theme }: { 
      matchUtilities : PluginAPI["matchUtilities"], 
      theme : PluginAPI["theme"]
    }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          })
        },
        { values: theme('textShadow')}
      )
    }),
  ],
};
export default config;