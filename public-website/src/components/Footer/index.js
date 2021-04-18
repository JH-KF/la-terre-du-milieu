import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          websiteName
        }
      }
    }`
  ) 
  return (
    <footer className="pt-16 xs:pt-0 global-footer bg-paper">
      <div className="pb-4 xs:pt-12 px-12 xs:px-6 max-w-screen-xl m-auto">
        <div className="flex items-center xs:justify-center mb-12">
          <span className="hidden border-t border-solid border-primary mx-12 flex-grow xs:hidden"></span>
          <span className="font-calligraphy font-semibold text-gray-800 text-3xl text-center xs:text-xl">
            {queryData.site.siteMetadata.websiteName}
          </span>
          <span className="border-t border-solid border-primary mx-12 flex-grow xs:hidden"></span>
          <OutboundLink href="https://www.facebook.com/">
            <FaFacebookSquare className="text-primary h-6 w-6 hover:text-action xs:hidden" />
          </OutboundLink>
          <OutboundLink href="https://www.instagram.com/">
            <FaInstagram className="text-primary h-6 w-6 ml-12 hover:text-action xs:hidden" />
          </OutboundLink>
        </div>
        <div className="mb-12 xs:mb-4">
          <StaticImage src="../../images/footer/gite-de-france-logo.png" alt="gite de france" />
        </div>
        <div className="hidden xs:flex justify-center my-12 xs:my-4">
          <OutboundLink href="https://www.facebook.com/">
            <FaFacebookSquare className="text-primary h-10 w-10 mx-12 hover:text-action" />
          </OutboundLink>
          <OutboundLink href="https://www.instagram.com/">
            <FaInstagram className="text-primary h-10 w-10 mx-12 hover:text-action" />
          </OutboundLink>
        </div>
        <div className="text-center text-primary text-opacity-70">
          <div>
            <Link to="/">
              <span className="text-action hover:underline">FR</span>
            </Link>
            &nbsp;
            <span>|</span>
            &nbsp;
            <Link to="/en/">
              <span className="text-action hover:underline">EN</span>
            </Link>
            &nbsp;
            <span>|</span>
            &nbsp;
            <Link to="/de/">
              <span className="text-action hover:underline">DE</span>
            </Link>
          </div>
        
          <Link to="/">
            <div className="hover:underline">{t("footer.legalMention")}</div>
          </Link>
          <Link to="/">
            <div className="hover:underline">{t("footer.generalRentalTermsAndConditions")}</div>
          </Link>
        </div>
      </div>
      <div className="bg-white text-gray-600 text-sm text-center py-2">
        {t("footer.madeBy")}{" "}
        <OutboundLink
          href="https://www.linkedin.com/in/justinehell/"
          target="blank"
          className="text-primary hover:text-action underline"
        >
          {"Justine"}
        </OutboundLink>
        {" & "}
        <OutboundLink
          href="https://www.linkedin.com/in/kevin-fabre/"
          target="blank"
          className="text-primary hover:text-action underline"
        >
          Kevin
        </OutboundLink>
      </div>
    </footer>
  )
}

export default Footer
