import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import BasePrimaryButton from "../Base/PrimaryButton"
import BaseTertiaryButton from "../Base/TertiaryButton"
import Logo from "../Logo"
import MobileNav from "../MobileNav"
import LanguageSelector from "../LanguageSelector"

import { HiOutlineMenu } from "react-icons/hi"

import { useTranslation } from "react-i18next"
import { BookModalContext } from "../../context/bookModalContext"

const Header = () => {
  const { setIsOpen } = useContext(BookModalContext)

  const [isClicked, setIsClicked] = useState(false)

  const handleClickBurgerMenu = () => {
    setIsClicked(prevState => !prevState)
    document.querySelector("body").style.overflowY = isClicked
      ? "scroll"
      : "hidden"
  }
  const { t, i18n } = useTranslation()

  const openModal = () => {
    setIsOpen(true)
    document.querySelector("body").style.overflowY = "hidden"
  }
  return (
    <header className="z-40 w-screen fixed top-0 left-0 right-0 min-w-screen">
      <div className="relative global-header">
        <div className="max-w-screen-xl m-auto py-6 xs:px-6 px-12 flex flex-row items-center justify-between">
          <Logo />
          <nav className="xs:hidden flex flex-row items-center">
            <Link to={`/${t("pages.home.path")}#${t("pages.home.rooms.slug")}`}>
              <BaseTertiaryButton
                text={t("header.rooms")}
                className="lg:mx-10 md:mx-6"
              />
            </Link>
            <Link to={`/${i18n.options.fallbackLng[0] === i18n.language ? "" : i18n.language+"/"}${t("pages.ourRegion.path")}`}>
              <BaseTertiaryButton
                text={t("header.ourRegion")}
                className="lg:mx-10 md:mx-6"
              />
            </Link>
            <Link to={`/${i18n.options.fallbackLng[0] === i18n.language ? "" : i18n.language+"/"}${t("pages.ourOffers.path")}`}>
              <BaseTertiaryButton
                text={t("header.ourOffers")}
                className="lg:mx-10 md:mx-6"
              />
            </Link>
            <BasePrimaryButton
              text={t("utils.book")}
              className="lg:ml-10 md:ml-6"
              onClick={openModal}
            />
            
            <LanguageSelector />
          </nav>
          <button
            onClick={handleClickBurgerMenu}
            type="button"
            name={t("utils.menu")}
            className="xs:block hidden"
          >
            <HiOutlineMenu className="h-6 w-6 text-action" />
          </button>
        </div>
        <MobileNav
          className={isClicked ? "left-0" : "left-full"}
          handleClickBurgerMenu={handleClickBurgerMenu}
          openModal={openModal}
        />
      </div>
    </header>
  )
}

export default Header
