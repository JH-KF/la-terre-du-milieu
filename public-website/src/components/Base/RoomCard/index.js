import React, { useContext } from "react"
// import Img from "gatsby-image"
import { useTranslation } from "react-i18next"

import BaseTitle from "../Title"
import BaseDescription from "../Description"
import BaseTertiaryButton from "../TertiaryButton"
import BaseParchment from "../Parchment"
import BaseSecondaryButton from "../SecondaryButton"

import CustomImage from "../../CustomImage"

import { BookModalContext } from "../../../context/bookModalContext"

const BaseRoomCard = ({ name, className, thumbnailImage }) => {
  const { setIsOpen, setRoomName } = useContext(BookModalContext)
  const { t } = useTranslation()

  const displayModalBookRoom = () => {
    setRoomName(t(`pages.home.roomsList.rooms.${name}.title`))
    setIsOpen(true)
    document.querySelector("body").style.overflowY = "hidden"
  }

  return (
    <BaseParchment className={`max-w-md px-2 pt-4 pb-6 ${className}`} light elevation>
      <CustomImage fluid={thumbnailImage} className="w-full mb-6" typeFrame="landscape" />

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
          className="xs:mb-12"
        />
        <BaseSecondaryButton
          text={t("utils.book")}
          onClick={displayModalBookRoom}
        />
      </div>
    </BaseParchment>
  )
}

export default BaseRoomCard
