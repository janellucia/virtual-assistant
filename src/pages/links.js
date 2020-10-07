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
              <a href="https://www.instagram.com/armeniasupportfund/" target="new" class="insta-links">@armeniasupportfund</a>
            </div>
            <div className="tab">
              <a href="https://www.gofundme.com/f/justice-pour-joycejustice-for-joyce?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all" target="new" class="insta-links">GoFundMe for Joyce Echaquan</a>
            </div>
            <div className="tab">
              <a href="https://www.forbreonna.com/" target="new" class="insta-links">ForBreonna.com</a>
            </div>
            <div className="tab">
              <a href="https://cheatsheetforthevotingbooth.com/?utm_source=ogpr&utm_medium=ig&utm_campaign=cs" target="new" class="insta-links">Vote in America</a>
            </div>
            <div className="tab">
              <a href="https://www.elections.ca/content.aspx?dir=reg&document=index&lang=e&section=vot" target="new" class="insta-links">Vote in Canada</a>
            </div>
            <div className="tab">
              <a href="https://humanitariancoalition.akaraisin.com/ui/crisisinlebanonfundraising/participant/6117594?Lang=en-CA" target="new" class="insta-links">Canadians for Lebanon</a>
            </div>
            <div className="tab">
              <a href="https://blacklivesmatter-canada.carrd.co/#english" target="new" class="insta-links">BLM Canada</a>
            </div>
            <div className="tab">
              <a href="https://docs.google.com/spreadsheets/d/1LHBfN_ceCMgBNYRMvFv_vw2NL8s72LRSUd9TYfIwZ24/edit#gid=0" target="new" class="insta-links">Anti-Racism Guide</a>
            </div>
            <div className="tab">
              <a href="/" class="insta-links">janellucia.com</a>
            </div>
            <div className="tab">
              <a href="/about" class="insta-links">About</a>
            </div>
            <div className="tab">
              <a href="/services" class="insta-links">Services</a>
            </div>
            <div className="tab">
              <a href="https://society6.com/letteringarchive" target="new" class="insta-links">Shop</a>
            </div>
            <div className="tab">
              <a href="https://www.instagram.com/letteringarchive/" target="new" class="insta-links">@letteringarchive</a>
            </div>
            <div className="tab">
              <a href="https://music.apple.com/profile/janellucia" target="new" class="insta-links">Apple Music Playlists</a>
            </div>
          </div>


        </div>
      </section>
    </div>
  </Layout>
)

export default Links

