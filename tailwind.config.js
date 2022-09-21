/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screen:{
      sm :'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    extend: {
      fontfamily:{
        sans :['josefin Sans' , 'sans-serif'],
        alata : ['Alata'],
      },
      letterSpacing:{
        widest:'.3em',
      }
    },
  },
  plugins: [],
}
