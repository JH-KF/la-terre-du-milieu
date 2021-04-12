import React from "react"

const BaseTitle = ({ title, className }) => {
  return (
    <div
      className={`text-primary text-3xl xs:text-2xl font-semibold ${className}`}
    >
      {title}
    </div>
  )
}

export default BaseTitle
