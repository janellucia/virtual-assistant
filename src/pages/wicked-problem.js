import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wicked = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Wicked Problem</h1>
    <p>Now design a page and post it!</p>
    <Link to="/good-ones-academy">good ones</Link>
    <Link to="/easy-rider">easy-rider</Link>
  </Layout>
)

export default Wicked
