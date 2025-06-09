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
    Bebas: ['Bebas Neue', 'sans-serif'],
    noto: ['Noto Sans', 'sans-serif']
  },
        keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-15%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        daribawah: {
        '0%': { transform: 'translateY(25%)', opacity: '0' },
        '100%': { transform: 'translateY(0%)', opacity: '1' },
        }
      },
      animation: {
        slide: 'slide 25s infinite',
        daribawah: 'daribawah 15s ease forwards',
      },
    },
  },
  plugins: [],
}

