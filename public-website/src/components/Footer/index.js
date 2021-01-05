import React from "react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  const queryData = useStaticQuery(graphql`
    query {
      gitedefranceImage: file(
        relativePath: { eq: "footer/gite-de-france-logo.png" }
      ) {
        childImageSharp {
          fixed(width: 93) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <footer className="pt-24">
      <div className=" pb-4 xs:pt-12 px-12 xs:px-6 max-w-screen-xl m-auto">
        <div className="flex items-center mb-12">
          <span className="hidden border-t border-solid border-primary  mx-12 flex-grow xs:block xs:mx-0 xs:mr-8"></span>
          <span className="font-serif font-semibold text-gray-800 text-3xl text-center xs:text-xl">
            {t("siteMetadata.title")}
          </span>
          <span className="border-t border-solid border-primary mx-12 flex-grow xs:mx-0 xs:ml-8"></span>
          <FaFacebookSquare className="text-primary h-6 w-6 hover:text-action xs:hidden" />
          <FaInstagram className="text-primary h-6 w-6 ml-12 hover:text-action xs:hidden" />
        </div>
        <div className="mb-12">
          <Img fixed={queryData.gitedefranceImage.childImageSharp.fixed} />
        </div>
        <div className="hidden xs:flex justify-center my-12">
          <FaFacebookSquare className="text-primary h-10 w-10 mx-12 hover:text-action" />
          <FaInstagram className="text-primary h-10 w-10 mx-12 hover:text-action" />
        </div>
        <div className="text-center text-primary text-opacity-70">
          <div>{t("footer.legalMention")}</div>
          <div>{t("footer.generalRentalTermsAndConditions")}</div>
        </div>
      </div>
      <div className="bg-white text-gray-600 text-sm text-center py-2">
        {t("footer.madeBy")}{" "}
        <a
          href="https://www.linkedin.com/in/justinehell/"
          target="blank"
          className="text-primary hover:text-action underline"
        >
          {"Justine"}
        </a>
        {" & "}
        <a
          href="https://www.linkedin.com/in/kevin-fabre/"
          target="blank"
          className="text-primary hover:text-action underline"
        >
          Kevin
        </a>
      </div>
    </footer>
  )
}

export default Footer
