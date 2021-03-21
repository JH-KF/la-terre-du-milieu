import React from "react"
import BaseHeading from "../components/Base/Heading"

import { useTranslation } from "react-i18next"

import SEO from "../components/seo"

const OurRegion = ({pageContext, data}) => {
  const { t } = useTranslation()
  return (
  <>
    <SEO title={t("pages.ourRegion.title")} />
    <div className="mt-16 md:mt-6">
    <BaseHeading
            text={t("pages.ourRegion.title")}
            className="xs:text-center mb-16"
          />
    
    </div>
  </>
  )
}


export default OurRegion