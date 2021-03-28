import React, { useContext } from "react"

import { RiCloseLine } from "react-icons/ri"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"

import BaseDescription from "../Base/Description"
import BaseTitle from "../Base/Title"
import BaseParchment from "../Base/Parchment"

import { BookModalContext } from "../../context/bookModalContext"

const BookModal = ({ roomName }) => {
  const { isOpen, setIsOpen, setRoomName } = useContext(BookModalContext)

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
        <BaseParchment light className="p-4 w-full">
          <div className="flex justify-between items-center">
            <BaseTitle title={t("utils.book")} className="font-calligraphy" />
            <button onClick={closeModal}>
              <RiCloseLine className="text-action h-8 w-8" />
            </button>
          </div>
          <hr className="border-t border-solid border-gray mt-2"></hr>
          <div className="overflow-y-auto max-h-full md:max-h-96 pt-2">
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
                  <BaseParchment className="w-full flex-1 p-4">
                      <BaseDescription
                        description="Gîtes de France"
                        className="mb-6 text-action font-calligraphy"
                      />
                      <div className="w-24 h-24 m-auto flex justify-center items-center">
                        <StaticImage
                          src="../../images/modal/gite-de-france-logo.png"
                          alt="gite de france"
                          layout="constrained"
                          width={96}
                        />
                      </div>
                      {roomName ? (
                        <BaseDescription
                          description={roomName}
                          className="mt-2"
                        />
                      ) : null}
                  </BaseParchment>
                </a>
                <a href="/" target="blank" className="flex-1 w-32">
                  <BaseParchment className="w-full  p-4">
                    <BaseDescription
                      description="Booking"
                      className="mb-6 text-action font-calligraphy"
                    />
                    <div className="w-24 h-24 m-auto flex justify-center items-center">
                      <StaticImage
                        src="../../images/modal/booking-logo.png"
                        alt="Booking"
                        layout="constrained"
                        width={96}
                      />
                    </div>
                    {roomName ? (
                      <BaseDescription
                        description={roomName}
                        className="mt-2"
                      />
                    ) : null}
                    </BaseParchment>
                </a>
              </div>
            </div>
          </div>
        </BaseParchment>
      </section>
    </div>
  )
}
export default BookModal
