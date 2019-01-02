import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import 'animate.css/animate.min.css';
import '../styles/main.scss'


import PageTransition from 'gatsby-plugin-page-transitions'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <PageTransition transitionTime={500}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>
          <div className="wrapper">
            {children}
          </div>
        </main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </PageTransition>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
