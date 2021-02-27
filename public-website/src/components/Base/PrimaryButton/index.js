import React, { useState } from "react"

const BasePrimaryButton = ({ text, onClick }) => {
  const [isButtonHover, setButtonIsHover] = useState(false)

  return (
      <button 
        type="button" 
        onClick={onClick} 
        onMouseEnter={() => setButtonIsHover(true)}
        onMouseLeave={() => setButtonIsHover(false)}
        className="primary-btn text-base font-calligraphy py-3 px-8" 
      >
        {text}
      </button>
   
  )
}

export default BasePrimaryButton
