import React from "react"

import BaseTitle from "../Title/index"
import BaseDescription from "../Description/index"
import BaseParchment from "../Parchment"

import CustomImage from "../../CustomImage"

const BaseDescriptionBlock = ({
  title,
  description,
  image,
  position,
  className,
}) => {
  return (
    <BaseParchment
      className={`max-w-md md:max-w-screen-lg flex flex-col lg:flex-row px-2 py-6  ${
        position % 2 ? "md:pr-12" : "md:pl-12"
      } ${className}`}
    >
      <CustomImage
        hasBorder={true}
        image={image}
        alt={title}
        typeFrame="square"
        className={`h-64 w-64 md:h-96 md:w-96 flex-shrink-0 transform order-first -translate-y-16 lg:-translate-y-24 ${
          position % 2
            ? "-rotate-2 -translate-x-0 lg:-translate-x-12"
            : "rotate-2 translate-x-0 lg:translate-x-12 self-end lg:order-last"
        }`}
      />
      <div className="order-none">
        <BaseTitle title={title} className="mb-10 font-calligraphy" />
        <BaseDescription description={description} />
      </div>
    </BaseParchment>
  )
}

export default BaseDescriptionBlock
