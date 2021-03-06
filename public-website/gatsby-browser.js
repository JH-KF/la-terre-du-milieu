/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/css/index.css"

import React from "react"
import Layout from "./src/components/layout.js"

import i18n from "./src/config/i18next.js"
import { I18nextProvider } from "react-i18next"
import { PageContextProvider } from "./src/context/pageContext"
import { BookModalContextProvider } from "./src/context/bookModalContext"

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapRootElement = ({ element }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <BookModalContextProvider>{element}</BookModalContextProvider>
    </I18nextProvider>
  )
}

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContextProvider pageContext={props.pageContext}>
      <Layout {...props}>{element}</Layout>
    </PageContextProvider>
  )
}
