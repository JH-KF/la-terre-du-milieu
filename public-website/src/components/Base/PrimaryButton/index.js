import React, { useState } from "react"

const BasePrimaryButton = ({ text, className, onClick }) => {
  const [isButtonHover, setButtonIsHover] = useState(false)

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setButtonIsHover(true)}
      onMouseLeave={() => setButtonIsHover(false)}
      className={`h-14 bg-action ${className} relative ${
        isButtonHover ? "bottom-0 right-0" : "bottom-1 right-1"
      } transition-position duration-300 ease-in-out`}
    >
      <div className="px-12 flex flex-row justify-center items-center">
        <span className="font-serif font-bold text-white text-xl leading-none tracking-wider uppercase subpixel-antialiased">
          {text}
        </span>
      </div>
      <div
        className={`absolute transition-position duration-300 ease-in-out ${
          isButtonHover ? "inset-0" : "inset-1"
        } w-full h-full border border-action border-solid`}
      ></div>
    </button>
  )
}

export default BasePrimaryButton
