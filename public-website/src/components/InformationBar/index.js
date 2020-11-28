import React, { useState } from "react"

import { RiCloseLine } from "react-icons/ri"
import BaseDescription from "../Base/Description"

const InformationBar = ({ informations }) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <section
      className={` ${
        isClicked ? "hidden" : "block"
      } z-30 bg-background-accent py-2 px-12 xs:px-6 border-t border-solid border shadow`}
    >
      <div className="relative pr-6 flex justify-center items-center">
        <BaseDescription description={informations} />
        <button onClick={() => setIsClicked(true)} className="absolute right-0">
          <RiCloseLine className="text-action h-6 w-6" />
        </button>
      </div>
    </section>
  )
}

export default InformationBar
