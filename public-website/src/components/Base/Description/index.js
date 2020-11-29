import React from "react"

const BaseDescription = ({ description, className }) => {
  return (
    <p
      className={`text-primary text-xl xs:text-base ${
        className ? className : ""
      }`}
    >
      {description}
    </p>
  )
}

export default BaseDescription
