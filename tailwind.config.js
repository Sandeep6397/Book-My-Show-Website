module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // test style file
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bms:{
          
            50: '#edf1fc',
            100: '#f84464',
            200: '#b6b8c9',
            300: '#989bb2',
            400: '#7c7f9b',
            500: '#636582',
            600: '#4c4f66',
            700: '#363849',
            800: '#21222e',
            900: '#0a0a16',
          },
        premier:
        
          {
            50: '#eef0fb',
            100: '#ced3e4',
            200: '#aeb5ce',
            300: '#8f98bb',
            400: '#6e7ba8',
            500: '#55618e',
            600: '#424c6f',
            700: '#2b3148',
            800: '#1b2031',
            900: '#070b15',
          },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
