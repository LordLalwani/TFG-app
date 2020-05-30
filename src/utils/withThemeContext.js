import ThemeContextProvider from "../contexts/themeContext.js";
import React from "react"

const withThemeContext = Component => {
    return class extends React.Component {
        render() {
            return (
                <ThemeContextProvider>
                    <Component />
                </ThemeContextProvider>
            )
        }
    }
}
export default (withThemeContext)