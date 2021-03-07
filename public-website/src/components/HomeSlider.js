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
  const images = allFile.edges
  //Minus 1 for array offset from 0
  const length = images.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = images[index]

  return (
    <div className="relative w-full transform rotate-2">
      <CustomImage
        image={node.childImageSharp.fluid.src}
        key={node.id}
        alt={node.name}
        typeFrame="landscape"
        className="z-0"
        hasBorder={true}
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
  )
}

export default HomeSlider
