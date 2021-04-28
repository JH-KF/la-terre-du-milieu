import React from "react"
import { FaPaw } from "react-icons/fa"
import { TiWiFi } from "react-icons/ti"
import { FaCoffee } from "react-icons/fa"
import { FaBath } from "react-icons/fa"
import { FaClock } from "react-icons/fa"
import { MdPool } from "react-icons/md"
import { GiBarbecue } from "react-icons/gi"

import { useTranslation } from "react-i18next"

import BaseDescription from "../../Base/Description"
import BaseParchment from "../../Base/Parchment"

const HomePracticalInformation = () => {
  const { t } = useTranslation()
  return (
    <div className="m-auto max-w-4xl">
      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <FaClock className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={t("pages.home.infos.content.hours")}
          className="xs:text-justify"
        />
      </BaseParchment>

      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <FaCoffee className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={t("pages.home.infos.content.breakfast")}
          className="xs:text-justify"
        />
      </BaseParchment>

      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <FaPaw className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={t("pages.home.infos.content.pets")}
          className="xs:text-justify"
        />
      </BaseParchment>

      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <TiWiFi className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={t("pages.home.infos.content.rooms")}
          className="xs:text-justify"
        />
      </BaseParchment>

      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <FaBath className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={t("pages.home.infos.content.bathrooms")}
          className="xs:text-justify"
        />
      </BaseParchment>

      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <GiBarbecue className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={t("pages.home.infos.content.outsideEquiments")}
          className="xs:text-justify"
        />
      </BaseParchment>

      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <MdPool
          size={24}
          className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6"
        />
        <BaseDescription
          description={t("pages.home.infos.content.pool")}
          className="xs:text-justify"
        />
      </BaseParchment>
    </div>
  )
}

export default HomePracticalInformation
