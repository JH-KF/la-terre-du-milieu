import React, { useContext } from "react"

import { RiCloseLine } from "react-icons/ri"
import { useTranslation } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import BaseDescription from "../Base/Description"
import BaseTitle from "../Base/Title"

import { BookModalContext } from "../../context/bookModalContext"

const BookModal = ({ roomName }) => {
  const { isOpen, setIsOpen, setRoomName } = useContext(BookModalContext)

  const queryData = useStaticQuery(graphql`
    query {
      gitedefranceLogo: file(
        relativePath: { eq: "modal/gite-de-france-logo.png" }
      ) {
        childImageSharp {
          fixed(width: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bookingLogo: file(relativePath: { eq: "modal/booking-logo.png" }) {
        childImageSharp {
          fixed(width: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const { t } = useTranslation()

  const closeModal = () => {
    setIsOpen(false)
    setRoomName("")
    document.querySelector("body").style.overflowY = "scroll"
  }

  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } fixed z-1000 top-0 w-screen h-screen bg-modal-wrapper px-12 xs:px-0`}
    >
      <section className="mx-auto w-full max-w-lg h-full flex justify-center items-center xs:items-stretch">
        <div className=" bg-background shadow w-full rounded xs:rounded-none p-4">
          <div className="flex justify-between items-center">
            <BaseTitle title={t("utils.book")} />
            <button onClick={closeModal}>
              <RiCloseLine className="text-action h-8 w-8" />
            </button>
          </div>
          <hr className="border-t border-solid border-gray mt-2"></hr>
          <div className="overflow-y-auto max-h-96 xs:max-h-full pt-2">
            {/* Contact Monique */}
            <div className="mb-12">
              {/* By phone */}
              <div className="mt-4 mb-6 text-center">
                <BaseDescription
                  description={t("modal.callTo")}
                  className="mb-2"
                />
                <a href={`tel:${process.env.GATSBY_HREF_MONIQUE_MOBILE_PHONE}`}>
                  <BaseTitle
                    title={process.env.GATSBY_DISPLAY_MONIQUE_MOBILE_PHONE}
                    className="text-action"
                  />
                </a>
              </div>
              {/* By e-mail */}
              <div className="text-center">
                <BaseDescription
                  description={t("modal.sendTo")}
                  className="mb-2"
                />
                <a href={`mailto:${process.env.GATSBY_MONIQUE_EMAIL}`}>
                  <BaseTitle
                    title={process.env.GATSBY_MONIQUE_EMAIL}
                    className="text-action"
                  />
                </a>
              </div>
            </div>
            {/* Book Online */}
            <div className="text-center mb-12">
              <BaseDescription
                description={t("modal.fromWebsites")}
                className="mb-4"
              />
              <div className="flex mt-6 xs:block">
                <a href="/" target="blank" className="flex-1 w-32 mr-4">
                  <article className="w-full flex-1 p-4 bg-background-accent shadow rounded-2xl">
                    <BaseDescription
                      description="Gîtes de France"
                      className="mb-6 text-action"
                    />
                    <div className="w-24 h-24 m-auto flex justify-center items-center">
                      <Img
                        fixed={queryData.gitedefranceLogo.childImageSharp.fixed}
                      />
                    </div>
                    {roomName ? (
                      <BaseDescription
                        description={roomName}
                        className="mt-2"
                      />
                    ) : null}
                  </article>
                </a>
                <a href="/" target="blank" className="flex-1 w-32">
                  <article className="w-full p-4 bg-background-accent shadow rounded-2xl">
                    <BaseDescription
                      description="Booking"
                      className="mb-6 text-action"
                    />
                    <div className="w-24 h-24 m-auto flex justify-center items-center">
                      <Img
                        fixed={queryData.bookingLogo.childImageSharp.fixed}
                      />
                    </div>
                    {roomName ? (
                      <BaseDescription
                        description={roomName}
                        className="mt-2"
                      />
                    ) : null}
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default BookModal
