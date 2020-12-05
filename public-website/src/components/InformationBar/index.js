import React, { useState } from "react"

import { RiCloseLine } from "react-icons/ri"
import BaseDescription from "../Base/Description"

const InformationBar = ({ informations }) => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <nav
      className={`${
        isClicked ? "hidden" : "block"
      } z-30 py-2 px-12 xs:px-6 information-bar relative`}
    >
      <div className="max-w-screen-xl m-auto relative pr-6 flex justify-center items-center">
        <BaseDescription description={informations} />
        <button onClick={() => setIsClicked(true)} className="absolute right-0">
          <RiCloseLine className="text-action h-6 w-6" />
        </button>
      </div>
    </nav>
  )
}

export default InformationBar
