import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="four-oh-four">
      <h1>page not found</h1>
      <p className="sub-title">We couldn't find the page you're looking for.</p>
      <Link to="/" className="button">Back to Homepage</Link>
    </div>
  </Layout>
)

export default NotFoundPage
