/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
    mont: ['Montserrat', 'sans-serif'],
    roboto: ['Roboto', 'sans-serif'],
    Bebas: ['Bebas Neue', 'sans-serif']
  },
        keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        slide: 'slide 30s infinite',
      },
    },
  },
  plugins: [],
}

