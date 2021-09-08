module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}', './Layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '411px',
      sm: '540px',
      smd: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      fontFamily: {
        'kum' : ['"Kumbh Sans"', 'sans-serif'],
        'mons': ['Montserrat', 'sans-serif']
      },
      colors: {
        'secondary': '#454b4e',
        'primary' : '#00dbb1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
