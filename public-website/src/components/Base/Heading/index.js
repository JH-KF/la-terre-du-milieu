import React from "react"

const BaseHeading = ({ text, className }) => {
  return (
    <h2
      className={`text-primary text-5xl xs:text-4xl font-semibold mb-24 xs:mb-12 ${className}`}
    >
      {text}
    </h2>
  )
}

export default BaseHeading
