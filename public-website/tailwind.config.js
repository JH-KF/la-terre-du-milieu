const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#5E4F41",
        action: "#996515",
        background: "#FAF6F1",
        "background-accent": "#F3EADC",
      },
      fontFamily: {
        serif: ["Judson", ...defaultTheme.fontFamily.serif],
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
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
      },
      maxHeight: {
        header: "104px",
        smallHeader: "72px",
      },
      minWidth: {
        screen: "320px",
      },
      screens: {
        xs: { max: "899px" },
        md: { min: "900px", max: "1023px" },
      },
      spacing: {
        14: "3.5rem",
        18: "4.5rem",
      },
      transitionProperty: {
        position: "top, right, bottom, left",
      },
    },
  },
  variants: {},
  plugins: [],
}
