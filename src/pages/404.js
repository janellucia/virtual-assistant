import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout name="error-page-wrap">
    <SEO title="404: Not found" />
    <div className="four-oh-four">
      <h1>page not found</h1>
      <p className="sub-title">Sorry, we couldn't find what you're looking for.</p>
    </div>
  </Layout>
)

export default NotFoundPage
