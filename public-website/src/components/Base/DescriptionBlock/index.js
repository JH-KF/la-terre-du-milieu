import React, { useState } from "react"

import BaseTitle from "../Title/index"
import BaseDescription from "../Description/index"

const BaseDescriptionBlock = ({
  title,
  description,
  image,
  position,
  className,
}) => {
  return (
    <article
      className={`bg-background max-w-screen-lg flex py-12 pr-12 ${className}`}
    >
      <div
        style={{ height: "344px", width: "344px" }}
        className="bg-gray-400 flex-shrink-0 transform rotate-2 -translate-x-12 -translate-y-24"
      ></div>
      <div>
        <BaseTitle title={title} className="mb-10" />
        <BaseDescription description={description} />
      </div>
    </article>
  )
}

export default BaseDescriptionBlock
