/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "Raleway": "Raleway, sans-serif",
      },
      colors: {
        "primary": "#e52629",
        "text": "#a1adb7"
      },
      margin: {
        "110": "110px",
      },
      container: {
        screens: {
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}

