import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"

const HomeSlider = ({ className }) => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
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
    <div className={`h-full xs:h-half min-h-96 ${className}`}>
      <div className="h-full relative">
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
          className="h-full"
        ></Img>
        <div className="absolute bottom-0 right-0 mb-6 mr-6">
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
