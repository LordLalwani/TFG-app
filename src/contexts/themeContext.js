import React, { createContext, Component } from "react"
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        hamburgerMenuIsActive: false,

        themes: {
            lightTheme: {
                fontColor: "#fff",
                backgroundColor: "rgb(24, 20, 36)",
                hamburgerColor: "#fff",
                boxShadows: "rgba(0, 0, 0, 0.8)"
            },
            darkTheme: {
                fontColor: "rgb(24, 20, 36)",
                backgroundColor: "#fff",
                hamburgerColor: "rgb(24, 20, 36)",
                boxShadows: "rgba(0, 0, 0, 0.8)"
            },
        },
        currentTheme: ""
    }
    toggleHamburgerMenu = (currentState) => {
        this.setState({ hamburgerMenuIsActive: !currentState })
    }
    toggleThemeIsLight = (boolean) => {
        if (boolean === true) {
            this.setState({ currentTheme: this.state.themes.darkTheme });
        } else {
            this.setState({ currentTheme: this.state.themes.lightTheme })
        }
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