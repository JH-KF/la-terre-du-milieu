import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"

import previewImage from "../images/home/page-preview.jpg"

function SEO({ description, lang, meta, title, image, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author,
            website,
            websiteName
          }
        }
      }
    `
  )

  const { t } = useTranslation()

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = t("siteMetadata.title")
  const websiteUrl = `https://${process.env.GATSBY_WEBSITE_DOMAIN}.${site.siteMetadata.website}.com`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${websiteUrl}${image || previewImage}`,
        },
        {
          property: `og:url`,
          content: `${ path ? websiteUrl+path : websiteUrl}`,
        },
        {
          property: `og:local`,
          content: lang,
        }, 
        {
          property: `og:site_name`,
          content: site.siteMetadata.websiteName,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``, 
  path: ""
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  path: PropTypes.string
}

export default SEO
