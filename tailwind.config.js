/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "375px",
      md: "797px",
      lg: "1020px",
      xl: "1440px",
    },
    fontFamily: {
      display: ["Lilita One", "sans-serif"],
      sans: ["Overpass", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "priorities-left":
          "linear-gradient(rgba(100, 170, 250, 0.70), rgba(150, 250, 250, 0.70)), url('../img/backgroundImages/StateHousewFlowersblueLARGE.jpg')",
        "nh-outline": "url(../img/backgroundImages/NHVector.png)",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
