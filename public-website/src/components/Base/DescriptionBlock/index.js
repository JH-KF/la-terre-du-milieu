import React from "react"

import BaseTitle from "../Title/index"
import BaseDescription from "../Description/index"
import BaseParchment from "../Parchment"

import CustomImage from "../../CustomImage"
import BaseTertiaryButton from "../TertiaryButton"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"


const BaseDescriptionBlock = ({
  title,
  description,
  image,
  link,
  position,
  className,
  light = false,
  children
  
}) => {
  const { t, i18n } = useTranslation()
  return (
    <BaseParchment
      className={`max-w-md md:max-w-screen-lg px-4 md:px-12 py-6  ${className}`} 
      light={light}
    >
      <div className="flex flex-col lg:flex-row mb-8 lg:mb-0">
        <CustomImage
          hasBorder={true}
          image={image}
          alt={title}
          typeFrame="square"
          className={`h-64 w-64 md:h-96 md:w-96 flex-shrink-0 transform order-first -translate-y-16 lg:-translate-y-24 ${
            position % 2
              ? "-rotate-2 -translate-x-0 lg:-translate-x-20"
              : "rotate-2 translate-x-0 lg:translate-x-20 lg:order-last"
          }`}
        />
        <div className="order-none">
          <BaseTitle title={title} className="mb-10 font-calligraphy" />
          <BaseDescription description={description} />
          {link ? 
          <div className="text-center md:text-right my-4">
            <Link to={`/${i18n.options.fallbackLng[0] === i18n.language ? "" : i18n.language + "/"}${t(`pages.${link.to}.path`)}`} className="mb">
              <BaseTertiaryButton text={link.name[i18n.language]} /> 
            </Link>
          </div>
          : 
          null}
        </div>
      </div>
      <div className={children ? "mt-10" : ""}>
        {children}
      </div>
    </BaseParchment>
  )
}

export default BaseDescriptionBlock
