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
          <p>Establish diversity &amp; inclusion values in your business today, check out my services and together we can define ethical standards at the core of your brands values, design &amp; messaging.</p>
        </div>
      </section>
      <section className="about-page">
        <div className="about-wrap links-wrap">
          <div className="tabs">
            <div className="tab">
              <a href="https://petitions.whitehouse.gov/petition/justice-breonna-taylor-5" target="new" class="insta-links">Justice for Breonna Taylor</a>
            </div>
            <div className="tab">
              <a href="https://humanitariancoalition.akaraisin.com/ui/crisisinlebanonfundraising/participant/6117594?Lang=en-CA" target="new" class="insta-links">Donate to Canadians for Lebanon</a>
            </div>
            <div className="tab">
              <a href="https://blacklivesmatter-canada.carrd.co/#english" target="new" class="insta-links">Black Lives Matter Canada — Sign Petitions/Protest/Donate</a>
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

