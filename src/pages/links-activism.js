import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


const Activism = (props) => (
  <Layout name="about-page-wrap services-page-wrap links-page-wrap">
    <SEO title="Links ➞ Activism" keywords={[` UX Designer`, `Product Designer`, `User Experience`, `User Research`, `Empathy`, `Compassion`]} />
    <div className="wrapper">
      <section className="landing-about">
        <div className="about-wrap">
          <p>“You never completely have your rights, one person, until you all have your rights.” <br></br>— Marsha P. Johnson</p>
        </div>
      </section>
      <section className="about-page">
        <div className="about-wrap links-wrap">
          <div className="fine-print">
            <p>As a warning, many of these links open to other link lists. </p>
            <p>The order of this list is of no importance, all of these causes are in need of our support.</p>
          </div>
          <div className="tabs">
            <div className="tab">
              <a href="/links-trans-lives" class="insta-links">Support Trans Lives</a>
            </div>
            <div className="tab">
              <a href="https://msha.ke/freebritney/" target="new" class="insta-links">#FreeBritney</a>
            </div>
            <div className="tab">
              <a href="https://lnk.bio/oncanadaproject" target="new" class="insta-links">Support the Indigenous Community</a>
            </div>
            <div className="tab">
              <a href="https://www.ancientforestalliance.org/" target="new" class="insta-links">Save BC's old growth forests</a>
            </div>
            <div className="tab">
              <a href="https://linktr.ee/blacklivesmatter" target="new" class="insta-links">Black Lives Matter</a>
            </div>
            <div className="tab">
              <a href="https://www.gofundme.com/f/support-aapi-community-fund" target="new" class="insta-links">AAPI Community Fund</a>
            </div>
            <div className="tab">
              <a href="https://linktr.ee/isxenvironmentalist/" target="new" class="insta-links">Intersectional Environmentalism</a>
            </div>
            <div className="tab">
              <a href="https://www.isupportmyanmar.com/" target="new" class="insta-links">Support Myanmar</a>
            </div>
            <div className="tab">
              <a href="https://lebanoncrisis.carrd.co/" target="new" class="insta-links">Support Lebanon</a>
            </div>
            <div className="tab">
              <a href="https://www.change.org/p/tony-evers-charge-the-cops-who-shot-jacob-blake?" target="new" class="insta-links">Jacob Blake</a>
            </div>
            <div className="tab">
              <a href="https://www.forbreonna.com/" target="new" class="insta-links">Breonna Taylor</a>
            </div>
            <div className="tab">
              <a href="https://linktr.ee/ESN_TO" target="new" class="insta-links">Encampment Support Network</a>
            </div>
            <div className="tab tab-paragraph">
              <a href="https://tab.gladly.io/?u=janellucia" target="new" class="insta-links">Tab for a Cause — Chrome extension <p>(Raise money for charity with every browser tab you open, for free.)</p></a>
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

