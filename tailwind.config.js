/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        app: 'url(/assets/party.jpg)'
      },
      fontFamily: {
        sans: 'M PLUS Code Latin, sans-serif'
      },
    },
  },
  plugins: [],
}
