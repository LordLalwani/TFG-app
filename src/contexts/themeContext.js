import React, { createContext, Component } from "react"
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        hamburgerMenuIsActive: false
    }
    toggleHamburgerMenu = (currentState) => {
        this.setState({ hamburgerMenuIsActive: !currentState })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleHamburgerMenu: this.toggleHamburgerMenu }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
export default ThemeContextProvider;