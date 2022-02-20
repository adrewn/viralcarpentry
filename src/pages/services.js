import React from "react"
import { Container, Row, Col } from "reactstrap"

import PageHeader from "../components/pageHeader"
import Service from "../components/service"

import Floor from "../images/icons/floor.png"
import Stair from "../images/icons/stair.png"
import Glass from "../images/icons/glass.png"

const ServicesPage = () => {
  const card = [
    {
      title: `Flooring`,
      icon: Floor,
      description: `Our team of experts has years of experience in installing all type of floor with any kind of materials including: engineered hardwood, laminate, vinyl and tiles.`,
    },
    {
      title: `Staircase`,
      icon: Stair,
      description: `Are you looking to revive your staircase? Looking to switch from carpet to wood stairs? Viral Carpentry team can help! Unless you completely want to revamp or redesign a new staircase, which we can also do, we have the ability to transform your existing staircase to give your home a brand new look.`,
    },
    {
      title: `Glass railing`,
      icon: Glass,
      description: `Glass Railings are an increasingly popular choice for modern homes, renovations and commercial buildings, due to the value they add and contemporary look they offer. Utilising these in your home allows you to maintain magnificent views, create the illusion of extra space without compromising on safety and security.`,
    },
  ]
  return (
    <section id="services">
      <PageHeader title="Services" />
      <section className="services">
        <Container>
          <Row>
            {card.map(service => {
              return (
                <Col md="6" lg="4">
                  <Service services={service} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default ServicesPage
