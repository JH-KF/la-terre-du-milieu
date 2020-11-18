import React from "react"

const BasePrimaryButton = ({ text, className }) => (
  <button type="button" className={`h-14 bg-action ${className}`}>
    <div className="px-12 flex flex-row justify-center items-center">
      <span className="font-serif font-bold text-white text-xl leading-none tracking-wider uppercase">
        {text}
      </span>
    </div>
  </button>
)

export default BasePrimaryButton
