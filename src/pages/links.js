import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


const Links = (props) => (
  <Layout name="about-page-wrap services-page-wrap links-page-wrap">
    <SEO title="Links" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p>Branding + Logos + Illustration</p>
          <p>Beautiful & Intelligent Design for the Modern Business</p>
          {/* <p>“Like all explorers, we are drawn to discover what's out there without knowing yet if we have the courage to face it.” <br></br>— Pema Chödrön</p> */}
        </div>
      </section>
      <section className="about-page">
        <div className="about-wrap links-wrap">
          <div className="tabs">
            <div className="tab">
              <a href="/services" class="insta-links">Services</a>
            </div>
            <div className="tab">
              <a href="/" class="insta-links">Portfolio</a>
            </div>
            <div className="tab">
              <a href="/coaching" class="insta-links" target="new">Resources for Designers</a>
            </div>

            <div className="tab">
              <a href="https://open.spotify.com/user/12180117318?si=BeIdke_bS1m-OxfdC7gW9w" target="new" class="insta-links">Spotify Playlists</a>
            </div>
            <div className="tab">
              <a href="/" class="insta-links">Website</a>
            </div>
          </div>


        </div>
      </section>
    </div>
  </Layout >
)

export default Links

