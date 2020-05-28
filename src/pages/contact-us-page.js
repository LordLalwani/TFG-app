import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeContextProvider from "../contexts/themeContext.js";

const ConstactUsPage = () => (
    <ThemeContextProvider>
        <Layout>
            <SEO title="Home" />
            <h1>Hello From the contact us page</h1>
        </Layout>
    </ThemeContextProvider>
)

export default ConstactUsPage
