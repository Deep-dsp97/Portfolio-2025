/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit: ['Outfit', 'sans-serif'],
        dmsans:["DM Sans", "serif"]
      }
    },
    // colors:{
    //   'purple': '#6528F7'
    // },
    // container:{
    //   maxWidth:{
    //     'xl': '1200px'
    //   }
    // }
  },
  plugins: [],
}

