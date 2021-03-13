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
      elevation
      className={`max-w-screen-lg xs:max-w-md flex flex-col lg:flex-row md:px-6 xs:px-2 py-6  ${
        position % 2 ? "pr-12" : "pl-12"
      } ${className}`}
    >
      <CustomImage
        hasBorder={true}
        fixed={image}
        typeFrame="square"
        className={`h-96 w-96 xs:h-64 xs:w-64 flex-shrink-0 transform md:order-first xs:order-first -translate-y-24 md:-translate-y-16 xs:-translate-y-16 ${
          position % 2
            ? "-rotate-2 -translate-x-12 md:-translate-x-0 xs:-translate-x-0  order-first"
            : "rotate-2 translate-x-12 md:translate-x-0 xs:translate-x-0 order-last md:self-end xs:self-end"
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
