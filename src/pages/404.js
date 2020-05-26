import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeContextProvider from "../contexts/themeContext.js";

const NotFoundPage = () => (
  <ThemeContextProvider>
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </ThemeContextProvider>
)

export default NotFoundPage
