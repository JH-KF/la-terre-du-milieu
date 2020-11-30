import React, { useContext } from "react"
// import Img from "gatsby-image"
import { useTranslation } from "react-i18next"

import BaseTitle from "../Title"
import BaseDescription from "../Description"
import BaseTertiaryButton from "../TertiaryButton"
import BaseSecondaryButton from "../SecondaryButton"

import { BookModalContext } from "../../../context/bookModalContext"

const BaseRoomCard = ({ name, className }) => {
  const { setIsOpen, setRoomName } = useContext(BookModalContext)
  const { t } = useTranslation()

  const displayModalBookRoom = () => {
    setRoomName(t(`pages.home.roomsList.rooms.${name}.title`))
    setIsOpen(true)
    document.querySelector("body").style.overflowY = "hidden"
  }

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
        <BaseTitle
          title={t(`pages.home.roomsList.rooms.${name}.title`)}
          className="mb-6"
        />
        <BaseDescription
          description={t(`pages.home.roomsList.rooms.${name}.description`)}
          className="text-justify mb-6"
        />
        <BaseDescription
          description={`"${t(`pages.home.roomsList.rooms.${name}.quote`)}"`}
          className="text-justify italic mb-1"
        />
        <BaseDescription
          description={t(`pages.home.roomsList.rooms.${name}.quoteAuthor`)}
          className="text-justify italic mb-6 font-semibold"
        />
      </div>
      <div className="flex justify-between xs:flex-col xs:items-center">
        <BaseTertiaryButton
          text={t("utils.seeMore")}
          className="ml-6 xs:ml-0 xs:mb-6"
        />
        <BaseSecondaryButton
          text={t("utils.book")}
          onClick={displayModalBookRoom}
        />
      </div>
    </article>
  )
}

export default BaseRoomCard
