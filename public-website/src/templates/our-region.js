import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import BaseHeading from "../components/Base/Heading"
import BaseDescription from "../components/Base/Description"
import BaseActivity from "../components/Base/ActivityCard"

import { useTranslation } from "react-i18next"

import Seo from "../components/seo"
import BaseTitle from "../components/Base/Title"
import PageThumbnail from "../images/region/page-preview.jpg"

const OurRegion = ({ data, pageContext }) => {
  const { t, i18n } = useTranslation()
  const lng = pageContext.locale
  const pointsOfInterest = []
  data.allSanityPoi.nodes
    .filter(poi => !poi.isArchived)
    .sort((a, b) => a.order - b.order)
    .forEach(poi => {
      pointsOfInterest.push({
        component: (
          <BaseActivity
            key={poi.id}
            title={poi.title[lng]}
            description={poi.description[lng]}
            thumbnailImage={getImage(poi.image.asset)}
            url={poi.url}
            light={true}
            className="mb-8 mx-auto md:mx-0"
          />
        ),
        category: poi.category,
      })
    })
  const events = []
  data.allSanityEvents.nodes
    .filter(event => !event.isArchived)
    .sort((a, b) => a.order - b.order)
    .forEach(event => {
      events.push({
        component: (
          <BaseActivity
            key={event.id}
            title={event.title[lng]}
            description={event.description[lng]}
            thumbnailImage={getImage(event.image.asset)}
            url={event.url}
            className="mb-8 mx-auto md:mx-0"
          />
        ),
        category: event.category,
      })
    })
  const categories = ["walks", "leisure", "history"]
  const getCategory = (cards, category) => {
    return cards.some(card => card.category === category) ? (
      <>
        <BaseTitle
          title={t(`pages.ourRegion.${category}`)}
          className="text-center md:text-left my-16 font-calligraphy"
        />
        <div className="block md:grid md:gap-4 md:col-span-1 md:items-start md:grid-cols-2 lg:grid-cols-3">
          {cards
            .filter(card => card.category === category)
            .map(card => card.component)}
        </div>
      </>
    ) : null
  }

  return (
    <>
      <Seo
        title={data.pageJson[lng].title}
        description={data.pageJson[lng].description}
        lang={lng}
        path={
          i18n.options.fallbackLng[0] === lng
            ? data.pageJson[lng].path
            : `/${lng + data.pageJson[lng].path}`
        }
        image={PageThumbnail}
      />
      <section className="bg-paper mt-16 md:mt-6">
        <div className="max-w-screen-xl px-6 md:px-12 m-auto">
          <BaseHeading
            text={t("pages.ourRegion.activitiesTitle")}
            className={`text-center md:text-left ${
              events.filter(event => !event.category).length ? "mb-16" : ""
            }`}
          />
          <div className="block md:grid md:gap-4 md:col-span-1 md:items-start md:grid-cols-2 lg:grid-cols-3">
            {pointsOfInterest
              .filter(poi => !poi.category)
              .map(poi => poi.component)}
          </div>
          {categories.map(category => getCategory(pointsOfInterest, category))}
        </div>
      </section>
      <section className="relative bg-paper bg-paper--white mt-16 md:mt-6 py-12 md:py-24 altered-before">
        <div className="max-w-screen-xl px-6 md:px-12 m-auto">
          <BaseHeading
            text={t("pages.ourRegion.eventsTitle")}
            className={`text-center md:text-left ${
              events.filter(event => !event.category).length || !events.length
                ? "mb-16"
                : ""
            }`}
          />
          <div className="block md:grid md:gap-4 md:col-span-1 md:items-start md:grid-cols-2 lg:grid-cols-3">
            {events.length
              ? events
                  .filter(event => !event.category)
                  .map(event => event.component)
              : null}
          </div>
          {categories.map(category => getCategory(events, category))}
          {events.length ? null : (
            <BaseDescription
              className="text-center"
              description={t("pages.ourRegion.noEvents")}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default OurRegion

export const query = graphql`
  query {
    pageJson(id: { eq: "our-region" }) {
      fr {
        path
        description
        title
      }
      en {
        path
        description
        title
      }
      de {
        path
        description
        title
      }
    }
    allSanityPoi {
      nodes {
        id
        title {
          fr
          en
          de
        }
        url
        image {
          asset {
            gatsbyImageData(width: 400)
          }
        }
        category
        description {
          fr
          en
          de
        }
        order
        isArchived
      }
    }
    allSanityEvents {
      nodes {
        id
        title {
          fr
          en
          de
        }
        url
        image {
          asset {
            gatsbyImageData(width: 400)
          }
        }
        category
        description {
          fr
          en
          de
        }
        order
        isArchived
      }
    }
  }
`
