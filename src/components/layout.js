import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import Menu from "./menu";
import 'animate.css/animate.min.css';
import '../styles/main.scss'


const Layout = ({ children, name }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
          }
        }
      }
    `}
    render={data => (
      <div className={name}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu pageWrapId={"main"} outerContainerId={"App"} />
        <main id="main">
           {children}
        </main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
}

export default Layout
