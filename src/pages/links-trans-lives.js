import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


const Activism = (props) => (
  <Layout name="about-page-wrap services-page-wrap links-page-wrap">
    <SEO title="Links" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p>“What keeps me going is that quest for just being able to be present and be myself. Not for people, but for me.” <br></br>— Janet Mock</p>
        </div>
      </section>
      <section className="about-page">
        <div className="about-wrap links-wrap">
          <div className="fine-print">
            <p>As a warning, most of these links open to other link lists. </p>
            <p>The order of this list is of no importance, all of these causes are in need of our support.</p>
          </div>
          <div className="tabs">
            <div className="tab">
              <a href="https://linktr.ee/translifeline" target="new" class="insta-links">Trans Life Line</a>
            </div>
            <div className="tab">
              <a href="https://www.aliforneycenter.org/" target="new" class="insta-links">Ali Forney Center</a>
            </div>
            <div className="tab">
              <a href="https://www.the519.org/support-the-519" target="new" class="insta-links">The 519 Toronto</a>
            </div>

          </div>
          <div className="fine-print">
            <p>please help me make this list better by sending me your suggestions.</p>
          </div>

        </div>
      </section>
    </div>
  </Layout >
)

export default Activism

