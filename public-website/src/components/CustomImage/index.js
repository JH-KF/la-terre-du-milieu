import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const CustomImage = ({ className, hasBorder = false, typeFrame, alt, image = {} }) => {
 
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
          <GatsbyImage 
            image={image}
            alt={alt}
            imgStyle={{clipPath: "url(#image-path)"}}
            style={{height: "100%" , width: "100%"}}
          ></GatsbyImage>
        </div>
      </div>
    </div>
  )
}

export default CustomImage
