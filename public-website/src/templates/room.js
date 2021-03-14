import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BaseHeading from "../components/Base/Heading"
import BaseParchment from "../components/Base/Parchment"
import BaseDescription from "../components/Base/Description"
import BaseRoomCard from "../components/Base/RoomCard"

import SEO from "../components/seo"
import Img from "gatsby-image"

import { useTranslation } from "react-i18next"
const Room = ({pageContext}) => {
  const queryData = useStaticQuery(graphql`
  query {
    separtor: file(relativePath: { eq: "decorations/separator.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed_tracedSVG
          src
        }
      }
    },
    roomThumbnailImages: allFile(
      filter: { relativeDirectory: {eq : "rooms/thumbnails"} }
    ) {
      nodes {  
        name
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    },
  }`)

  const { t } = useTranslation()
  const informations = [];
  pageContext.room.informations.forEach(i => {
    informations.push(<BaseDescription description={i} className="mb-4" />)
  })
  console.log(pageContext.otherRooms)
  const otherRooms = [];
  pageContext.otherRooms.forEach(room => {
    otherRooms.push(
      <BaseRoomCard 
        title={room.title} 
        description={room.description} 
        quote={room.quote}
        quoteAuthor={room.quoteAuthor}
        key={room.id}
        path={`/${room.path}${room.slug}`}
        thumbnailImage={queryData.roomThumbnailImages.nodes
          .filter(img => img.name === room.id)
          .map(img => img.childImageSharp.fluid)}
          className="mb-16"
        light={false}
        imageHasBorder={true}
        elevation={false}
      />)
  })

    
  return (
  <>
    <SEO title={pageContext.room.title} />
    <div className="mt-6">
      <section className="px-6 md:px-12 mb-24 bg-paper">
        <div className="max-w-screen-xl m-auto">
          <BaseHeading text={pageContext.room.title} className="mb-16" />
          <div>
            <div className="bg-white h-96 mb-8"/>
            <div className="block md:grid gap-x-6 md:grid-rows-1 md:grid-cols-2 lg:grid-cols-3" >
              <div className="bg-white h-40 w-full md:col-start-3 md:col-end-4">
              </div>
              <BaseParchment light={true} elevation={true} className="px-2 md:p-6 block md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-1">
                  {informations}
                  <div className="my-16">
                    <Img 
                      fixed={queryData.separtor.childImageSharp.fixed}
                      objectFit="contain"
                      className="m-auto"
                      style={{display: "block"}}
                    ></Img>
                  </div>
                  <BaseDescription className="mb-16" description={pageContext.room.description} />
                  <BaseDescription className="mb-2 italic" description={pageContext.room.quote} />
                  <BaseDescription className="font-calligraphy" description={pageContext.room.quoteAuthor} />
              </BaseParchment>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-12 py-24 bg-paper bg-paper--white altered-before">
        <div className="max-w-screen-xl m-auto">
          <BaseHeading text={t("pages.room.other-rooms")} className="mb-16" />
          <div className="block md:flex md:items-start md:justify-between">
            {otherRooms}
          </div>
        </div>
      </section>
    </div>
  </>
  )
}

export default Room
