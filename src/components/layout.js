/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/global.scss"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPage {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)
  return (
    <>
      <Header listPage={data.allWordpressPage.edges} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Hung</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
