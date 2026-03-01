/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3BA8F5' , 
         'secondary': "#0D0842", 
         'background': "#0f172a",
         'Favorite' : '#6366f1' 
      },
      fontFamily: {
        'primary' : ["Fira Mono", "monospace"],
        'secondary' : ["Nunito Sans", "sans-serif"] 
        
      }
    },
  },
  plugins: [],
}
