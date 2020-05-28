import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeContextProvider from "../contexts/themeContext.js";

const ServicesPage = () => (
    <ThemeContextProvider>
        <Layout>
            <SEO title="Home" />
            <h1>Hello From the services page</h1>
        </Layout>
    </ThemeContextProvider>
)

export default ServicesPage
