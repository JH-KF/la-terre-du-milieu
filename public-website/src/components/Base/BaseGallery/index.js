import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BaseGallery = ({className, images}) => {
  const image1 = images[0]
  const image2 = images[1] || images[images.length -1];
  const image3 = images[2] || images[images.length -1];
  const image4 = images[3] || images[images.length -1];
  const image5 = images[4] || images[images.length -1];
  return (
    <div className={`${className} block md:grid grid-cols-4 grid-rows-2 gap-4 max-h-gallery md:min-h-96`}>
        <div className="block md:hidden relative picture-custom-border-1">
          <GatsbyImage 
            image={getImage(image1)} 
            alt={image1.name}
            imgStyle={{clipPath: "url(#image-path)"}} 
            layout="fullWidth"   
          />
        </div>
        <div className="hidden md:block col-start-1 col-end-3 row-start-1 row-end-3 relative picture-custom-border-1">
          <GatsbyImage 
            image={getImage(image1)}  
            alt={image1.name}
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
          />
        </div>
        <div className="hidden md:block col-start-3 col-end-4 row-start-1 row-end-2 relative picture-custom-border-1">
          <GatsbyImage 
            image={getImage(image2)} 
            alt={image2.name}
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
          />
        </div>
        <div className="hidden md:block col-start-4 col-end-5 row-start-1 row-end-2 relative picture-custom-border-1">
          <GatsbyImage 
            image={getImage(image3)} 
            alt={image3.name}
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
          />
        </div>
        <div className="hidden md:block col-start-3 col-end-4 row-start-2 row-end-3 relative picture-custom-border-1">
          <GatsbyImage 
            image={getImage(image4)} 
            alt={image4.name}
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
            />
        </div>
        <div className="hidden md:block col-start-4 col-end-5 row-start-2 row-end-3 relative picture-custom-border-1">
          <GatsbyImage 
            image={getImage(image5)}
            alt={image5.name}
            className="h-full w-full" 
            imgStyle={{clipPath: "url(#image-path)"}} 
          />
        </div>
    </div>
  )
}

export default BaseGallery
