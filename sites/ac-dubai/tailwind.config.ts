import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', md: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce5ff',
          300: '#8ed4ff',
          400: '#58bcff',
          500: '#319fff',
          600: '#1880f5',
          700: '#1568e1',
          800: '#1855b6',
          900: '#1a4a8f',
          950: '#142e5a',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffead0',
          200: '#ffcf94',
          300: '#ffae5c',
          400: '#ff8a2e',
          500: '#fb6b13',
          600: '#ec5208',
          700: '#c43c09',
          800: '#9b3010',
          900: '#7d2911',
        },
        ink: {
          50: '#f7f8fa',
          100: '#eef0f4',
          200: '#dde1e9',
          300: '#bdc4d1',
          400: '#8c95a8',
          500: '#646e83',
          600: '#4b5468',
          700: '#3d4456',
          800: '#252a38',
          900: '#161924',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)',
        soft: '0 8px 24px rgba(16,24,40,0.06)',
        ring: '0 0 0 4px rgba(49,159,255,0.18)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
    },
  },
  plugins: [],
};

export default config;
