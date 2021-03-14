import React from "react"

const BaseHeading = ({ text, className }) => {
  return (
    <h2
      className={`text-primary text-5xl xs:text-4xl font-semibold font-calligraphy ${className}`}
    >
      {text}
    </h2>
  )
}

export default BaseHeading
