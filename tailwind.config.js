/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
    fontFamily : {
      mono : ["Noto Sans" , "sans-serif"],
      dev : ["Noto Sans Devanagari", "sans-serif"]
    }
  },
  plugins: [],
}

