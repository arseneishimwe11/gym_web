/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/projects.jsx"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': 'rgba(23, 29, 66, 1)',
        'sky-blue':'rgba(89, 165, 254, 0.84)',
        'color-button':'rgba(89, 165, 254, 1)',
        'body-background':'rgba(5, 8, 23, 1)'
      },
      colors:{
        'color-button':'rgba(89, 165, 254, 1)'
      }
    },
  },
  plugins: [],
}

