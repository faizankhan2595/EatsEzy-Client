const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = ["Roboto", "system-ui"];

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class',
  theme: {
    fontFamily: fontFamily,
    extend: {
      colors: {
        "primary-red": "#EF3340",
        "filter-red": "rgb(187,13,50)",
        "card-red": "#FF3D65",
        "footer-bg": "#1A191D",
        "button-hvr": "#E1133E",
      },
      boxShadow: {
        "card-initial": "0px 7px 29px 0px rgba(100, 100, 111, 0.2) ",
        "card-final": "0px 10px 36px 0px rgba(0, 0, 0, 0.16)",
        "list-section": " 0px 2px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
