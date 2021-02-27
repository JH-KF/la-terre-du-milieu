import React, { useState, useContext } from "react"

import BasePrimaryButton from "../Base/PrimaryButton"
import BaseSecondaryButton from "../Base/SecondaryButton"
import Logo from "../Logo"
import MobileNav from "../MobileNav"

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
  const { t } = useTranslation()

  const openModal = () => {
    setIsOpen(true)
    document.querySelector("body").style.overflowY = "hidden"
  }

  return (
    <header className="bg-paper z-40 w-screen fixed top-0 left-0 right-0 min-w-screen shadow">
      <div className="relative">
        <div className="max-w-screen-xl m-auto py-6 xs:px-6 px-12 flex flex-row items-center justify-between">
          <Logo />
          <nav className="xs:hidden flex flex-row items-center">
            <a href={`#${t("pages.home.roomsList.slug")}`}>
              <BaseSecondaryButton
                text={t("header.rooms")}
                className="lg:mx-10 md:mx-6"
              />
            </a>
            <BaseSecondaryButton
              text={t("header.ourRegion")}
              className="lg:mx-10 md:mx-6"
            />
            <BasePrimaryButton
              text={t("utils.book")}
              className="lg:ml-10 md:ml-6"
              onClick={openModal}
            />
          </nav>
          <button
            onClick={handleClickBurgerMenu}
            type="button"
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
