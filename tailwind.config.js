/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7b00", // your garage orange
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
}
