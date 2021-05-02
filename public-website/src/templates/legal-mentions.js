import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import BlockContent from "@sanity/block-content-to-react"
import BaseParchment from "../components/Base/Parchment"
import BaseHeading from "../components/Base/Heading"
import BaseTitle from "../components/Base/Title"
import BaseDescription from "../components/Base/Description"

import Seo from "../components/seo"

const LegalMentions = ({pageContext, data}) => {

  const { t } = useTranslation()
  const lng = pageContext.locale;
  return (
  <>
    <Seo title={t("pages.legalMentions.title")} lang={lng} /> 
    <section className="bg-paper my-16">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <BaseHeading
          text={t("pages.legalMentions.title")}
          className="text-center mb-16"
        />
        <BaseParchment light className="p-4 md:p-6 max-w-xl mx-auto">
          <div id="rich-text-wrapper">
            <BlockContent blocks={data.sanityLegalMentions._rawContent[lng]} />
          </div>

        </BaseParchment>
      </div>
    </section>
    <section className="relative bg-paper bg-paper--white mt-16 md:mt-6 py-12 md:py-24 altered-before">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <BaseHeading
          text={"Contact"}
          className="text-center mb-16"
        />
        <div className="m-auto text-center">
            {/* By phone */}
            <div className="mt-4 mb-6 text-center">
              <BaseDescription
                description={t("modal.callTo")}
                className="mb-2"
              />
              <OutboundLink href={`tel:${process.env.GATSBY_HREF_MONIQUE_MOBILE_PHONE}`}>
                <BaseTitle
                  title={process.env.GATSBY_DISPLAY_MONIQUE_MOBILE_PHONE}
                  className="text-action"
                />
              </OutboundLink>
            </div>
            {/* By e-mail */}
            <div className="text-center">
              <BaseDescription
                description={t("modal.sendTo")}
                className="mb-2"
              />
              <OutboundLink href={`mailto:${process.env.GATSBY_MONIQUE_EMAIL}`}>
                <BaseTitle
                  title={process.env.GATSBY_MONIQUE_EMAIL}
                  className="text-action"
                />
              </OutboundLink>
            </div>
          </div>
        </div>
    </section>
  </>
  )
}


export default LegalMentions

export const query = graphql`
query MyQuery {
  sanityLegalMentions {
    _rawContent
  }
}`