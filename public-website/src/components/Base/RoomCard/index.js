import React from "react"
// import Img from "gatsby-image"
import { useTranslation } from "react-i18next"

import BaseTitle from "../Title/index"
import BaseDescription from "../Description/index"
import BaseTertiaryButton from "../TertiaryButton"
import BaseSecondaryButton from "../SecondaryButton"

const BaseRoomCard = ({
  title,
  quote,
  quoteAuthor,
  description,
  className,
}) => {
  const { t } = useTranslation()

  return (
    <article className={`bg-background max-w-sm ${className}`}>
      {/* <Img
        fluid={image}
        style={{ height: "344px", width: "344px" }}
        className={`bg-gray-400 flex-shrink-0 transform md:order-first xs:order-first -translate-y-24 md:-translate-y-12 xs:-translate-y-12`}
      /> */}
      <div
        style={{ height: "250px" }}
        className={`bg-gray-400 mb-6 w-sm`}
      ></div>

      <div className="mb-6">
        <BaseTitle title={title} className="mb-6" />
        <BaseDescription
          description={`"${quote}"`}
          className="text-justify italic mb-3"
        />
        <BaseDescription
          description={quoteAuthor}
          className="text-justify italic font-bold mb-6"
        />
        <BaseDescription description={description} className="text-justify" />
      </div>
      <div className="flex justify-between xs:flex-col xs:items-center">
        <BaseTertiaryButton
          text={t("utils.seeMore")}
          className="ml-6 xs:ml-0 xs:mb-6"
        />
        <BaseSecondaryButton text={t("utils.book")} />
      </div>
    </article>
  )
}

export default BaseRoomCard
