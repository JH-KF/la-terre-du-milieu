import React from "react"
import PropTypes from "prop-types"

const BaseParchment = ({ className, light, horizontal, children }) => {
  return (
    <article
      className={`bg-paper parchment ${className} ${
        light ? "parchment--light" : ""
      } ${horizontal ? "parchment--horizontal" : ""} `}
    >
      {children}
    </article>
  )
}

export default BaseParchment

BaseParchment.propTypes = {
  light: PropTypes.bool,
  horizontal: PropTypes.bool,
  className: PropTypes.string,
  // children: PropTypes.element.isRequired,
  // see https://github.com/yannickcr/eslint-plugin-react/issues/7
  // and https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

BaseParchment.defaultProps = {
  light: false,
  horizontal: false,
  className: "",
  children: [],
}
