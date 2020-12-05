import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import BaseHeading from "../components/Base/Heading"
import BaseDescriptionBlock from "../components/Base/DescriptionBlock"
// import BaseSecondaryButton from "../components/Base/SecondaryButton"
import HomeSlider from "../components/HomeSlider"
import BaseRoomCard from "../components/Base/RoomCard"
import HomePracticalInformations from "../components/Home/HomePracticalInformations"

import translations from "../config/translations.json"
import { useTranslation } from "react-i18next"

const IndexPage = ({ pageContext }) => {
  const { t } = useTranslation()
  const blocks = translations.fr.translation.pages.home.blocks
  const rooms = translations.fr.translation.pages.home.roomsList.rooms

  const queryData = useStaticQuery(graphql`
    query {
      landingImage: file(relativePath: { eq: "home/landing/image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blockImages: allFile(
        filter: { relativeDirectory: { eq: "home/blocks" } }
      ) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  let blockListElements = []
  Object.keys(blocks).forEach((element, index) =>
    blockListElements.push(
      <BaseDescriptionBlock
        title={t(`pages.home.blocks.${element}.title`)}
        description={t(`pages.home.blocks.${element}.description`)}
        key={element}
        image={queryData.blockImages.nodes
          .filter(img => img.name === element)
          .map(img => img.childImageSharp.fluid)}
        position={index + 1}
        className={`mx-24 xs:mx-0 ${
          index + 1 < Object.keys(blocks).length
            ? "mb-64 md:mb-24 xs:mb-12"
            : ""
        }`}
      />
    )
  )

  let roomsListElements = []
  Object.keys(rooms).forEach(element =>
    roomsListElements.push(
      <BaseRoomCard
        name={element}
        key={element}
        className={"mb-24 mx-6 xs:mx-0"}
      />
    )
  )

  return (
    <div>
      <SEO
        title={t("pages.home.title")}
        description={t("siteMetadata.description")}
        lang={pageContext.locale}
      />
      <section className="display grid xs:block grid-cols-2 px-12 xs:px-6 py-6">
        <div className="flex justify-items-center items-center">
          <div>
            <div className="mr-12">
              <span className="text-primary text-5xl font-sans">
                {t("pages.home.incentivePartOne")}
              </span>
              &nbsp;
              <span className="text-action text-5xl font-serif font-bold">
                {t("pages.home.incentivePartTwo")}
              </span>
            </div>
            {/* <BaseSecondaryButton text={t("utils.discover")} /> */}
          </div>
        </div>
        <div className="h-full flex justify-items-center items-center">
          <Img
            fluid={queryData.landingImage.childImageSharp.fluid}
            className="border-4 border-solid border-action w-full"
          />
        </div>
      </section>
      <section className="display px-12 xs:px-0">
        <HomeSlider className="pb-12 xs:pb-0" />
      </section>
      <section className="bg-white px-12 xs:px-0 py-40 xs:py-24 flex flex-col items-center">
        {blockListElements}
      </section>
      <section className="p-24 xs:px-6 xs:py-12">
        <BaseHeading
          text={t("pages.home.roomsList.title")}
          className="xs:text-center"
        />
        <div className="m-auto max-w-4xl lg:max-w-7xl flex flex-wrap justify-around">
          {roomsListElements}
        </div>
      </section>
      <section className="bg-white p-24 xs:p-6 xs:pt-12 xs:pb-24">
        <BaseHeading
          text={t("pages.home.infos.title")}
          className="xs:text-center"
        />
        <HomePracticalInformations />
      </section>
    </div>
  )
}

export default IndexPage
