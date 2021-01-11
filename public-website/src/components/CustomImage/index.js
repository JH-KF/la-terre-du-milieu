import React from "react"

const CustomImage = ({ className, image }) => {
  return (
    <div className={`${className} picture-custom-border-1 relative`}>
      <div className="relative" style={{ paddingTop: "98%" }}>
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
