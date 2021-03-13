import React from "react"

const BaseTertiaryButton = ({ text, className, onClick }) => {
  return (
    <button
      className={`${className} tertiary-btn text-action text-xl font-calligraphy`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default BaseTertiaryButton
