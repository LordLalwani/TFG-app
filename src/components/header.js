import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as logo from "../images/fearless-logo.svg"
import HamburgerMenu from "../components/hamburgerMenu"
import "./header.scss"

const classes = {
  pinned: "header-pin",
  unpinned: "header-unpin",
}

const lastKnownScrollY = 0
const headerComponent = null

window.onload = function () {
  headerComponent = document.getElementsByClassName("header-main")
  document.addEventListener("scroll", onScroll, false)
}
const onScroll = () => {
  const currentScrollY = window.pageYOffset
  if (currentScrollY <= 80) {
    headerComponent[0].classList.remove(classes.unpinned)
    headerComponent[0].classList.remove(classes.pinned)
  }
  if (currentScrollY >= 80 && currentScrollY < lastKnownScrollY) {
    pin()
  } else if (currentScrollY >= 80 && currentScrollY > lastKnownScrollY) {
    unpin()
  }
  lastKnownScrollY = currentScrollY
}

const pin = () => {
  if (headerComponent[0].classList.contains(classes.unpinned)) {
    headerComponent[0].classList.remove(classes.unpinned)
    headerComponent[0].classList.add(classes.pinned)
  }
}
const unpin = () => {
  if (
    headerComponent[0].classList.contains(classes.pinned) ||
    !headerComponent[0].classList.contains(classes.unpinned)
  ) {
    headerComponent[0].classList.remove(classes.pinned)
    headerComponent[0].classList.add(classes.unpinned)
  }
}

const Header = ({ siteTitle }) => (
  <header id="header-id" className="header-main">
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
