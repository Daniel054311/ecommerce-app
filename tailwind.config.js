/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        blueBg: '#1F71BC'
      },
      borderColor: {
        blueBorder: "#1F71BC"
      },
      colors: {
        blueColor: "#1F71BC"
      }
    },
  },
  plugins: [],
}
