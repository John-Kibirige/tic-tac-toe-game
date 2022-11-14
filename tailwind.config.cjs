/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zei-light': '#1f3641',
        'zei-dark': '#1a2a33',
        'zei-cyan': '#31C3BD',
        'zei-yel': '#F2B137',
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      boxShadow: {
        '3xl': '0px 7px 0px rgba(0, 0, 0, 0.8)',
        '3xl-o': '0px 7px 0px rgb(202, 138, 4)',
        '3xl-c': '0px 7px 0px rgb(8, 145, 178)',
        '3xl-hb': '0px 2px 0px rgb(0,0,0)',
        '3xl-hw': '0px 3px 1px rgb(128, 128, 128)',
      },
    },
  },
  plugins: [],
};
