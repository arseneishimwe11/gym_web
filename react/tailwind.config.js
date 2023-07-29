/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx", // Include all .jsx files in the "src" directory and its subdirectories
    "./pages/**/*.jsx", // Include all .jsx files in the "pages" directory and its subdirectories
  ],
  theme: {
    extend: {
      backgroundColor: {
        'trim':'rgb(145, 145, 144)',
        'landing-bg':'rgb(36, 35, 35)',
        'page-orange':'rgb(235, 137, 9)',
        'semi-black':'rgba(29, 27, 27, 0.67)',
        'semi-white':'rgba(217, 217, 217, 1)'
      },
      colors:{
        'color-button':'rgba(89, 165, 254, 1)',
        'page-orange':'rgb(235, 137, 9)',
        'title':'rgba(29, 27, 27, 0.67)'
      },
      fontFamily:{
        fugaz: ['Fugaz One', 'cursive'],
        convergence:['Convergence', 'sans-serif']
      }
    },
  },
  plugins: [],
}

