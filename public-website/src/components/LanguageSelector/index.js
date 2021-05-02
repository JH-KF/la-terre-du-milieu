import React from "react"
import { Link } from "gatsby"

const LanguageSelector = ({className}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="md:absolute">
        <Link to="/" className="inline mx-2 md:mx-0 md:block">
          <span role="img" aria-label="French Flag">🇫🇷</span>
        </Link>
        <Link to="/en/" className="inline mx-2 md:mx-0 md:block">
          <span role="img" aria-label="England Flag">🇬🇧</span>
        </Link>
        <Link to="/de/" className="inline mx-2 md:mx-0 md:block">
          <span role="img" aria-label="Germany Flag">🇩🇪</span>
        </Link>
      </div>
    </div>
  )
}

export default LanguageSelector