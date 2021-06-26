import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


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
              <a href="/services" class="insta-links">Design Services — Work with me</a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://tab.gladly.io/?u=janellucia" target="new" class="insta-links">Tab for a Cause — Chrome extension <p>(Raise money for charity with every browser tab you open, for free.)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="/links-activism/" class="insta-links">Support your Community <p>(opens to another link list)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="/links-nurture-your-activist/" class="insta-links">Nurture your Activist <p>(opens to another link list)</p></a>
            </div>
            <div className="tab">
              <a href="https://open.spotify.com/user/12180117318?si=BeIdke_bS1m-OxfdC7gW9w" target="new" class="insta-links">Spotify playlists</a>
            </div>
            <div className="tab">
              <a href="https://www.conceivedspace.com/digital-nature" target="new" class="insta-links">Janel Lucia x Conceived Beauty</a>
            </div>
            <div className="tab">
              <a href="https://www.instagram.com/letteringarchive/" target="new" class="insta-links">@letteringarchive</a>
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

