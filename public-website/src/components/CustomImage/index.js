import React from "react"

const CustomImage = ({ className, hasBorder, image, typeFrame }) => {
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
            <image
              href={image}
              className="clip-panel"
              preserveAspectRatio="none"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CustomImage
