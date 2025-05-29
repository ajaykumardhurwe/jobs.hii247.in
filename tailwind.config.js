// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };










/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Small screens (mobile devices)

        // 'sm': '640px',  // Small screens (mobile devices)
        'md': '768px',  // Medium screens (tablets)
        'lg': '1024px', // Large screens (laptops)
        'xl': '1280px', // Extra large screens (desktop)
        '2xl': '1536px', // 2X Large screens (larger desktops)
      },
      colors: {
        primary: '#1D4ED8',  // Custom primary color
        secondary: '#9333EA', // Custom secondary color
      },
      spacing: {
        '128': '32rem',  // Custom spacing unit
      },
      fontSize: {
        'sm': '0.875rem',  // Small font size
        'base': '1rem',  // Normal font size
        'lg': '1.25rem',  // Large font size
        'xl': '1.5rem',  // Extra large font size
        '2xl': '2rem',  // 2X Large font size
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        scaleUp: 'scaleUp 0.3s ease-out forwards', // New scaling animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' }, // Start slightly smaller
          '100%': { transform: 'scale(1)' },  // End at normal size
        },
      },
    },
  },
  plugins: [],
};









