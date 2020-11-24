import React from "react"

const BaseSecondaryButton = ({ text, className }) => (
  <button
    type="button"
    className={`h-14 bg-white border border-solid border-action ${className}`}
  >
    <div className="px-12 flex flex-row justify-items-center item-center">
      <span className="font-serif text-action text-xl">{text}</span>
    </div>
  </button>
)

export default BaseSecondaryButton
