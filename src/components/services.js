import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./services.scss"

import Service from "./service"

import Floor from "../images/icons/floor.png"
import Stair from "../images/icons/stair.png"
import Glass from "../images/icons/glass.png"

const Services = () => {
  const card = [
    {
      title: `Flooring`,
      icon: Floor,
      description: `Our team of experts has years of experience in installing all type of floor with any kind of materials including: engineered hardwood, laminate, vinyl and tiles.`,
    },
    {
      title: `Staircase`,
      icon: Stair,
      description: `We have the ability to transform your existing staircase to give your home a brand new look.`,
    },
    {
      title: `Glass Railing`,
      icon: Glass,
      description: `Glass Railings are an increasingly popular choice for modern homes, renovations and commercial buildings.`,
    },
  ]
  return (
    <div className="services" id="services">
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
    </div>
  )
}

export default Services
