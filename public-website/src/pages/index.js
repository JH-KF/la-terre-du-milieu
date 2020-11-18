import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import BaseSecondaryButton from "../components/Base/SecondaryButton/index"
import { useTranslation } from "react-i18next"

const IndexPage = ({ pageContext }) => {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t("pages.home.title")}
        description={t("siteMetadata.description")}
        lang={pageContext.locale}
      />
      <div className="m-12 my-12">
        <div className="grid grid-cols-2">
          <div className="flex justify-items-center items-center">
            <div>
              <div className="mb-12">
                <span class="text-primary text-5xl font-sans leading-4">
                  {t("pages.home.incentive")}
                </span>
                &nbsp; &nbsp;
                <span className="text-action text-5xl font-serif font-bold">
                  Tolkien
                </span>
              </div>
              <BaseSecondaryButton text={t("utils.discover")} />
            </div>
          </div>
          <div>
            <Image />
          </div>
        </div>
      </div>

      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
  )
}

export default IndexPage
