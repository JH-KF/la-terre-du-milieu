import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

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
  return (
    <div className="flex items-center">
      <Img
        fluid={queryData.logo.childImageSharp.fluid}
        className="h-12 w-12 mr-4 flex-shrink-0"
      ></Img>
      <span className="text-gray-800 lg:text-2xl md:text-xl xs:text-xl xs:leading-6 font-calligraphy font-bold">
        {t("siteMetadata.title")}
      </span>
    </div>
  )
}

export default Logo
