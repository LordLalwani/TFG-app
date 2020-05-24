import React from "react"
import "./hamburgerMenu.scss"

const handleChange = () => {
    //add theme context toggle.
}

const HamburgerMenu = () => {
    return (
        <div role="button" tabIndex={0} className="Hamburger-main" onClick={handleChange} onKeyDown={handleChange}>
            <div className="Hamburger-one" />
            <div className="Hamburger-two" />
            <div className="Hamburger-three" />
        </div>
    )
}
export default HamburgerMenu
