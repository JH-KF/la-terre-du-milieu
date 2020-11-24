import React from "react"
import { FaPaw } from "react-icons/fa"
import { TiWiFi } from "react-icons/ti"
import { FaCoffee } from "react-icons/fa"
import { FaBath } from "react-icons/fa"
import { FaClock } from "react-icons/fa"
import { MdPool } from "react-icons/md"

import { useTranslation } from "react-i18next"

import BaseDescription from "../../Base/Description"

const HomePracticalInformations = () => {
  const { t } = useTranslation()
  return (
    <div className="m-auto max-w-4xl">
      <div className="flex xs:block bg-background p-6 rounded items-center mb-12">
        <FaClock className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription description={t("pages.home.infos.content.hours")} />
      </div>

      <div className="flex xs:block bg-background p-6 rounded items-center mb-12">
        <FaCoffee className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={t("pages.home.infos.content.breakfast")}
        />
      </div>

      <div className="flex xs:block bg-background p-6 rounded items-center mb-12">
        <FaPaw className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription description={t("pages.home.infos.content.pets")} />
      </div>

      <div className="flex xs:block bg-background p-6 rounded items-center mb-12">
        <TiWiFi className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription description={t("pages.home.infos.content.rooms")} />
      </div>

      <div className="flex xs:block bg-background p-6 rounded items-center mb-12">
        <FaBath className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={t("pages.home.infos.content.bathrooms")}
        />
      </div>
      <div className="flex xs:block bg-background p-6 rounded items-center">
        <MdPool
          size={24}
          className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6"
        />
        <BaseDescription description={t("pages.home.infos.content.pool")} />
      </div>
    </div>
  )
}

export default HomePracticalInformations
