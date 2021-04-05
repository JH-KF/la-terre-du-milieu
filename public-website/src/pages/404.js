import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import SEO from "../components/seo"
import BaseHeading from "../components/Base/Heading"
import BaseDescription from "../components/Base/Description"
import BaseTertiaryButton from "../components/Base/TertiaryButton"

import gif from '../images/gifs/404.gif'

const NotFoundPage = () => {
  const { t, i18n} = useTranslation()

  return (
  <>
    <SEO title={t("pages.404.title")} />
    <section className="relative bg-paper px-12 xs:px-6">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <BaseHeading text={t("pages.404.title")} className={"my-16"} />
        <div>
            <img className="m-auto mb-8" src={gif} alt="Gandalf falling" />
            <BaseDescription className="text-center mb-16 font-calligraphy" description={t("pages.404.description")}/>
        </div>
      </div>
    </section>
    <section className="relative bg-paper bg-paper--white px-12 xs:px-6 altered-before py-40 xs:py-24">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <div className="text-center">
            <Link to={`${i18n.options.fallbackLng[0] === i18n.language ? "/" : "/"+i18n.language}`}>
              <BaseTertiaryButton text={t("pages.404.homeButton")} />
            </Link>
        </div>
      </div>
    </section>
  </>
  )
}

export default NotFoundPage
