/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./modules/**/**/*.tsx", "./pages/**/*.tsx", "./pages/*.tsx", "./modules/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/23062019.jpg')",
      },
      colors: {
        "main-bg": "#ffffff",
        "main-text": "#313d41",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
    fontFamily: {
      main: ["DM Serif Display", "sans-serif"],
      text: ["'Crimson Pro'", "sans-serif"],
    },
  },
  plugins: [],
};
