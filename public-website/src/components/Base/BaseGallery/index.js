import React from "react"
import Img from "gatsby-image"

const BaseGallery = ({className, images}) => {
  const image1 = images[0]
  const image2 = images[1] || images[images.length -1];
  const image3 = images[2] || images[images.length -1];
  const image4 = images[3] || images[images.length -1];
  const image5 = images[4] || images[images.length -1];
  return (
    <div className={`${className} block md:grid grid-cols-4 grid-rows-2 gap-4 max-h-gallery md:min-h-96`}>
        <div className="relative picture-custom-border-1">
          <Img 
            fluid={image1.childImageSharp.fluid} 
            hasBorder={true} 
            imgStyle={{clipPath: "url(#image-path)"}} 
            typeFrame="landscape"
            className="block md:hidden"
          />
        </div>
        <div className="hidden md:block col-start-1 col-end-3 row-start-1 row-end-3 relative picture-custom-border-1">
          <Img 
            fluid={image1.childImageSharp.fluid} 
            hasBorder={true} 
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
          />
        </div>
        <div className="hidden md:block col-start-3 col-end-4 row-start-1 row-end-2 relative picture-custom-border-1">
          <Img 
            fluid={image2.childImageSharp.fluid} 
            hasBorder={true} 
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
          />
        </div>
        <div className="hidden md:block col-start-4 col-end-5 row-start-1 row-end-2 relative picture-custom-border-1">
          <Img 
            fluid={image3.childImageSharp.fluid} 
            hasBorder={true} 
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
          />
        </div>
        <div className="hidden md:block col-start-3 col-end-4 row-start-2 row-end-3 relative picture-custom-border-1">
          <Img 
            fluid={image4.childImageSharp.fluid} 
            hasBorder={true} 
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
            />
        </div>
        <div className="hidden md:block col-start-4 col-end-5 row-start-2 row-end-3 relative picture-custom-border-1">
          <Img 
            fluid={image5.childImageSharp.fluid} 
            hasBorder={true} 
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
          />
        </div>
    </div>
  )
}

export default BaseGallery
