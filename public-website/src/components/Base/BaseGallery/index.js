import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import PictureSlider from "../../PictureSlider"
import BaseSecondaryButton from "../SecondaryButton"
import ModalGallery from "../ModalGallery"


const RoomPictureGallery = ({className, images}) => {


  const [activeModalImageIndex, setActiveModalImageIndex] = useState(null);
  
  const image1 = images[0]
  const image2 = images[1] || images[images.length -1];
  const image3 = images[2] || images[images.length -1];
  const image4 = images[3] || images[images.length -1];
  const image5 = images[4] || images[images.length -1];

  return (
    <div>
      <div className={`${className} block md:grid grid-cols-4 grid-rows-2 gap-4 max-h-gallery md:min-h-96`}>
          <div className="block items-center md:hidden relative">
          <PictureSlider images={images} />
          </div>
          <div 
            role="button" 
            tabIndex={-0} 
            onClick={() => setActiveModalImageIndex(0)}  
            onKeyDown={() => setActiveModalImageIndex(0)}
            className="cursor-pointer hidden md:block col-start-1 col-end-3 row-start-1 row-end-3 relative picture-custom-border-1"
          >
            <GatsbyImage 
              image={getImage(image1)}  
              alt={image1.name}
              className="h-full w-full" 
              imgStyle={{clipPath: "url(#image-path)"}}
              
            />
          </div>
          <div 
            role="button" 
            tabIndex={-1} 
            onClick={() => setActiveModalImageIndex(1)} 
            onKeyDown={() => setActiveModalImageIndex(1)}
            className="cursor-pointer hidden md:block col-start-3 col-end-4 row-start-1 row-end-2 relative picture-custom-border-1"
          >
            <GatsbyImage 
              image={getImage(image2)} 
              alt={image2.name}
              className="h-full w-full" 
              imgStyle={{clipPath: "url(#image-path)"}} 
            />
          </div>
          <div 
            role="button" 
            tabIndex={-2} 
            onClick={() => setActiveModalImageIndex(2)} 
            onKeyDown={() => setActiveModalImageIndex(2)}
            className="cursor-pointer hidden md:block col-start-4 col-end-5 row-start-1 row-end-2 relative picture-custom-border-1"
          >
            <GatsbyImage 
              image={getImage(image3)} 
              alt={image3.name}
              className="h-full w-full" 
              imgStyle={{clipPath: "url(#image-path)"}} 
            />
          </div>
          <div 
            role="button" 
            tabIndex={-3} 
            onClick={() => setActiveModalImageIndex(3)}
            onKeyDown={() => setActiveModalImageIndex(3)}
            className="cursor-pointer hidden md:block col-start-3 col-end-4 row-start-2 row-end-3 relative picture-custom-border-1"
          >
            <GatsbyImage 
              image={getImage(image4)} 
              alt={image4.name}
              className="h-full w-full" 
              imgStyle={{clipPath: "url(#image-path)"}} 
              />
          </div>
          <div className="hidden md:block col-start-4 col-end-5 row-start-2 row-end-3 relative picture-custom-border-1">
            <div 
              role="button" 
              tabIndex={-4} 
              className="z-10 relative h-full w-full cursor-pointer" 
              onClick={() => setActiveModalImageIndex(4)}
              onKeyDown={() => setActiveModalImageIndex(4)}
            >
              <GatsbyImage 
                image={getImage(image5)}
                alt={image5.name}
                className="h-full w-full" 
                imgStyle={{clipPath: "url(#image-path)"}} 
              />
            </div>
            { images.length > 5 ?
              <div className="z-10 absolute bottom-4 right-2">
                <BaseSecondaryButton text={"voir plus"} onClick={() => setActiveModalImageIndex(5)}  />
              </div>
              :null
            }
          </div>
      </div>
      <ModalGallery images={images} index={activeModalImageIndex} setIndex={setActiveModalImageIndex} />
  </div>
  )
}

export default RoomPictureGallery
