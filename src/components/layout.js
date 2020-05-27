/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "../contexts/themeContext";
import Menu from "./menu"
import Footer from "./footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const { hamburgerMenuIsActive } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={!hamburgerMenuIsActive ? {
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          paddingTop: '10rem'
        } : {}}
      >
        <main>{hamburgerMenuIsActive ? <Menu /> : <div className="fadeIn">{children}</div>}</main>
        {hamburgerMenuIsActive ? <div /> : <Footer />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
