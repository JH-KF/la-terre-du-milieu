const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#5E4F41",
        action: "#996515",
        background: "#FAF6F1",
      },
      fontFamily: {
        serif: ["Judson", ...defaultTheme.fontFamily.serif],
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      inset: {
        1: "0.25rem",
      },
      spacing: {
        14: "3.5rem",
        26: "6,5rem",
      },
      transitionProperty: {
        position: "top, right, bottom, left",
      },
    },
  },
  variants: {},
  plugins: [],
}
