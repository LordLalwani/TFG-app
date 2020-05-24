import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as logo from "../images/fearless-logo.svg"
import HamburgerMenu from "../components/hamburgerMenu"

const Header = ({ siteTitle }) => (
  <header style={{
    width: "100%",
    top: "0px",
    left: "0px",
    zIndex: "1000",
    display: "flex",
    flexDirection: "row",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    WebkitBoxAlign: "center",
    alignItems: "center",
    padding: `1.5rem 3rem`,
  }}>
    <div style={{
      maxWidth: "auto",
    }}>
      <Link to="/">
        <img src={logo} alt="" style={{
          width: "7rem",
          marginBottom: "0px"
        }} />
      </Link>
    </div>
    <HamburgerMenu/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
