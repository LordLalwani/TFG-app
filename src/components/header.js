import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as logo from "../images/fearless-logo.svg"
import HamburgerMenu from "../components/hamburgerMenu"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header-main">
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="" className="header-img" />
      </Link>
    </div>
    <HamburgerMenu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
