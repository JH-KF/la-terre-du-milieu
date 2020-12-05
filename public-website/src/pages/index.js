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
      <section className="px-12 xs:px-6">
        <div className="max-w-screen-xl m-auto display grid xs:block grid-cols-2">
          <div className="flex justify-center items-center">
            <div className="mr-12 xs:mr-0 xs:my-24">
              <span className="text-primary text-5xl font-sans">
                {t("pages.home.incentivePartOne")}
              </span>
              &nbsp;
              <span className="text-action text-5xl font-serif font-bold">
                {t("pages.home.incentivePartTwo")}
              </span>
            </div>
          </div>
          <div className="xs:hidden h-full flex items-center">
            <Img
              fluid={queryData.landingImage.childImageSharp.fluid}
              className="border-4 border-solid border-action w-full"
            />
          </div>
        </div>
      </section>
      <section className="display px-12 xs:px-0">
        <HomeSlider className="pb-12 xs:pb-0 max-w-screen-xl m-auto" />
      </section>
      <section className="bg-white px-12 xs:px-0 py-40 xs:py-24 ">
        <div className="max-w-screen-xl m-auto flex flex-col items-center">
          {blockListElements}
        </div>
      </section>
      <section className="py-24 px-12 xs:px-6 xs:py-12">
        <div className="max-w-screen-xl m-auto">
          <BaseHeading
            text={t("pages.home.roomsList.title")}
            className="xs:text-center"
          />
          <div className="m-auto max-w-4xl lg:max-w-7xl flex flex-wrap justify-around">
            {roomsListElements}
          </div>
        </div>
      </section>
      <section className="bg-white py-24 px-12 xs:p-6 xs:pt-12 xs:pb-24">
        <div className="max-w-screen-xl m-auto">
          <BaseHeading
            text={t("pages.home.infos.title")}
            className="xs:text-center"
          />
          <HomePracticalInformations />
        </div>
      </section>
    </div>
  )
}

export default IndexPage
