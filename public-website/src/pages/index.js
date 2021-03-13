import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import BaseHeading from "../components/Base/Heading"
import BaseDescriptionBlock from "../components/Base/DescriptionBlock"
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
            src
          }
        }
      },
      roomsBackground: file(relativePath: { eq: "home/rooms-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }, 
      logoImage: file(relativePath: { eq: "home/landing/logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
      blockImages: allFile(
        filter: { relativeDirectory: { eq: "home/blocks" } }
      ) {
        nodes {
          name
          childImageSharp {
            fixed(width: 400, height: 400, quality: 100) {
              ...GatsbyImageSharpFixed
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
          .map(img => img.childImageSharp.fixed)}
        position={index + 1}
        className={`mx-24 xs:mx-0 ${
          index + 1 < Object.keys(blocks).length
            ? "mb-64 md:mb-48 xs:mb-48"
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
      <section className="bg-paper px-12 xs:px-6 xs:py-16 calligraph-background calligraph-background-before">
        <div className="max-w-screen-xl m-auto display grid gap-x-24 xs:block grid-cols-5">
          <div className="flex items-center xs:max-w-sm xs:m-auto col-span-2 xs:mb-16">
            <div style={{width: "100%"}}>
              <Img
                imgStyle={{
                  objectFit: "contain",
                }}
                fluid={queryData.logoImage.childImageSharp.fluid}
              ></Img>
            </div>
          </div>
          <div className="flex items-center col-span-3">
            <HomeSlider />
          </div>
        </div>
      </section>
      <section className="relative bg-paper bg-paper--white px-12 xs:px-6 py-40 xs:py-24 altered-before">
        <div className="absolute h-full top-0 left-0 right-0 z-0">
          <div className="sticky top-0 h-screen w-full">
            <Img
              imgStyle={{
                objectFit: "cover",
              }}
              fluid={queryData.roomsBackground.childImageSharp.fluid}
              className="w-full h-screen"
            ></Img>
          </div>
        </div>
        <div className="relative z-10 max-w-screen-xl m-auto flex flex-col items-center">
          {blockListElements}
        </div>
      </section>
      <section
        id={t("pages.home.roomsList.slug")} 
        className="relative bg-paper anchor py-24 px-12 xs:px-6 xs:py-12 altered-before"
      >
        <div className="max-w-screen-xl m-auto">
          <BaseHeading
            text={t("pages.home.roomsList.title")}
            className="xs:text-center font-calligraphy mb-16"
          />
          <div className="m-auto max-w-4xl lg:max-w-7xl flex flex-wrap justify-around items-start">
            {roomsListElements}
          </div>
        </div>
      </section>
      <section  className="bg-paper bg-paper--white py-24 px-8 xs:py-12 altered-before">
        <div className="max-w-screen-xl m-auto">
          <BaseHeading
            text={t("pages.home.infos.title")}
            className="xs:text-center font-calligraphy mb-16"
          />
          <HomePracticalInformations />
        </div>
      </section>
    </div>
  )
}

export default IndexPage
