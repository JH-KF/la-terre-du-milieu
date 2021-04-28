import React from "react"
import { Link } from "gatsby"
import { HiOutlineX } from "react-icons/hi"
import { useTranslation } from "react-i18next"

import BaseTertiaryButton from "./Base/TertiaryButton"
import BaseSecondaryButton from "./Base/SecondaryButton"
import LanguageSelector from "./LanguageSelector"
import Logo from "./Logo"

const MobileNav = ({ className, handleClickBurgerMenu, openModal }) => {
  const { t } = useTranslation()

  return (
    <nav
      className={`bg-paper ${className} flex flex-col transition-position duration-150 ease-in-out z-50 fixed top-0 w-screen min-h-screen overflow-y-scroll`}
    >
      <div>
        <div className="flex p-6 justify-between">
          <Logo />
          <button name={t("utils.close")} onClick={handleClickBurgerMenu}>
            <HiOutlineX className="h-6 w-6 text-action" />
          </button>
        </div>
        <hr />
        <section className="relative px-6 pt-12 flex flex-col items-center bg-paper bg-paper--white altered-after altered-before">
          <div className="mb-12">
            <Link to={"/"+t("pages.home.path")}>
              <BaseTertiaryButton 
                onClick={() => handleClickBurgerMenu()} 
                text={t("header.home")} 
              />
            </Link>
          </div>
          <div className="mb-12">
          <Link to={`/${t("pages.home.path")}#${t("pages.home.rooms.slug")}`}>
              <BaseTertiaryButton
                onClick={() => handleClickBurgerMenu()}
                text={t("header.rooms")}
              />
            </Link>
          </div>
          <div className="mb-12">
            <Link to={`/${t("pages.home.path")}${t("pages.ourRegion.path")}`}>
              <BaseTertiaryButton 
                onClick={() => handleClickBurgerMenu()} 
                text={t("header.ourRegion")} 
              />
            </Link>
          </div>
          <div className="mb-12">
            <Link to={`/${t("pages.home.path")}${t("pages.ourOffers.path")}`}>
              <BaseTertiaryButton 
                onClick={() => handleClickBurgerMenu()} 
                text={t("header.ourOffers")} 
              />
            </Link>
          </div>
        </section>
        <hr />
      </div>
      <section className="px-6 py-12 text-center">
        <BaseSecondaryButton
          text={t("utils.book")}
          onClick={() => {
            handleClickBurgerMenu()
            openModal()
          }}
        />
      </section>
      <section className="flex-col justify-items-center items-center">
        <LanguageSelector />
      </section>
    </nav>
  )
}
export default MobileNav
