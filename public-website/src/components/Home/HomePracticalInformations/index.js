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
      <div className="flex bg-white p-6 rounded items-center mb-6">
        <FaClock size={24} className="text-action flex-shrink-0" />
        <BaseDescription
          description={t("pages.home.infos.content.hours")}
          className="ml-6"
        />
      </div>

      <div className="flex bg-white p-6 rounded items-center mb-6">
        <FaCoffee size={24} className="text-action flex-shrink-0" />
        <BaseDescription
          description={t("pages.home.infos.content.breakfast")}
          className="ml-6"
        />
      </div>

      <div className="flex bg-white p-6 rounded items-center mb-6">
        <FaPaw size={24} className="text-action flex-shrink-0" />
        <BaseDescription
          description={t("pages.home.infos.content.pets")}
          className="ml-6"
        />
      </div>

      <div className="flex bg-white p-6 rounded items-center mb-6">
        <TiWiFi size={24} className="text-action flex-shrink-0" />
        <BaseDescription
          description={t("pages.home.infos.content.rooms")}
          className="ml-6"
        />
      </div>

      <div className="flex bg-white p-6 rounded items-center mb-6">
        <FaBath size={24} className="text-action flex-shrink-0" />
        <BaseDescription
          description={t("pages.home.infos.content.bathrooms")}
          className="ml-6"
        />
      </div>
      <div className="flex bg-white p-6 rounded items-center">
        <MdPool size={24} className="text-action flex-shrink-0" />
        <BaseDescription
          description={t("pages.home.infos.content.pool")}
          className="ml-6"
        />
      </div>
    </div>
  )
}

export default HomePracticalInformations
