import React, { Component } from 'react';
import "./hamburgerMenu.scss"
import { ThemeContext } from "../contexts/themeContext";

class HamburgerMenu extends Component {
    static contextType = ThemeContext;

    render() {
        const { toggleHamburgerMenu, hamburgerMenuIsActive, currentTheme } = this.context;
        const handleChange = () => {
            toggleHamburgerMenu(hamburgerMenuIsActive)
        }
        return (
            <div role="button" tabIndex={0} className="Hamburger-main" onClick={handleChange} onKeyDown={handleChange}>
                <div style={{ backgroundColor: (currentTheme.hamburgerColor) }}
                    className={hamburgerMenuIsActive ? "Hamburger-one-toggledOn" : "Hamburger-one-toggledOff"} />
                <div style={{ backgroundColor: (currentTheme.hamburgerColor) }}
                    className={hamburgerMenuIsActive ? "Hamburger-two-toggledOn" : "Hamburger-two-toggledOff"} />
                <div style={{ backgroundColor: (currentTheme.hamburgerColor) }}
                    className={hamburgerMenuIsActive ? "Hamburger-three-toggledOn" : "Hamburger-three-toggledOff"} />
            </div>
        )
    }
}
export default HamburgerMenu
