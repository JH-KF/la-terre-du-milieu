import React, { useState, useEffect } from "react"
import { getImage } from "gatsby-plugin-image"

import { VscClose } from "react-icons/vsc"
import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"

import BaseParchment from "../Parchment"
import CustomImage from "../../CustomImage"

const ModalGallery = ({images, index, setIndex}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const changeImage = (next) => {
    if (next) {
      if (index + 1 <= images.length - 1) {
        setIndex(index + 1)
      }
      else {
        setIndex(0)
      }
    }
    else {
      if (index - 1 >= 0) {
        setIndex(index - 1)
      }
      else {
        setIndex(images.length-1)
      }
    }
  }

  useEffect(() => {
    document.querySelector("body").style.overflowY = !isModalOpen
      ? "scroll"
      : "hidden"
  })

  useEffect(() => {
      if(Number.isInteger(index)) {
          setIsModalOpen(true)
      }
      else {
          setIsModalOpen(false)
      }
  }, [setIsModalOpen, index])

  return (
    <>
    { isModalOpen 
        ? <div className="z-1000 fixed inset-0 bg-modal-wrapper">
            <div className="h-full w-full grid place-content-center opacity-100">
              <BaseParchment light className="relative max-w-modal-wrapper w-screen p-8">
                <div className="absolute top-2 right-2">
                  <button onClick={() => setIndex(null)}>
                    <VscClose className="h-10 w-10 text-action" />
                  </button>
                </div>
                <div className="flex justify-center items-center my-6">
                  <button onClick={() => changeImage(false)}>
                    <BsChevronLeft className="h-10 w-10 text-action" />
                  </button>
                  <CustomImage
                      image={getImage(images[index])}
                      typeFrame="landscape"
                      alt="image"
                      className="z-0 max-w-modal-image w-full mx-4" 
                      hasBorder={true}
                  />
                  <button onClick={() => changeImage(true)}>
                    <BsChevronRight className="h-10 w-10 text-action" />
                  </button>
                </div>
                <div className="text-center text-primary">
                    <span className="font-calligraphy font-semibold">
                      {index + 1}
                    </span> 
                    <span>
                      &nbsp;
                      /
                      &nbsp;
                    </span> 
                    <span className="font-calligraphy font-semibold">
                      {images.length}
                    </span> 
                </div>
              </BaseParchment>
            </div>
          </div> 
        : null
      }
    </>
  )
}

export default ModalGallery
