import React from "react"
import { Link } from "gatsby"

const LanguageSelector = () => {
  return (
    <div className="lg:ml-10 md:ml-6 relative flex justify-items-center items-center">
      <div className="relative md:absolute sm:m-auto">
        <Link to="/" className="mx-2 md:mx-0">
          <span role="img" aria-label="French Flag">🇫🇷</span>
        </Link>
        <Link to="/en/" className="mx-2 md:mx-0">
          <span role="img" aria-label="England Flag">🇬🇧</span>
        </Link>
        <Link to="/de/" className="mx-2 md:mx-0">
          <span role="img" aria-label="Germany Flag">🇩🇪</span>
        </Link>
      </div>
    </div>
  )
}

export default LanguageSelector

// className="sm:mr-10 md:mr-6"