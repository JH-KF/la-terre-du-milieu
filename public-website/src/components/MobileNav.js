import React from "react"
import { Link } from "gatsby"
import { HiOutlineX } from "react-icons/hi"
import { useTranslation } from "react-i18next"
import BasePrimaryButton from "./Base/PrimaryButton"

const MobileNav = ({ className, handleClickBurgerMenu }) => {
  const { t } = useTranslation()

  return (
    <nav
      className={`bg-background ${className} z-50 fixed top-0 left-0 w-screen h-screen overflow-y-scroll`}
    >
      <HiOutlineX
        className="h-6 w-6 text-action mb-6 cursor-pointer"
        onClick={handleClickBurgerMenu}
      />
      <p>{t("utils.menu").toUpperCase()}</p>
      <hr />
      <Link to="/">
        <div>
          <span>{t("header.home")}</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span>{t("header.rooms")}</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span>{t("header.ourRegion")}</span>
        </div>
      </Link>
      <BasePrimaryButton text={t("utils.book")} className="lg:ml-12 md:ml-8" />
      <hr />
    </nav>
  )
}
export default MobileNav
