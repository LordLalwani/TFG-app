import ThemeContextProvider from "../contexts/themeContext.js";
import React from "react"

const withThemeContext = Component => {
    return class extends React.Component {
        render() {
            return (
                <ThemeContextProvider>
                    <Component {...this.props} />
                </ThemeContextProvider>
            )
        }
    }
}
export default (withThemeContext)