import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
// import wickedProblem from '../pages/wicked-problem.pdf';

import Layout from '../components/layout'
import SEO from '../components/seo'



const Iva = (props) => (

  <Layout name="project-page">
    <SEO title="Iva with an eye" />
    <section className="title">
      <div className="wrapper">
        <h1>Iva with an eye</h1>
        <p className="subtitle">Intuitive Soul Coach and Consultant in Life, Health & Business. Experience instant openings, opportunities and consistent results with Iva's expertise.</p>
      </div>
    </section>
    <div id="lettering-archive" className="wrapper">
    <section className="project-info intro">
        <div className="project-copy">
          <h2>Creating a brand identity for an evolving brand and business</h2>
          <p>Iva is an intuitive soul coach and consultant in life, health & business. Iva delivers illuminating insight on your current state with precise instruction on how to most excellently proceed. Clients experience instant openings, opportunities and consistent results. This work is intended for all those who are ready to ignite their highest potential.</p>
          <h3>Role</h3>
          <p>I was the lead designer/researcher on this project. I worked with stakeholders to create the Iva with an eye's style guide &amp; brand identity.</p>
          <h3>The Challenge</h3>
          <p>The challenge was to take a successful brand (Iva with an eye) and create a well defined brand strategy as well as marketing materials for continued growth.</p>
          <h3>The Solution</h3>
          <p>The solution was to deliver a well strategized brand for real results. Success in this project will be measured by growth in customers and sales, and a new market of customers.</p>
        </div>
        <div className="sidebar-intro">
          <div>
            <h3>Services</h3>
            <ul>
                <li>Brand Research</li>
                <li>Brand Strategy</li>
              <li>Brand Identity</li>
              <li>Logo Design</li>
              <li>Instagram Assets</li>
              <li>Marketing Assets</li>
           </ul>
          </div>
        </div>
      </section>
      <section className="project-info intro">
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
        <h2>Developing a Strategy</h2>
        <div className="project-copy project-steps">
          <p>With a team that has a great eye for design &amp; branding, Iva with an eye already had an attractive online presence, however, the stakeholders showed a great desire for brand consistancy and definition. Consistency is key to creating a memorable brand, this allows for instant recognizability and familiarity which invokes trust and friendliness.</p>
          <p>I worked with the stakeholders to brainstorm the message we are trying to get across to our audience. We designed mood boards and multiple concepts before deciding on the final look and feel.</p>
          <p>While developing the brand strategy we surfaced the challenges Iva with an eye's brand faced. In the process, we prioritized the needs and goals of the business and its customers. This became the foundation for the branding and marketing plans for Iva with an eye.</p>
          <p className="large-text">So, how might we create a meaningful brand identity to uplift and engage users?</p>
        </div>
      </section>
      <section className="project-info">
          <h2>Understanding the Users</h2>
        <div className="project-copy project-steps-full">
          <p>Iva with an eye is all about helping people make their dreams come true through personalized body readings and energetic tune-ups. To understand the needs of these clients, we created unique user profiles to represent the range of our users. This painted a clear picture of their demographics, needs and wants.</p>
          <p> </p>
          <p> </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info">
          <h2>Defining the Brand</h2>
        <div className="project-copy project-steps-full">
          <p>Through a series of exercises in the strategy session, we were able to extract and refine the key pillars of the brand. This defined the brand’s personality: how it should look, sound, act, and feel.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFive.childImageSharp.fluid} />
          <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
          <h2>Positioning</h2>
        <div className="project-copy project-steps-full">
          <p>Understanding what Iva with an eye's brand is and who she is a champion for, helped define the positioning statement of the brand. This set the tone for everything created for the brand.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeven.childImageSharp.fluid} />
          <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info intro">
          <h2>Brand Identity System</h2>
          <p>Iva with an eye's brand is made up of 4 core elements.</p>
        <div className="brand-elements">
          <a href="#logo">
            <Img fluid={props.data.imageNine.childImageSharp.fluid} />
            <p>01 Logo</p>
          </a>
          <a href="#colour">
            <Img fluid={props.data.imageTen.childImageSharp.fluid} />
            <p>02 Colour</p>
          </a>
          <a href="#type">
            <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
            <p>03 Typography</p>
          </a>
          <a href="#imagery">
            <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
            <p>04 Imagery</p>
          </a>
        </div>
      </section>
      <section className="project-info" id="logo">
          <h2>01 Logo</h2>
        <div className="project-copy project-steps-full">
          <p>The primary logo for Iva with an eye is a combination of minimal, light and natural elements as defined in the brand values. Together, these elements create a visual balance that is pleasing and uplifting to the user. The logo is simple, energetic and unique. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
        </div>
        <h3>Logo Explorations</h3>
        <div className="project-copy project-steps-full">
          <p>When brainstorming ideas for Iva's new logo we knew that we wanted to incorporate a strong sans-serif that also had an approachable feel to it, I will talk more about the typography later but we knew that we wanted to use Pnagram as the main font so I tested examples of using Pangram in it's natural state and i also tested examples where I manipulated the font slightly for a customized look and feel.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageFifteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageSixteen.childImageSharp.fluid} />
        </div>
        <h3>Logo Final</h3>
        <div className="project-copy project-steps-full">
          <p>When arriving at the final logo design we knew we were on the right track because this marriage of the natural elements and minimal fonts is what we were looking to acheive when defining Iva's brand. We used different stone backgrounds and played around with natural lighting to create a strong and soft appeal.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="colour">
          <h2>02 Colour</h2>
        <div className="project-copy project-steps-full">
          <p>Iva's brand colours are earthy and pull from the natural elements all around us, more specifically warm concrete as Iva states as one of her main sources for inspiration at the moment. This stays true to Iva's main message of staying grounded and connecting to the earth.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageSeventeen.childImageSharp.fluid} />
          <Img fluid={props.data.imageEighteen.childImageSharp.fluid} />
        </div>
        <h3>Colour & Texture</h3>
        <div className="project-copy project-steps-full">
          <p>Many of Iva's colours were pulled from natural rock and we wanted to take that concept one step further and add in actual textures from rock and concrete and in some cases here logo to appear as though it is carved into the stone.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageNineteen.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwenty.childImageSharp.fluid} />
        </div>
        <h3>Colour Final</h3>
        <div className="project-copy project-steps-full">
          <p>The final palette offers an earthy and natural vibe to stay true to the brands guidlines. We wanted to have each design value represented in some way, it's minimal as we only expore three colours and dive further into those colour's tint values that explore light. The pallete offers a natural appeal because the colours were pulled straight from nature, and the harmony between the colours offers the user a feeling of calm and quiet. </p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentyone.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentytwo.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="type">
          <h2>03 Typography</h2>
        <div className="project-copy project-steps">
          <p>When defining fonts for your Iva with an eye I ran through countless sans serif’s before arriving at Pangram as the final decision, I chose this as the main font because it gives off the vibe we were looking for, it’s minimal, approachable, high end, and most importantly it has a few quirks to keep it modern (we were especially attracted to the lower case a, g, and j). </p>
          <p>I added in a secondary font for titles used in the web or in marketing, in Iva's final logo I used the main fron Pangram, however, I did widen the font slightly to get the appeal we were looking for. When Iva's team is creating marketing content in ouse I wanted them to still have access to that effect without having to know how to manipulate fonts on their own, that's why I added Pier as an option. Both Pangram and Pier are fonts created in Montreal by a creative company called Pangram Pangram. </p>
        </div>
        <div className="two-images">
          <Img fluid={props.data.imageTwentyfour.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentythree.childImageSharp.fluid} />
        </div>
      </section>
      <section className="project-info" id="imagery">
          <h2>04 Imagery</h2>
        <div className="project-copy project-steps-full">
          <p>When establishing a imagery style for Iva with an eye I wanted to have an easily recognizabile pattern that users would be able to instantly know where the image came from. We used light as the main source for choosing images, Iva has said it herself, her users are more attracted to images with strong lighting contrasts, so for images we wanted to stick with light and natural tones.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentyfive.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
        </div>
        <h3>Quotes for Instagram</h3>
        <div className="project-copy project-steps-full">
          <p>With the instagram look and feel mostly defined in imagery a huge part of the brand is offering inspirational quotes to her users. I templated a few quote squares for Iva to use and I used underlining to get to the source of the true message of the quote.</p>
        </div>
        <div className="full-width-images">
          <Img fluid={props.data.imageTwentysix.childImageSharp.fluid} />
          <Img fluid={props.data.imageTwentyseven.childImageSharp.fluid} />
        </div>
      </section>
    </div>
    <section className="project-links">
      <div className="wrapper">
        <p className="thank-you">—Thank you </p>
      </div>
    </section>
    <section className="more-projects">
      <div className="wrapper">
        <h2 className="thank-you">Other Projects</h2>
        <a className="menu-item" href="/good-ones-academy">The Good Ones Academy</a>
        <a className="menu-item" href="/ivawithaneye">Iva with an eye</a>
        <a className="menu-item" href="/yoga-by-daisy">Pace yourself yoga by Daisy</a>
        <a className="menu-item" href="/livie-jewelry">Livie Jewelry</a>
        <a className="menu-item" href="/next-step-forward">The Next Step Forward</a>
        <a className="menu-item" href="/kindred-academy">Kindred Academy</a>
        <a className="menu-item" href="/lettering-archive">Lettering archive</a>
        <a className="menu-item" href="/easy-rider">Easy Rider</a>
      </div>
    </section>
  </Layout>
)

