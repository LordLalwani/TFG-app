import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import withThemeContext from "../utils/withThemeContext"

const ServicesPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hello From the services page</h1>
    </Layout>
)

export default withThemeContext(ServicesPage)
