import React, { createContext, Component } from "react"
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        hamburgerMenuIsActive: false,
        themeIsLight: false
    }
    toggleHamburgerMenu = (currentState) => {
        this.setState({ hamburgerMenuIsActive: !currentState })
    }
    toggleThemeIsLight = (boolean) => {
        this.setState({ themeIsLight:  boolean})
    }
    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state,
                toggleHamburgerMenu: this.toggleHamburgerMenu,
                toggleThemeIsLight: this.toggleThemeIsLight
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
export default ThemeContextProvider;