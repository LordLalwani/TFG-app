import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import withThemeContext from "../utils/withThemeContext"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
      description="The Fearless is a Creative Agency based in Melbourne specialised in creating breathtaking user expereinces through digital engineering solutions." />
    <section className="hero-section">
      <h1>Your Next Digital Innovations Partner.</h1>
      <h3>We design, build and launch user experiences.</h3>
    </section>
  </Layout>
)

export default withThemeContext(IndexPage)
