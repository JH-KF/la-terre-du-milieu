import React, { useState, useContext } from "react"
import Calendar from 'react-calendar';
import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"
import { graphql } from "gatsby"

import BaseHeading from "../components/Base/Heading"
import BaseParchment from "../components/Base/Parchment"
import BaseDescription from "../components/Base/Description"
import BaseGallery from "../components/Base/BaseGallery"
import BaseRoomCard from "../components/Base/RoomCard"
import BaseSecondaryButton from "../components/Base/SecondaryButton"

import { BookModalContext } from "../context/bookModalContext"

import SEO from "../components/seo"
import Img from "gatsby-image"

import { useTranslation } from "react-i18next"
const Room = ({pageContext, data}) => {

  const { setIsOpen, setRoomName } = useContext(BookModalContext)

  const displayModalBookRoom = () => {
    setRoomName(pageContext.room.title)
    setIsOpen(true)
    document.querySelector("body").style.overflowY = "hidden"
  }

  const dayNextYear = new Date(Date.now() + 31556952000);
  const [date, onChange] = useState(new Date());
  const { t } = useTranslation()
  const informations = [];
  pageContext.room.informations.forEach(i => {
    informations.push(<BaseDescription description={i} className="mb-4" />)
  })
  const otherRooms = [];
  pageContext.otherRooms.forEach((room,index) => {
    otherRooms.push(
      <BaseRoomCard 
        title={room.title} 
        description={room.description} 
        quote={room.quote}
        quoteAuthor={room.quoteAuthor}
        key={room.id}
        path={`/${room.path}${room.slug}`}
        thumbnailImage={data.roomThumbnailImages.nodes
          .filter(img => img.name === room.id)
          .map(img => img.childImageSharp.fluid)}
          className="mb-16 flex-shrink-0 w-full"
        light={false}
        imageHasBorder={true}
        elevation={false}
      />)
  })

    
  return (
  <>
    <SEO title={pageContext.room.title} />
    <div className="mt-16 md:mt-6">
      <section className="mb-24 bg-paper">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <BaseHeading text={pageContext.room.title} className="mb-8" />
          <div>
            <BaseGallery images={data.roomImages.nodes} className="mb-8" />
            <div className="block md:grid gap-x-6 md:grid-rows-1 md:grid-cols-3" >
              <div className="w-full md:col-start-3 md:col-end-4 pb-6 md:pb-0">
              <BaseParchment light={true}  className="p-4">
                <Calendar
                  onChange={onChange}
                  value={date}
                  locale="fr-FR"
                  minDate={new Date()}
                  maxDate={dayNextYear}
                  showNeighboringMonth={false}
                  prevLabel={<BsChevronLeft className="h-6 w-6" />}
                  prev2Label={null}
                  nextLabel={<BsChevronRight className="h-6 w-6" />}
                  next2Label={null}
                  maxDetail="month"
                  className="text-primary text-center mb-4"
                />
                <div className="flex justify-end">
                 <BaseSecondaryButton text={t("utils.book")} onClick={displayModalBookRoom} />
                </div>

                </BaseParchment>
              </div>
              <BaseParchment light={true} className="p-4 md:p-6 block md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-1">
                  {informations}
                  <div className="my-16">
                    <Img 
                      fluid={data.separtor.childImageSharp.fluid}
                      objectFit="contain"
                      className="m-auto w-full max-w-xs"
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
      <section className="py-24 bg-paper bg-paper--white altered-before">
        <div className="max-w-screen-xl m-auto px-6 md:px-12">
          <BaseHeading text={t("pages.room.other-rooms")} className="mb-16" />
          <div className="flex flex-wrap items-start justify-center md:justify-between">
            {otherRooms}
          </div>
        </div>
      </section>
    </div>
  </>
  )
}
export const query = graphql`
  query ($imagesPath: String!) {
    roomImages: allFile(
      filter: { relativeDirectory: {eq : $imagesPath} }
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
    separtor: file(relativePath: { eq: "decorations/separator.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
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
    }
  }
`

export default Room