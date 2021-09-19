module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "1fr 2fr",
      },
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
      },
      colors: {
        "landing-bg": "#F9F6F1",
        "text-muted": "#595959",
        "item-border": "#DADADA",
        accent: "#009FE0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
