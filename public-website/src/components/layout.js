/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import InformationBar from "./InformationBar"
import BookModal from "./BookModal"
import MaskDefinitions from "./MaskDefinitions"

import { BookModalContext } from "../context/bookModalContext"

const Layout = ({ children }) => {
  const { roomName } = useContext(BookModalContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MaskDefinitions />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <InformationBar informations="Salut les amis ! Toutes nos chambres sont réservées jusqu'au 15 décembre" />
        <main>{children}</main>
      </div>
      <Footer />
      <BookModal roomName={roomName} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
