/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '4rem',
      'extra': '8rem',
      'add': '2.25rem'
    },
    extend: {
      colors: {
        'gold': {
          'dark': '#D18B4B',
          'light': '#DCB77A',
          'dec': '#D08A4B',
        },
        'black': '#131212',
        'main': {
          'black': '#262626',
          'light': '#FBFBFB',
          'gray': '#656565'
        }
      },
      borderRadius: {
        'sl': '200px'
      }
    },
  },
  plugins: [],
}

