import React from "react"

const BaseDescription = ({ description, className }) => {
  return (
    <span className={`text-primary text-xl ${className}`}> {description} </span>
  )
}

export default BaseDescription
