/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#6479BC',
      },
      gradientColorStops: {
        'custom-pink': '#F6D5E6',
        'custom-pink-transparent': 'rgba(250, 128, 179, 0.00)'
      },
    },
  },
  plugins: [],
}

