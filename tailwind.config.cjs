/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zei-light': '#1f3641',
        'zei-dark': '#1a2a33',
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      boxShadow: {
        '3xl': '0px 7px 0px rgba(0, 0, 0, 0.8)',
        '3xl-o': '0px 7px 0px rgb(202, 138, 4)',
        '3xl-c': '0px 7px 0px rgb(8, 145, 178)',
      },
    },
  },
  plugins: [],
};
