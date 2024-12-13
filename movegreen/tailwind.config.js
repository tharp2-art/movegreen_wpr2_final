/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4CAF50',
        'secondary': '#2E7D32',
        'accent': '#81C784',
      }
    },
  },
  plugins: [],
}
