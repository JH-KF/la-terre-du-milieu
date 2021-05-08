import React from "react"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/seo"
import BaseHeading from "../components/Base/Heading"
import BaseDescriptionBlock from "../components/Base/DescriptionBlock"
import PictureSlider from "../components/PictureSlider"
import BaseRoomCard from "../components/Base/RoomCard"
import HomePracticalInformation from "../components/Home/HomePracticalInformation"
import HomeTransportInformation from "../components/Home/HomeTransportInformation"

import { useTranslation } from "react-i18next"

const IndexPage = ({ pageContext }) => {
  const { t, i18n } = useTranslation()

  const queryData = useStaticQuery(graphql`
    query {
      pagesJson {
        home {
          de {
            title
            description
          }
          en {
            title
            description
          }
          fr {
            title
            description
          }
        }
      },
      sliderPictures: allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "home/slider" } }
      ) {
        nodes { 
          id
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      },
      blockImages: allFile(
        filter: { relativeDirectory: { eq: "home/blocks" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData (
              width: 400
              quality: 100
            )
          }
        }
      },
      roomThumbnailImages: allFile(
        filter: { relativeDirectory: {eq : "rooms/thumbnails"} }
      ) {
        nodes {  
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      },
      allRoomsJson {
        nodes {
          id
          isAvailable
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
          de {
            description
            quote
            path
            quoteAuthor
            slug
            title
          }
        }
      },
      allPresentationJson {
        nodes {
          en {
            description
            title
          }
          fr {
            description
            title
          }
          de {
            description
            title
          }
          id
          link {
            name {
              en
              fr
              de
            }
            to
          }
        }
      }
    }
  `)
    
  let blockListElements = [];
  queryData.allPresentationJson.nodes.forEach((block, index) =>
    blockListElements.push(
      <BaseDescriptionBlock
        title={block[i18n.language].title}
        description={block[i18n.language].description}
        key={block.id}
        image={queryData.blockImages.nodes
          .filter(img => img.name === block.id)
          .map(img => getImage(img))[0]}
        link={block.link}
        position={index + 1}
        className={`mx-24 xs:mx-0 ${
          index + 1 < queryData.allPresentationJson.nodes.length
            ? "mb-64 md:mb-48 xs:mb-48"
            : ""
        }`}
      />
    )
  )
  let roomsListElements = []
  queryData.allRoomsJson.nodes.forEach(room => {
    const path = `${i18n.options.fallbackLng[0] === i18n.language ? "" : "/"+i18n.language}/${room[pageContext.locale].path+room[pageContext.locale].slug}`;
    roomsListElements.push(
      <BaseRoomCard
        elevation={true}
        title={room[pageContext.locale].title}
        description={room[pageContext.locale].description}
        quote={room[pageContext.locale].quote}
        quoteAuthor={room[pageContext.locale].quoteAuthor}
        key={room.id}
        path={path}
        isAvailable={room.isAvailable}
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
      <Seo
        title={queryData.pagesJson.home[pageContext.locale].title}
        description={queryData.pagesJson.home[pageContext.locale].description}
        lang={pageContext.locale}
      /> 
      <section className="bg-paper xs:py-16 calligraph-background calligraph-background-before">
        <div className="max-w-screen-xl px-6 md:px-12 m-auto display grid gap-x-24 xs:block grid-cols-5">
          <div className="flex items-center xs:max-w-sm xs:m-auto col-span-2 xs:mb-16">
            <div style={{width: "100%"}}>
              <div className="text-lg text-center text-primary font-calligraphy mb-4">
                  Parlez Ami et entrez
              </div>

              <StaticImage
                src="../images/home/landing/logo.png"
                placeholder="tracedSVG"
                width={450}
                alt="Chambres d'hôte | La terre du milieu"
              ></StaticImage>
            </div>
          </div>
          <div className="flex items-center col-span-3">
            <PictureSlider images={queryData.sliderPictures.nodes} />
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
        id={t("pages.home.rooms.slug")} 
        className="relative bg-paper anchor py-24 m-auto xs:py-12 altered-before"
      >
        <div className="max-w-screen-xl m-auto px-6 md:px-12">
          <BaseHeading
            text={t("pages.home.rooms.title")}
            className="xs:text-center mb-16"
          />
          <div className="m-auto max-w-4xl lg:max-w-7xl flex flex-wrap justify-center lg:justify-between items-start">
            {roomsListElements}
          </div>
        </div>
      </section>
      <section className="bg-paper bg-paper--white py-24 px-8 xs:py-12 altered-before">
        <div className="max-w-screen-xl m-auto px-6 md:px-12">
          <div className="mb-24">
            <BaseHeading
              text={t("pages.home.infos.title")}
              className="xs:text-center mb-16"
            />
            <HomePracticalInformation />
          </div>
          <div>
            <BaseHeading
              text={t("pages.home.transport.title")}
              className="xs:text-center mb-16"
            />
            <HomeTransportInformation />
          </div>

        </div>
      </section>
    </div>
  )
}

export default IndexPage
