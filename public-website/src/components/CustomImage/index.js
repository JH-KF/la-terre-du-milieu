import React from "react"
import Img from "gatsby-image"

const CustomImage = ({ className, hasBorder = false, typeFrame, fluid, fixed }) => {
 
 
  const getPaddingBottom = () => {
    switch (typeFrame) {
      case "square":
        return "100%"
      case "landscape":
        return "70%"
      case "portrait":
        return "150%"
      default:
        return "98%"
    }
  }

  return (
    <div
      className={`
        ${className ? className : ""} 
        ${hasBorder ? "picture-custom-border-1" : ""} 
        relative`}
    >
      <div className="relative" style={{ paddingBottom: getPaddingBottom() }}>
        <div className="absolute inset-0">
          <Img 
            fluid={fluid}
            fixed={fixed}
            imgStyle={{clipPath: "url(#image-path)"}}
            style={{height: "100%" , width: "100%"}}
          ></Img>
        </div>
      </div>
    </div>
  )
}

export default CustomImage
