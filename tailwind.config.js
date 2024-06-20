/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0F0F15",
        secondary: "#14141A",
        blueMain: "#1D1D23",
        grayMain: "#3D3D42",
        graySecondary: "#2E2E35",
        purpleMain: "#6611F5",
        purpleSecond: "#181822",
      },
    },
  },
  plugins: [],
};
