/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#eef1f7",
          100: "#d5dcec",
          200: "#aab8d9",
          300: "#7e94c7",
          400: "#5370b4",
          500: "#3455a4",
          600: "#274190",
          700: "#1a2f6e",
          800: "#111e4a",
          900: "#090f27",
          950: "#04081a",
        },
        gold: {
          50:  "#fdf9ed",
          100: "#faf0ca",
          200: "#f5df91",
          300: "#efc958",
          400: "#e8b330",
          500: "#d4971b",
          600: "#b97714",
          700: "#915812",
          800: "#774717",
          900: "#663b18",
          950: "#3b1e09",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
