import React, { useState } from "react"

const BaseTertiaryButton = ({ text, className, onClick }) => {
  const [isButtonHover, setButtonIsHover] = useState(false)
  return (
    <button
      className={`${className}`}
      onClick={onClick}
      onMouseEnter={() => setButtonIsHover(true)}
      onMouseLeave={() => setButtonIsHover(false)}
    >
      <div className="pb-2 text-action text-xl font-sans">{text}</div>
      <div
        className={`"transition duration-300 ease-in-out border border-solid border-action rounded-full ${
          isButtonHover ? "w-full" : "w-8"
        } `}
      />
    </button>
  )
}

export default BaseTertiaryButton
