import React from "react"
import { useTranslation } from "react-i18next"

import BaseTitle from "../Title"
import BaseDescription from "../Description"
import BaseParchment from "../Parchment"
import BaseSecondaryButton from "../SecondaryButton"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import CustomImage from "../../CustomImage"



const BaseRoomCard = ({ title, description, className, thumbnailImage, url, light = false }) => {
  const { t } = useTranslation()

  return (
    <BaseParchment className={`min-w-card max-w-card px-2 pt-4 pb-6 ${className}`} light={light} >
    <CustomImage image={thumbnailImage} alt={title} className="w-full mb-6" typeFrame="landscape" hasBorder={true}/>  
      <div className="mb-6">
        <BaseTitle
          title={title}
          className="mb-6"
        />
        <BaseDescription
          description={description}
          className="text-justify mb-6"
        /> 
      </div>
      <div className="flex justify-end">
        <OutboundLink href={url} target="blank">
        <BaseSecondaryButton
          text={t("utils.seeMore")}
        />
        </OutboundLink>
      </div>
    </BaseParchment>
  )
}

export default BaseRoomCard
