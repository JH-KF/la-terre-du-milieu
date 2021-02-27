import React from "react"

const BasePrimaryButton = ({ className, text, onClick }) => {
  return (
      <button 
        type="button" 
        onClick={onClick} 
        className={`${className} primary-btn text-base font-calligraphy py-3 px-8`} 
      >
        {text}
      </button>
  )
}

export default BasePrimaryButton
