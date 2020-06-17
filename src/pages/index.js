import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import withThemeContext from "../utils/withThemeContext"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero-section">
      <h1>Your Next Digital Innovations Partner.</h1>
      <h3>We design, build and launch <u>user experiences.</u></h3>
    </section>
  </Layout>
)

export default withThemeContext(IndexPage)
