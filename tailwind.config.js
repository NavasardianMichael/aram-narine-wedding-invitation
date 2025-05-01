/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["BraindYerevan", "Inter", "sans-serif"],
        serif: ["BraindYerevan", "serif"],
      },
      colors: {
        primary: "#D4B996",
        secondary: "#F5E6E8",
        dark: "#2C3639",
      },
    },
  },
  plugins: [],
};
