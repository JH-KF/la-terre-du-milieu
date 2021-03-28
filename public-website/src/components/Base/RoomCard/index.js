import React, { useContext } from "react"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"

import BaseTitle from "../Title"
import BaseDescription from "../Description"
import BaseTertiaryButton from "../TertiaryButton"
import BaseParchment from "../Parchment"
import BaseSecondaryButton from "../SecondaryButton"

import CustomImage from "../../CustomImage"

import { BookModalContext } from "../../../context/bookModalContext"

const BaseRoomCard = ({ title, description, quote, quoteAuthor, className, thumbnailImage, path, light = true, imageHasBorder = false }) => {
  const { setIsOpen, setRoomName } = useContext(BookModalContext)
  const { t } = useTranslation()

  const displayModalBookRoom = () => {
    setRoomName(title)
    setIsOpen(true)
    document.querySelector("body").style.overflowY = "hidden"
  }
  return (
    <BaseParchment className={`max-w-md px-2 pt-4 pb-6 ${className}`} light={light} >
      <Link to={path}>
        <CustomImage image={thumbnailImage} alt={title} className="w-full mb-6" typeFrame="landscape" hasBorder={imageHasBorder}/>
      </Link>    
      <div className="mb-6">
        <BaseTitle
          title={title}
          className="mb-6"
        />
        <BaseDescription
          description={description}
          className="text-justify mb-6"
        />
        <BaseDescription
          description={quote}
          className="text-justify italic mb-1"
        />
        <BaseDescription
          description={quoteAuthor}
          className="text-justify italic mb-6 font-semibold"
        />
      </div>
      <div className="flex justify-between items-center xs:flex-col xs:items-center">
        <BaseTertiaryButton
          text={t("utils.seeMore")}
          className="xs:mb-12"
          path={path}
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
