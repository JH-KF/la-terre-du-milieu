import React from "react"
import { Link } from "gatsby"
import { HiOutlineX } from "react-icons/hi"
import { useTranslation } from "react-i18next"

import BasePrimaryButton from "./Base/PrimaryButton"
import BaseSecondaryButton from "./Base/SecondaryButton"
import Logo from "./Logo"

const MobileNav = ({ className, handleClickBurgerMenu, openModal }) => {
  const { t } = useTranslation()

  return (
    <nav
      className={`bg-paper ${className} flex flex-col justify-between transition-position duration-150 ease-in-out z-50 fixed top-0 w-screen h-screen overflow-y-scroll`}
    >
      <div>
        <div className="flex p-6 justify-between">
          <Logo />
          <button onClick={handleClickBurgerMenu}>
            <HiOutlineX className="h-6 w-6 text-action" />
          </button>
        </div>
        <hr />
        <section className="px-6 pt-12 flex flex-col items-center">
          <div className="mb-12">
            <Link to="/">
              <BaseSecondaryButton text={t("header.home")} />
            </Link>
          </div>
          <div className="mb-12">
            <a href={`#${t("pages.home.roomsList.slug")}`}>
              <BaseSecondaryButton
                onClick={() => handleClickBurgerMenu()}
                text={t("header.rooms")}
              />
            </a>
          </div>
          <div className="mb-12">
            <Link to="/">
              <BaseSecondaryButton text={t("header.ourRegion")} />
            </Link>
          </div>
        </section>
        <hr />
      </div>
      <section className="px-6 py-12 text-center">
        <BasePrimaryButton
          text={t("utils.book")}
          onClick={() => {
            handleClickBurgerMenu()
            openModal()
          }}
        />
      </section>
    </nav>
  )
}
export default MobileNav
