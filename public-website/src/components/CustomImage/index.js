import React from "react"
import Img from "gatsby-image"

const CustomImage = ({ className, hasBorder, typeFrame, fluid, fixed }) => {
 
 
  const getPaddingTop = () => {
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

  const Image =  <Img 
    imgStyle={{ objectFit: fixed ? "fill" : "cover", position: "absolute" }}
    style={{ position: fluid ? "absolute" : '', height: fixed ? '100%' : '', width: fixed ? '100%' : '', display: "block" }}
    fluid={fluid}
    fixed={fixed}
    className="clip-panel"
  ></Img>

  return (
    <div
      className={`
        ${className ? className : ""} 
        ${hasBorder ? "picture-custom-border-1" : ""} 
        relative`}
    >
      <div className="relative" style={{ paddingTop: getPaddingTop() }}>
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          aria-hidden="true"
          viewBox="0 0 587.61 331.46"
          role="presentation"
          className="absolute inset-0"
        >
          <rect
            width="100%"
            height="100%"
            clipPath="url(#article-panel)"
          ></rect>
          <g>
            <foreignObject width="100%" height="100%">
                { Image }
            </foreignObject>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CustomImage
