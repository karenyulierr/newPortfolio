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
        one_red: '#F20C49',
        two_red: '#BFOB4D',
        three_red: '#8COF3D',
        four_clear: '#F2F2F2',
      },
      one_red: '#F20C49',
      two_red: '#BFOB4D',
      three_red: '#8COF3D',
      four_clear: '#F2F2F2',
    },
    },
  },
  plugins: [

  ],
  darkMode: 'class',
}

