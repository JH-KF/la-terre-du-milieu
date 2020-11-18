import React from "react"

const BasePrimaryButton = ({ text, className }) => (
  <button
    type="button"
    className={`h-14 bg-action ${className} primary-button`}
  >
    <div className="px-12 flex flex-row justify-items-center item-center">
      <span className="font-serif text-white text-xl uppercase">{text}</span>
    </div>
  </button>
)

export default BasePrimaryButton
