/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'responsive': 'clamp(0.75rem, 2vw, 3rem)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'digit2000': ['01 Digit2000', 'sans-serif']
      },
      colors: {
        'terminal-green' : '#4AF626',
        'terminal-green-light' : '#6FFC3E',
        'terminal-blue' : '#001AFF'
      },
      cursor: {
        'default': 'url(/public/Cursor_1.cur), default',
        'pointer': 'url(/public/Cursor_15.cur), pointer',
      },
    },
  },
  plugins: [],
}

