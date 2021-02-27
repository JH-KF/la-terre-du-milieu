import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import i18n from "i18next"

const Logo = () => {
  const queryData = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "header/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 48) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { t } = useTranslation()
  const logoLink = i18n.language === "fr" ? "/" : `/${i18n.language}/`
  return (
    <Link to={logoLink}>
      <div className="flex items-center">
        <Img
          fluid={queryData.logo.childImageSharp.fluid}
          className="h-12 w-12 mr-4 flex-shrink-0"
        ></Img>
        <span className="text-gray-700 lg:text-2xl md:text-xl xs:text-xl xs:leading-6 font-calligraphy font-bold">
          {t("siteMetadata.title")}
        </span>
      </div>
    </Link>
  )
}

export default Logo
