import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { useTranslation } from "react-i18next"

import BaseDescription from "../Base/Description"

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
          <span className="font-calligraphy font-semibold text-gray-800 text-center text-2xl md:text-3xl">
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
        <div className="mb-2 md:mb-6">
          <div className="block md:grid md:col-cols-2 my-2 md:my-10">
            <div className="text-center md:text-left col-start-1 col-end-1 md:mb-0">
              {/* Address */}
              <OutboundLink href="https://goo.gl/maps/wu9bo8GNQm6rmsJr6" target="_blank">
                <BaseDescription description={t("footer.address1")} className="text-primary text-opacity-70 hover:underline" />
                <BaseDescription description={t("footer.address2")} className="mb-1 text-primary text-opacity-70 hover:underline" />
                {/* GPS */}
                <div className="flex flex-wrap justify-center md:justify-start mb-4">
                  <FaMapMarkerAlt className="mr-2 h-4 w-4 text-primary text-opacity-70" />
                  <span className="text-primary text-opacity-70 hover:underline">{"49.1869392, 6.9721865"}</span>
                </div>
              </OutboundLink>
              <iframe title="google-map" className="m-auto md:ml-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.7056280115153!2d6.970462915686017!3d49.187172279321004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b482eceec2f7%3A0x6b0401fdabc473b7!2s21%20Rue%20de%20la%20Carri%C3%A8re%2C%2057350%20Spicheren!5e0!3m2!1sfr!2sfr!4v1619640098095!5m2!1sfr!2sfr" width="300" height="200" style={{border:0, borderRadius:"4px"}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="col-start-2 col-end-2 text-center md:text-right place-self-end self-start mt-8 md:my-0">
              <OutboundLink href={`tel:${process.env.GATSBY_HREF_MONIQUE_MOBILE_PHONE}`}>
                <BaseDescription description={process.env.GATSBY_DISPLAY_MONIQUE_MOBILE_PHONE} className="text-opacity-70 hover:underline" />
              </OutboundLink>
              <OutboundLink href={`mailto:${process.env.GATSBY_MONIQUE_EMAIL}`}>
                <BaseDescription description={process.env.GATSBY_MONIQUE_EMAIL} className="text-opacity-70 hover:underline" />
              </OutboundLink>
            </div>
          </div>
        </div>
        <div className="hidden xs:flex justify-center my-10 md:my-10">
          <OutboundLink href="https://www.facebook.com/">
            <FaFacebookSquare className="text-primary  h-8 w-8 md:h-10 md:w-10 mx-12 hover:text-action" />
          </OutboundLink>
          <OutboundLink href="https://www.instagram.com/">
            <FaInstagram className="text-primary h-8 w-8 md:h-10 md:w-10 mx-12 hover:text-action" />
          </OutboundLink>
        </div>
        <div className="text-center text-primary text-opacity-70">
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
