/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      // ...
      dark: {
        bg: {
          // Cambiar el valor de 'gray-900' por '#161426'
          900: '#161426',
        },
      },
    },
    },
  },
  plugins: [

  ],
  darkMode: 'class',
}

