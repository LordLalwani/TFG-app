/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "../contexts/themeContext";
import Menu from "./menu"
import Footer from "./footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const { hamburgerMenuIsActive } = useContext(ThemeContext);

  return (
    <>
      <main>
        <Header />
        <Menu disabled={!hamburgerMenuIsActive ? true : false} />
        <div className="fadeIn">{children}</div>
        <Footer />}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
