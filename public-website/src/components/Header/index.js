import React, { useState } from "react"

import BasePrimaryButton from "../Base/PrimaryButton/index"
import BaseTertiaryButton from "../Base/TertiaryButton/index"
import Logo from "../Logo/index"
import MobileNav from "../MobileNav"

import { HiOutlineMenu } from "react-icons/hi"

import { useTranslation } from "react-i18next"

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClickBurgerMenu = () => {
    setIsClicked(prevState => !prevState)
    document.querySelector("body").style.overflowY = isClicked
      ? "scroll"
      : "hidden"
  }
  const { t } = useTranslation()

  return (
    <header className="z-40 fixed top-0 left-0 right-0 xs:px-6 px-12 bg-background min-w-screen shadow">
      <div className="py-6 flex flex-row items-center justify-between">
        <Logo />
        <section className="xs:hidden md:flex flex-row items-center">
          <BaseTertiaryButton
            text={t("header.rooms")}
            className="lg:mx-12 md:mx-8"
          />
          <BaseTertiaryButton
            text={t("header.ourRegion")}
            className="lg:mx-12 md:mx-8"
          />
          <BasePrimaryButton
            text={t("utils.book")}
            className="lg:ml-12 md:ml-8"
          />
        </section>
        <button type="button" className="xs:block hidden">
          <HiOutlineMenu
            className="h-6 w-6 text-action"
            onClick={handleClickBurgerMenu}
          />
        </button>
      </div>
      <MobileNav
        className={isClicked ? "left-0" : "left-full"}
        handleClickBurgerMenu={handleClickBurgerMenu}
      />
    </header>
  )
}

export default Header
