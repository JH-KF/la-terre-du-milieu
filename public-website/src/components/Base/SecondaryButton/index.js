import React from "react"

const BaseSecondaryButton = ({ className, text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} secondary-btn text-base font-calligraphy py-3 px-8`}
    >
      {text}
    </button>
  )
}

export default BaseSecondaryButton
