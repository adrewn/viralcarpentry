import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/company.jpg"
import PageHeader from "../components/pageHeader"
import AboutCard from "../components/aboutCard"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  const aboutContent = [
    `We custom design every feature of your staircase and railing system with you to ensure you get what you want. We work with architects and designers regularly as well as keeping in contact with local planners and building inspectors to make sure everything conforms to The Ontario Building Code.`,
    "We help with picking the right material, provide all possible options to accommodate all your needs and desires. We are very detail-oriented and we choose quality over quantity. We are not here to make a quick buck; we take our time to make sure our clients are satisfied.",
    "What makes us different from others in the industry is that we do not rush or cut corners. It is always better to get it done right the first time. However if you had an unfortunate experience that left you frustrated, we will offer you a variety options and solutions to fix your problems and make things right.",
  ]
  return (
    <section id="about">
      <PageHeader title="About Us" />
      <Container>
        <main className="about-page section-lg">
          <h2 className="header-title text-center font-weight-bold">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail w-50 mr-3"
              align="left"
            />
            <p className="content-title font-weight-bold">{fullTitle}</p>
            {aboutContent.map(para => (
              <p>{para}</p>
            ))}
          </section>
          <hr />
          <hr />
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
