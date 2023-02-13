/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#252422",
          light: "#f4f4f4",
          rose: "#f9cdcd",
          purple: "#6C63FF"
        }
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('tailwind-scrollbar'),
  ],
}
