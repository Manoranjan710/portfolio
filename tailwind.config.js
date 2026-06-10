/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        signature: ['var(--font-signature)', 'cursive'],
      },
      colors: {
        cream: {
          50: '#fffdf8',
          100: '#fbf7ee',
          200: '#f5edda',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f3e7c3',
          200: '#e8d196',
          300: '#dcb863',
          400: '#cfa23c',
          500: '#c08a1e',
          600: '#a4731a',
          700: '#825a18',
          800: '#5f4214',
          900: '#3f2c0e',
        },
        ink: {
          700: '#3a3a3a',
          800: '#262626',
          900: '#1a1a1a',
        },
      },
      boxShadow: {
        gold: '0 10px 30px -12px rgba(192, 138, 30, 0.35)',
        'gold-lg': '0 20px 45px -15px rgba(192, 138, 30, 0.45)',
        card: '0 12px 35px -18px rgba(26, 26, 26, 0.25)',
      },
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
