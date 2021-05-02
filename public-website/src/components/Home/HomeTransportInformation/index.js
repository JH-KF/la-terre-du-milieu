import React from "react"
import { RiTrainLine } from "react-icons/ri"
import { GiAirplaneDeparture } from "react-icons/gi"

import { useTranslation } from "react-i18next"

import BaseDescription from "../../Base/Description"
import BaseParchment from "../../Base/Parchment"

const HomeTransportInformation = () => {
  const { t } = useTranslation()
  return (
    <div className="m-auto max-w-4xl">
      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <RiTrainLine className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={`${t("pages.home.transport.nearbyStations")} ${t("pages.home.transport.station1")}, ${t("pages.home.transport.station2")}, ${t("pages.home.transport.station3")}`}
        />
      </BaseParchment>
      <BaseParchment
        className="flex xs:block px-4 xs:px-2 py-6 items-center mb-16"
        horizontal
      >
        <GiAirplaneDeparture className="text-action flex-shrink-0 h-6 w-6 mr-6 xs:h-10 xs:w-10 xs:mx-auto xs:mb-6" />
        <BaseDescription
          description={`${t("pages.home.transport.nearbyAirports")} ${t("pages.home.transport.airport1")}, ${t("pages.home.transport.airport2")}, ${t("pages.home.transport.airport3")}`}
        />
      </BaseParchment>
    </div>
  )
}

export default HomeTransportInformation
