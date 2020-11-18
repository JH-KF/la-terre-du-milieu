const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    inset: {
      1: "0.25rem",
    },
    extend: {
      fontFamily: {
        serif: ["Judson", ...defaultTheme.fontFamily.serif],
        sans: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        14: "3.5rem",
        26: "6,5rem",
      },
      colors: {
        primary: "#5E4F41",
        action: "#996515",
        background: "#FAF6F1",
      },
    },
  },
  variants: {},
  plugins: [],
}
