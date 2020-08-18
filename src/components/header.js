import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <header>
      <div className="inner-header">
        <h4>{siteTitle}</h4>
        <div className="navi">
          <Link to="/">HOME</Link>
          <Link to="/start/">Quick Start</Link>
        </div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
