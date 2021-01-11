import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"

import CustomImage from "./CustomImage"

const HomeSlider = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "home/slider" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  src
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]

  return (
    <div className={"h-full xs:h-half min-h-96"}>
      <div className="relative">
        <CustomImage
          image={node.childImageSharp.fluid.src}
          key={node.id}
          alt={node.name}
          typeFrame="landscape"
          className="z-0"
          hasBorder={false}
        />
        <div className="absolute bottom-0 right-0 mb-6 mr-6 z-10">
          <button onClick={() => handlePrevious()} className="mr-3">
            <BsChevronLeft className="h-10 w-10 text-white" />
          </button>
          <button onClick={() => handleNext()}>
            <BsChevronRight className="h-10 w-10 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeSlider
