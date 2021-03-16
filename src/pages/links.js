import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import Testimonials from '../components/testimonials'

const Links = (props) => (
  <Layout name="about-page-wrap services-page-wrap links-page-wrap">
    <SEO title="Links" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          {/* <p>Today and every day, I stand in solidarity with the movement for Black lives. I’ve curated these resources to help the community take action and make long-term commitments to anti-racism.</p> */}
          <p>“Like all explorers, we are drawn to discover what's out there without knowing yet if we have the courage to face it.” <br></br>— Pema Chödrön</p>
          {/* <p>“True compassion does not come from wanting to help out those less fortunate than ourselves but from realizing our kinship with all beings.” <br></br>— Pema Chödrön</p> */}
        </div>
      </section>
      <section className="about-page">
        <div className="about-wrap links-wrap">
          <div className="tabs">

            <div className="tab">
              <a href="https://www.conceivedspace.com/digital-nature" target="new" class="insta-links">CS Feature - Digital Nature</a>
            </div>
            <div className="tab">
              <a href="/" class="insta-links">janellucia.com</a>
            </div>
            <div className="tab">
              <a href="/services" class="insta-links">Design Services</a>
            </div>
            <div className="tab">
              <a href="https://www.patreon.com/CONCEIVED_SPACE" target="new" class="insta-links">Join Conceived Space Patreon</a>
            </div>
            <div className="tab">
              <a href="https://www.instagram.com/conceived_space/" target="new" class="insta-links">@conceivedspace</a>
            </div>
            <div className="tab">
              <a href="https://www.instagram.com/letteringarchive/" target="new" class="insta-links">@letteringarchive</a>
            </div>
            <div className="tab">
              <a href="https://open.spotify.com/user/12180117318?si=BeIdke_bS1m-OxfdC7gW9w" target="new" class="insta-links">spotify playlists</a>
            </div>
          </div>


        </div>
      </section>
    </div>
  </Layout >
)

export default Links

