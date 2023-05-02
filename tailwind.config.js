/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}
