/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];

export default function PostJob() {
  return (
    <div className="section">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col className="mb-5 mb-lg-0" lg="5">
            <h1 className="text-white font-weight-light">Become Employer</h1>
            <p className="text-white mt-4">
              Black Design comes with three pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go.
            </p>
            <Button className="mt-4" color="warning" href="#">
              Post a Job
            </Button>
          </Col>
          <Col lg="6">
            <UncontrolledCarousel
              items={carouselItems}
              indicators={false}
              autoPlay={false}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
