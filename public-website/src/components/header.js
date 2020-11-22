import React from "react"

import BasePrimaryButton from "../components/Base/PrimaryButton/index"
import BaseTertiaryButton from "../components/Base/TertiaryButton/index"
import Logo from "../components/Logo/index"

import { HiOutlineMenu } from "react-icons/hi"

import { useTranslation } from "react-i18next"

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="z-50 fixed top-0 left-0 right-0 xs:px-6 px-12 bg-background">
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
          <HiOutlineMenu className="h-6 w-6 text-action" />
        </button>
      </div>
    </header>
  )
}

export default Header
