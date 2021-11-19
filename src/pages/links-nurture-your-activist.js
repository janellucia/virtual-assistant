import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


const Nurture = (props) => (
  <Layout name="about-page-wrap services-page-wrap links-page-wrap">
    <SEO title="Links ➞ Nurture your Activist" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p class="text-center">Rest is Resistance. <br></br>Joy is a Radical Act.</p>
        </div>
      </section>
      <section className="about-page">
        <div className="about-wrap links-wrap">
          <div className="fine-print">
            <p>Below is a list of resources that I found supportive, use anything that feels right for you and leave the rest.</p>
          </div>
          <div className="tabs">
            <div className="tab tab-paragraph">
              <a href="https://www.instagram.com/tv/CQji8GFnGxp/?utm_source=ig_web_copy_link" target="new" class="insta-links">Step into your Spiritual Rainbow <p>(a talk with @jessica_lanyadoo X @hwyps)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://www.youtube.com/watch?v=FipCQW10wQY" target="new" class="insta-links">Creating Joy <p>(video with @leeharrisenergy)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://open.spotify.com/show/0LtsgWkOpLdYR7wK0senTX?si=ZfCp3yYwT-yETrMiOr2H6A&dl_branch=1" target="new" class="insta-links">Deepak Chopra — Creating Abundance<p>(21-Day Meditation Experience)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://open.spotify.com/episode/42QpLiSXjKL75tCmzWvqwE?si=4e658ffde2d24ebf" target="new" class="insta-links">The Joy of Imperfection <p>(podcast episode with @resetnyc)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://www.miguelruiz.com/the-four-agreements" target="new" class="insta-links">The Four Agreements <p>(A Practical Guide to Personal Freedom, by Don Miguel Ruiz)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://juliacameronlive.com/the-artists-way/" target="new" class="insta-links">The Artist's Way <p>(A Course in Discovering and Recovering Your Creative Self)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://www.activisthandbook.org/en/home" target="new" class="insta-links">ActivistHandbook.org <p>(exchange knowledge and experiences about activism)</p></a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://open.spotify.com/playlist/2eW4rxbZvU2uwW7CGKAQGv?si=52643df2166e4728" target="new" class="insta-links">Chill &amp; Recover <p>(playlist by @intersectionalenvironmentalist)</p></a>
            </div>
          </div>


        </div>
      </section>
    </div>
  </Layout >
)

export default Nurture

