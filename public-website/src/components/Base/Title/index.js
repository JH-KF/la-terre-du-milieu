import React from "react"

const BaseTitle = ({ title, className }) => {
  return (
    <h5 className={`text-primary text-3xl font-semibold ${className}`}>
      {" "}
      {title}{" "}
    </h5>
  )
}

export default BaseTitle
