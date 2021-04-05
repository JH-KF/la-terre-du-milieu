import React, { useState } from "react"
import { getImage } from "gatsby-plugin-image"

import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"

import CustomImage from "../CustomImage"

const PictureSlider = ({images}) => {

  const [index, setIndex] = useState(0)

  //Minus 1 for array offset from 0
  const length = images.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const image = images[index]

  return (
    <div className="relative w-full">
      <CustomImage
        image={getImage(image)}
        key={image.id}
        alt={image.name}
        typeFrame="landscape"
        className="z-0"
        hasBorder={true}
      />
      <div className="absolute bottom-0 right-0 mb-6 mr-6 z-10">
        <button onClick={() => handlePrevious()} className="mr-3">
          <BsChevronLeft className="h-10 w-10 text-white" />
        </button>
        <button onClick={() => handleNext()}>
          <BsChevronRight className="h-10 w-10 text-white" />
        </button>
      </div>
    </div>
  )
}

export default PictureSlider
