// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeContextProvider from "../contexts/themeContext.js";

const SecondPage = (props: PageProps) => (
  <ThemeContextProvider>
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2 ({props.path})</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </ThemeContextProvider>
)

export default SecondPage
