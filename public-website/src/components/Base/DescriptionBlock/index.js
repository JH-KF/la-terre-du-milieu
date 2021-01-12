import React from "react"

import BaseTitle from "../Title/index"
import BaseDescription from "../Description/index"
import CustomImage from "../../CustomImage"
const BaseDescriptionBlock = ({
  title,
  description,
  image,
  position,
  className,
}) => {
  return (
    <article
      className={`bg-paper md:bg-transparent xs:bg-transparent max-w-screen-lg xs:max-w-md flex md:flex-col xs:flex-col md:px-6 xs:px-6 py-12  ${
        position % 2 ? "pr-12" : "pl-12"
      } ${className}`}
    >
      <CustomImage
        hasBorder={true}
        image={image}
        typeFrame="square"
        className={`h-96 w-96 xs:h-64 xs:w-64 flex-shrink-0 transform md:order-first xs:order-first -translate-y-24 md:-translate-y-12 xs:-translate-y-12 ${
          position % 2
            ? "-rotate-2 -translate-x-12 md:-translate-x-0 xs:-translate-x-0  order-first"
            : "rotate-2 translate-x-12 md:translate-x-0 xs:translate-x-0 order-last md:self-end xs:self-end"
        }`}
      />
      <div className="order-none">
        <BaseTitle title={title} className="mb-10" />
        <BaseDescription description={description} className="text-justify" />
      </div>
    </article>
  )
}

export default BaseDescriptionBlock
