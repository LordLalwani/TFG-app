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

var lastKnownScrollY = 0
var currentScrollY = 0
var ticking = false
var eleHeader = null

window.onload = function() {
  eleHeader = document.getElementsByClassName("header-main")
  document.addEventListener("scroll", onScroll, false)
}
var lastKnownScrollY = 0
function onScroll() {
  const currentScrollY = window.pageYOffset
  if(currentScrollY <= 80){
    console.log(currentScrollY)
    eleHeader[0].classList.remove(classes.unpinned)
    eleHeader[0].classList.remove(classes.pinned)
    console.log(eleHeader[0].className)
  }

  console.log(currentScrollY)
  if (currentScrollY >= 80 && currentScrollY < lastKnownScrollY) {
    pin()
  } else if (currentScrollY >= 80 && currentScrollY > lastKnownScrollY) {
    unpin()
  }
  lastKnownScrollY = currentScrollY
}

function pin() {
  if (eleHeader[0].classList.contains(classes.unpinned)) {
    eleHeader[0].classList.remove(classes.unpinned)
    eleHeader[0].classList.add(classes.pinned)
  }
  console.log(eleHeader[0].className)
}
function unpin() {
  if (
    eleHeader[0].classList.contains(classes.pinned) ||
    !eleHeader[0].classList.contains(classes.unpinned)
  ) {
    eleHeader[0].classList.remove(classes.pinned)
    eleHeader[0].classList.add(classes.unpinned)
  }
  console.log(eleHeader[0].className)
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
