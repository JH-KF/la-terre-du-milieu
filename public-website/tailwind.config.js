const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#5E4F41",
        action: "#6D542C",
        background: "#D3C8AC",
        header: "#F3EADC99",
        "background--light": "#fbf8f3",
        "background-accent": "#F3EADC",
        "modal-wrapper": "#00000066",
      },
      fontFamily: {
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        calligraphy: ["Onciale", ...defaultTheme.fontFamily.serif],
      },
      inset: {
        1: "0.25rem",
        18: "4.5rem",
        26: "6.5rem",
      },
      height: {
        half: "50vh",
      },
      minHeight: {
        96: "384px",
        half: "50vh",
      },
      maxHeight: {
        header: "104px",
        smallHeader: "72px",
        gallery: "564px",
      },
      minWidth: {
        screen: "320px",
        card: "280px",
      },
      maxWidth: {
        "modal-wrapper": "815px",
        "modal-image": "600px",
      },
      screens: {
        xs: { max: "899px" },
        md: { min: "900px" },
      },
      spacing: {
        14: "3.5rem",
        18: "4.5rem",
        26: "6.5rem",
      },
      transitionProperty: {
        position: "top, right, bottom, left",
      },
      zIndex: {
        1000: 1000,
      },
    },
  },
  variants: {},
  plugins: [],
}
