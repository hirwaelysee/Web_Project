/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",             // <-- Add this line for root HTML files
    "./src/**/*.{html,js}", // Scans all HTML and JS inside src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}