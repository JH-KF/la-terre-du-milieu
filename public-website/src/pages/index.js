import React from "react"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import BaseHeading from "../components/Base/Heading"
import BaseDescriptionBlock from "../components/Base/DescriptionBlock"
import HomeSlider from "../components/HomeSlider"
import BaseRoomCard from "../components/Base/RoomCard"
import HomePracticalInformations from "../components/Home/HomePracticalInformations"

import { useTranslation } from "react-i18next"

const informationBlocks = ["monique-martial", "pool", "location"];

const IndexPage = ({ pageContext }) => {
  const { t } = useTranslation()

  const queryData = useStaticQuery(graphql`
    query {
      blockImages: allFile(
        filter: { relativeDirectory: { eq: "home/blocks" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      },
      roomThumbnailImages: allFile(
        filter: { relativeDirectory: {eq : "rooms/thumbnails"} }
      ) {
        nodes {  
          name
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      },
      allRoomsJson {
        nodes {
          id
          fr {
            description
            path
            quote
            quoteAuthor
            slug
            title
          }
          en {
            description
            quote
            path
            quoteAuthor
            slug
            title
          }
        }
      }
    }
  `)
    
  let blockListElements = []
  informationBlocks.forEach((blockName, index) =>
    blockListElements.push(
      <BaseDescriptionBlock
        title={t(`pages.home.blocks.${blockName}.title`)}
        description={t(`pages.home.blocks.${blockName}.description`)}
        key={blockName}
        image={queryData.blockImages.nodes
          .filter(img => img.name === blockName)
          .map(img => getImage(img))[0]}
        position={index + 1}
        className={`mx-24 xs:mx-0 ${
          index + 1 < informationBlocks.length
            ? "mb-64 md:mb-48 xs:mb-48"
            : ""
        }`}
      />
    )
  )
  let roomsListElements = []
  queryData.allRoomsJson.nodes.forEach(room => {
    const path = `/${room[pageContext.locale].path+room[pageContext.locale].slug}`;
    roomsListElements.push(
      <BaseRoomCard
        elevation={true}
        title={room[pageContext.locale].title}
        description={room[pageContext.locale].description}
        quote={room[pageContext.locale].quote}
        quoteAuthor={room[pageContext.locale].quoteAuthor}
        key={room.id}
        path={path}
        thumbnailImage={queryData.roomThumbnailImages.nodes
          .filter(img => img.name === room.id)
          .map(img => getImage(img))[0]}
        className={"mb-24"}
      />
    )
    }
  )

  return (
    <div>
      <SEO
        title={t("pages.home.title")}
        description={t("siteMetadata.description")}
        lang={pageContext.locale}
      />
      <section className="bg-paper xs:py-16 calligraph-background calligraph-background-before">
        <div className="max-w-screen-xl px-6 md:px-12 m-auto display grid gap-x-24 xs:block grid-cols-5">
          <div className="flex items-center xs:max-w-sm xs:m-auto col-span-2 xs:mb-16">
            <div style={{width: "100%"}}>
              <StaticImage
                src="../images/home/landing/logo.png"
                placeholder="tracedSVG"
                alt="Chambres d'hôte | La terre du milieu"
              ></StaticImage>
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
            <StaticImage
              imgStyle={{
                objectFit: "cover",
              }}
              alt="tolkien map"
              src="../images/home/rooms-background.png"
              className="w-full h-screen"
            ></StaticImage>
          </div>
        </div>
        <div className="relative z-10 max-w-screen-xl m-auto flex flex-col items-center">
          {blockListElements}
        </div>
      </section>
      <section
        id={t("pages.home.roomsList.slug")} 
        className="relative bg-paper anchor py-24 m-auto xs:py-12 altered-before"
      >
        <div className="max-w-screen-xl m-auto px-6 md:px-12">
          <BaseHeading
            text={t("pages.home.roomsList.title")}
            className="xs:text-center mb-16"
          />
          <div className="m-auto max-w-4xl lg:max-w-7xl flex flex-wrap justify-center lg:justify-between items-start">
            {roomsListElements}
          </div>
        </div>
      </section>
      <section className="bg-paper bg-paper--white py-24 px-8 xs:py-12 altered-before">
        <div className="max-w-screen-xl m-auto px-6 md:px-12">
          <BaseHeading
            text={t("pages.home.infos.title")}
            className="xs:text-center mb-16"
          />
          <HomePracticalInformations />
        </div>
      </section>
    </div>
  )
}

export default IndexPage
