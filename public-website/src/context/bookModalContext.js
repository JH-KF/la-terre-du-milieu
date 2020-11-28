import React, { useState } from "react"

export const BookModalContext = React.createContext({})

export const BookModalContextProvider = ({ children }) => {
  const [roomName, setRoomName] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BookModalContext.Provider
      value={{ roomName, setRoomName, isOpen, setIsOpen }}
    >
      {children}
    </BookModalContext.Provider>
  )
}
