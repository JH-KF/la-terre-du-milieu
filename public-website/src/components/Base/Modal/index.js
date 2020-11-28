import React, { useContext } from "react"

import { BookModalContext } from "./../../../context/bookModalContext"

const BookModal = ({ roomName }) => {
  const { isOpen, setIsOpen } = useContext(BookModalContext)

  const handleCloseModal = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <div>
        <button onClick={handleCloseModal}>Close</button>
        {roomName ? <h2>{roomName}</h2> : ""}
        <p>Tel : 06.61.32.42.43</p>
        <p>Mail : marmo.bousch@orange.fr</p>
        <a
          href={
            roomName
              ? `lien spécifique de la chambre ${roomName} sur gîte de Fr`
              : "lien global gîte de Fr"
          }
          rel="noreferrer"
          target="_blank"
        >
          Lien Gîtes de France
        </a>
        <a
          href={
            roomName
              ? `lien spécifique de la chambre ${roomName} sur Booking`
              : "lien global Booking"
          }
          rel="noreferrer"
          target="_blank"
        >
          Lien Booking
        </a>
      </div>
    </div>
  )
}

export default BookModal
