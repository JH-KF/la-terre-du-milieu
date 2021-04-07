import React from "react"
import BaseHeading from "../components/Base/Heading"


import { useTranslation } from "react-i18next"

import SEO from "../components/seo"

const OurOffers = ({pageContext}) => {

  const { t } = useTranslation()
  const lng = pageContext.locale

  return (
  <>
    <SEO title={t("pages.ourOffers.title")} lang={lng} /> 
    <section className="bg-paper mt-16 md:mt-6">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <BaseHeading
          text={t("pages.ourOffers.title")}
          className="xs:text-center mb-16"
        />
        </div>
    </section>
  </>
  )
}


export default OurOffers
