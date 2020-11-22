import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import BaseSecondaryButton from "../components/Base/SecondaryButton/index"
import BaseDescriptionBlock from "../components/Base/DescriptionBlock/index"

import translations from "../config/translations.json"
import { useTranslation } from "react-i18next"
import SlideShow from "../components/SlideShow"

const IndexPage = ({ pageContext }) => {
  const { t } = useTranslation()
  const blocks = translations.fr.translation.pages.home.blocks
  let blockListElements = []
  Object.keys(blocks).forEach((element, index) =>
    blockListElements.push(
      <BaseDescriptionBlock
        title={t(blocks[element].title)}
        description={t(blocks[element].description)}
        key={element}
        position={index + 1}
        className="m-auto my-28"
      />
    )
  )
  return (
    <>
      <SEO
        title={t("pages.home.title")}
        description={t("siteMetadata.description")}
        lang={pageContext.locale}
      />
      <div className="display grid grid-cols-2 px-12 xs:px-6">
        <div className="flex justify-items-center items-center">
          <div>
            <div className="mb-12">
              <span className="text-primary text-5xl font-sans leading-4">
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
        <div className="h-full">
          <Image />
        </div>
      </div>
      <div className="display px-12 xs:px-6">
        <SlideShow />
      </div>
      <div className="bg-white px-12 xs:px-6 py-14">{blockListElements}</div>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
  )
}

export default IndexPage
