/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './**.{html,js}'],
  theme: {
    extend: {
      colors:{
        'primary-bg': '#080C20',
        'azure': '#3EE9E5',
        'plain-blue': '#093F68',
        'grey': '#777F98',
        'error': '#FF2965'

      },

      fontFamily: {
        'manrope': 'Manrope, sans-serif',

      },

      fontSize: {
        'sm': '.93rem', // 15px
        'base': '1.125rem', // 18px
        'tiny': '1.5rem', // 24px
        'xlg': '2rem', //32px
        '2xl': '2.5rem', //40px
        '3xl': '2.75rem', //44px
        '4xl': '3rem', //48px
      },

      screens: {
        'xs': "200px",
        'lg': "1200px",
        'xl': "1700px",
       },

       fontWeight: {
        'extra-bold': 800,
       }




    },
  },
  plugins: [],
}
