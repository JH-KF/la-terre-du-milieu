import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import i18n from "i18next"

const Logo = () => {
  const { t } = useTranslation()
  const logoLink = i18n.language === "fr" ? "/" : `/${i18n.language}/`
  return (
    <Link to={logoLink}>
      <div className="flex items-center">
        <StaticImage
          src="../../images/header/logo.png"
          alt="Logo"
          placeholder="blurred"
          layout="fixed"
          width={48}
          height={48}
          className="mr-4 flex-shrink-0"
        ></StaticImage>
        <span className="text-gray-700 lg:text-2xl md:text-xl xs:text-xl xs:leading-6 font-calligraphy font-bold">
          {t("pages.home.title")}
        </span>
      </div>
    </Link>
  )
}

export default Logo
