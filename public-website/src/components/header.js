import React from "react"

import BasePrimaryButton from "../components/Base/PrimaryButton/index"
import BaseTertiaryButton from "../components/Base/TertiaryButton/index"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="bg-background">
      <div className="px-12 py-6 flex flex-row items-center justify-between">
        <div className="text-gray-800 text-4xl font-serif">
          {t("siteMetadata.title")}
        </div>
        <section className="flex flex-row items-center">
          <BaseTertiaryButton text={t("header.rooms")} className="mx-12" />
          <BaseTertiaryButton text={t("header.ourRegion")} className="mx-12" />
          <BasePrimaryButton text={t("utils.book")} className="ml-12" />
        </section>
      </div>
    </header>
  )
}

export default Header
