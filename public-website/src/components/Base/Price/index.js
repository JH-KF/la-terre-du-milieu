import React from "react"
import BaseDescription from "../Description"

const BasePrice = ({ title, subtitle, amount, className }) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-center">
        <BaseDescription description={title} />
        <span
          className="flex-grow border-b border-action mx-4"
          style={{ borderStyle: "dotted" }}
        />
        <BaseDescription description={`${amount} €`} />
      </div>
      {subtitle ? <span className="text-action">{subtitle}</span> : null}
    </div>
  )
}

export default BasePrice
