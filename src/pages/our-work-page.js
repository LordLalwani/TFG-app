import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeContextProvider from "../contexts/themeContext.js";

const OurWorkPage = () => (
    <ThemeContextProvider>
        <Layout>
            <SEO title="Home" />
            <h1>Hello From the our work page</h1>
        </Layout>
    </ThemeContextProvider>
)

export default OurWorkPage
