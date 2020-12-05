import React from "react"

import { useTranslation } from "react-i18next"

const Logo = () => {
  const { t } = useTranslation()
  return (
    <div className="text-gray-800 lg:text-3xl md:text-2xl xs:text-2xl xs:leading-6 font-serif font-bold">
      {t("siteMetadata.title")}
    </div>
  )
}

export default Logo
