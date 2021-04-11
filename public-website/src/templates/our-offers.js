import React from "react"
import BaseHeading from "../components/Base/Heading"
import { graphql } from "gatsby"

import { getImage } from "gatsby-plugin-image"
import BaseDescriptionBlock from "../components/Base/DescriptionBlock"

import { useTranslation } from "react-i18next"

import SEO from "../components/seo"
import BaseDescription from "../components/Base/Description"

const OurOffers = ({pageContext, data}) => {

  console.log(data)
  const { t } = useTranslation()
  const lng = pageContext.locale

  let offers = [];
  data.allOurOffersJson.nodes.forEach((offer, index) =>
    offers.push(

        <BaseDescriptionBlock
          title={offer[lng].title}
          description={offer[lng].description}
          key={offer.id}
          image={data.offerImages.nodes
            .filter(img => img.name === offer.id)
            .map(img => getImage(img))[0]}
          position={index + 1}
          className={`mt-24 mb-24 mx-24 xs:mx-0 ${
            index + 1 < data.allOurOffersJson.nodes.length
              ? "mb-64 md:mb-48 xs:mb-48"
              : ""
          }`}
          light={true}
        >

        </BaseDescriptionBlock>

    )
  )

  return (
  <>
    <SEO title={t("pages.ourOffers.title")} lang={lng} /> 
    <section className="bg-paper mt-16 md:mt-6">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <BaseHeading
          text={t("pages.ourOffers.title")}
          className="xs:text-center mb-16"
        />
          {offers}
      </div>
    </section>
    <section className="relative bg-paper bg-paper--white mt-16 md:mt-6 py-12 md:py-24 altered-before">
      <div className="max-w-screen-xl px-6 md:px-12 m-auto">
        <BaseHeading
          text={"Contact"}
          className="xs:text-center mb-16"
        />
        <div className="block md:flex md:flex-wrap md:justify-around md:items-center">
        <BaseDescription description={"Vous pouvez m'appeler au :"} />
        <BaseDescription description={"06 61 32 42 43"} />
        <br></br>
        <BaseDescription description={"Ou alors m'envoyer directement un email à l'adresse :"} />
        <BaseDescription description={"moni@laterredumilieu.com"} />
        </div>
      </div>
    </section>
  </>
  )
}


export default OurOffers

export const query = graphql`
  query {
    allOurOffersJson {
      nodes {
        id
        fr {
          description
          title
        }
        en {
          description
          title
        }
        de {
          description
          title
        }
        deals {
          fr {
            subtitle
            title
          }
          en {
            subtitle
            title
          }
          de {
            subtitle
            title
          }
        }
      }
    },
    offerImages: allFile(
        filter: { relativeDirectory: { eq: "offers" } }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      },
  }
`