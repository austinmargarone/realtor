/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        kw: {
          red: "#B40101",
          ltgray: "#CCC",
          maingray: "#999",
          darkgray: "#666",
          lessblack: "#313338",
          black: "#000",
          activegreen: "#00B400",
        },
        primary: {
          500: "#FF7000",
        },
        dark: {
          100: "#000000",
        },
        light: {
          900: "#FFFFFF",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
