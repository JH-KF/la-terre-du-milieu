import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import BaseHeading from "../components/Base/Heading"
import BaseDescription from "../components/Base/Description"
import BaseActivity from "../components/Base/ActivityCard"

import { useTranslation } from "react-i18next"

import SEO from "../components/seo"

const OurRegion = ({data, pageContext}) => {

  const { t } = useTranslation()
  const lng = pageContext.locale
  const pointsOfInterest = []; 
  data.allSanityPoi.nodes.forEach( poi => {
    pointsOfInterest.push(<BaseActivity 
      key={poi.id} 
      title={poi.title[lng]} 
      description={poi.description[lng]} 
      thumbnailImage={getImage(poi.image.asset)} 
      url={poi.url}
      light={true}
      className="mb-4 mx-auto"
    />)
  });
  const events = []; 
  data.allSanityEvents.nodes.forEach(event => {
    events.push(<BaseActivity 
      key={event.id} 
      title={event.title[lng]} 
      description={event.description[lng]} 
      thumbnailImage={getImage(event.image.asset.fluid)}
      url={event.url}
      className="mb-4 mx-auto"
    />)
  });
  return (
  <>
    <SEO title={t("pages.ourRegion.title")} lang={lng} /> 
    <section className="bg-paper mt-16 md:mt-6">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <BaseHeading
          text={t("pages.ourRegion.activitiesTitle")}
          className="xs:text-center mb-16"
        />
        <div className="min-h-half block md:flex md:flex-wrap md:justify-around md:items-center">
          {pointsOfInterest}
        </div>
      </div>
    </section>
    <section className="relative bg-paper bg-paper--white mt-16 md:mt-6 py-12 md:py-24 altered-before">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <BaseHeading
          text={t("pages.ourRegion.eventsTitle")}
          className="xs:text-center mb-16"
        />
        <div className="min-h-half block md:flex md:flex-wrap md:justify-around md:items-center">
          {events.length ? events : <BaseDescription description={t("pages.ourRegion.noEvents")} />}
        </div>
      </div>
    </section>
  </>
  )
}


export default OurRegion

export const query = graphql`
  query {
    allSanityPoi {
      nodes {
        id
        title {
          fr
          en
        }
        url
        image {
          asset {
            gatsbyImageData(width: 400)
          }
        }
        description {
          fr
          en
        }
      }
    }
    allSanityEvents {
      nodes {
        id
        title {
          fr
          en
        }
        url
        image {
          asset {
            gatsbyImageData(width: 400)
          }
        }
        description {
          fr
          en
        }
      }
    }
  }`