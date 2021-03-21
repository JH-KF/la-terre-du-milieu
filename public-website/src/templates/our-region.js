import React from "react"
import { graphql } from "gatsby"

import BaseHeading from "../components/Base/Heading"

import { useTranslation } from "react-i18next"

import SEO from "../components/seo"

const OurRegion = ({data}) => {

  const { t } = useTranslation()
  const activities = []; 
  console.log(data.allSanityActivities)
  data.allSanityActivities.nodes.forEach(activity => {
    activities.push(activity.title)
  });
  return (
  <>
    <SEO title={t("pages.ourRegion.title")} />
    <div className="mt-16 md:mt-6">
    <BaseHeading
      text={t("pages.ourRegion.title")}
      className="xs:text-center mb-16"
    />
    {activities}

    </div>
  </>
  )
}


export default OurRegion

export const query = graphql`
  query {
    allSanityActivities {
      nodes {
        id
        titre
        url
        image {
          _key
          _type
          _rawAsset
          _rawHotspot
          _rawCrop
        }
        description
      }
    }
  }`