export default Iva

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "iva/iva-intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "iva/iva-intro-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "iva/iva-user-personas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFour: file(relativePath: { eq: "iva/iva-user-personas-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageFive: file(relativePath: { eq: "iva/iva-design-principles.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSix: file(relativePath: { eq: "iva/iva-design-principles-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageSeven: file(relativePath: { eq: "iva/iva-positioning.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageEight: file(relativePath: { eq: "iva/iva-positioning-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageNine: file(relativePath: { eq: "iva/iva-brand-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTen: file(relativePath: { eq: "iva/iva-brand-colour.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEleven: file(relativePath: { eq: "iva/iva-brand-typography.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwelve: file(relativePath: { eq: "iva/iva-brand-imagery.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageThirteen: file(relativePath: { eq: "iva/iva-logo-final.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFourteen: file(relativePath: { eq: "iva/iva-logo-final-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageFifteen: file(relativePath: { eq: "iva/iva-logo-explorations.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSixteen: file(relativePath: { eq: "iva/iva-logo-explorations-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageSeventeen: file(relativePath: { eq: "iva/iva-colour-intro.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageEighteen: file(relativePath: { eq: "iva/iva-colour-intro-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageNineteen: file(relativePath: { eq: "iva/iva-colour-textures.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwenty: file(relativePath: { eq: "iva/iva-colour-textures-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyone: file(relativePath: { eq: "iva/iva-colour-final.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentytwo: file(relativePath: { eq: "iva/iva-colour-final-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentythree: file(relativePath: { eq: "iva/iva-typography-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyfour: file(relativePath: { eq: "iva/iva-typography-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyfive: file(relativePath: { eq: "iva/iva-imagery.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentysix: file(relativePath: { eq: "iva/iva-instagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      imageTwentyseven: file(relativePath: { eq: "iva/iva-instagram-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
  }
`
