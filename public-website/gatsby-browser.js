/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

import React from "react"
import Layout from "./src/components/layout.js"

import { PageContextProvider } from "./pageContext"
import i18n from "./src/config/i18next.js"
import { I18nextProvider } from "react-i18next"

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
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
