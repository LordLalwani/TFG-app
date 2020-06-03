import { Link } from "gatsby"
import React, { useContext } from "react"
import * as fearlessLogo from "../images/fearless-logo.svg"
import * as fearlessLogoWhite from "../images/fearless-logo-white.svg"
import HamburgerMenu from "../components/hamburgerMenu"
import "./header.scss"
import { ThemeContext } from "../contexts/themeContext";

const classes = {
  pinned: "header-pin",
  unpinned: "header-unpin",
}

let lastKnownScrollY = 0
let headerComponent = null

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

const Header = () => {
  const { hamburgerMenuIsActive, currentTheme, themes } = useContext(ThemeContext);

  return (
    <header id="header-id" className="header-main">
      <div className="header-container">
        <Link to="/">
          <img src={hamburgerMenuIsActive || currentTheme === themes.lightTheme ? fearlessLogoWhite : fearlessLogo} alt="" className="header-img" />
        </Link>
      </div>
      <HamburgerMenu />
    </header>
  )
}

export default Header
