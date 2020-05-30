import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import withThemeContext from "../utils/withThemeContext"

const OurWorkPage = () => (
        <Layout>
            <SEO title="Home" />
            <h1>Hello From the our work page</h1>
        </Layout>
)

export default withThemeContext(OurWorkPage)
