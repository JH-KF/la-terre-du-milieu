import React from "react"
import { Link } from "gatsby"

const BaseTertiaryButton = ({ text, className, onClick, path }) => {
  const button = (
    <button
      className={`${className} tertiary-btn text-action text-xl font-calligraphy`}
      onClick={onClick}
    >
      {text}
    </button>
  )
  if (typeof path === "string" && path.length) {
    return <Link to={path}>{button}</Link>
  } else {
    return button
  }
}

export default BaseTertiaryButton
