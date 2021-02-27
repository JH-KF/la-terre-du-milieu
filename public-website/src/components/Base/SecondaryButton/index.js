import React from "react"

const BaseSecondaryButton = ({ text, className, onClick }) => {
  return (
    <button
      className={`${className} secondary-btn text-action text-xl font-calligraphy`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default BaseSecondaryButton
