module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4CAF50',
        'primary-dark': '#388E3C',
        'text-primary': '#212121',
        'background-light': '#F5F5F5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
