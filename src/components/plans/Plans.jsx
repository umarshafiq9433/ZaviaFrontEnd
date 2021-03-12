import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";

const Plans = () => {
  return (
    <section className="section section-coins" style={{ paddingTop: "0px" }}>
      <img
        alt="..."
        className="path"
        src={require("assets/img/path3.png").default}
      />
      <Container>
        <Row>
          <Col md="4">
            <hr className="line-info" />
            <h1>
              Choose the plan{" "}
              <span className="text-info">that fits your needs</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card className="card-coin card-plain">
              <CardHeader>
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={require("assets/img/bitcoin.png").default}
                />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="text-center" md="12">
                    <h4 className="text-uppercase">Silver</h4>
                    <span>Plan</span>
                    <hr className="line-primary" />
                  </Col>
                </Row>
                <Row>
                  <ListGroup>
                    <ListGroupItem>50 messages</ListGroupItem>
                    <ListGroupItem>100 emails</ListGroupItem>
                    <ListGroupItem>24/7 Support</ListGroupItem>
                  </ListGroup>
                </Row>
              </CardBody>
              <CardFooter className="text-center">
                <Button className="btn-simple" color="primary">
                  Get plan
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-coin card-plain">
              <CardHeader>
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={require("assets/img/etherum.png").default}
                />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="text-center" md="12">
                    <h4 className="text-uppercase">Gold</h4>
                    <span>Plan</span>
                    <hr className="line-success" />
                  </Col>
                </Row>
                <Row>
                  <ListGroup>
                    <ListGroupItem>150 messages</ListGroupItem>
                    <ListGroupItem>1000 emails</ListGroupItem>
                    <ListGroupItem>24/7 Support</ListGroupItem>
                  </ListGroup>
                </Row>
              </CardBody>
              <CardFooter className="text-center">
                <Button className="btn-simple" color="success">
                  Get plan
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-coin card-plain">
              <CardHeader>
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={require("assets/img/ripp.png").default}
                />
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="text-center" md="12">
                    <h4 className="text-uppercase">Platinum</h4>
                    <span>Plan</span>
                    <hr className="line-info" />
                  </Col>
                </Row>
                <Row>
                  <ListGroup>
                    <ListGroupItem>350 messages</ListGroupItem>
                    <ListGroupItem>10K emails</ListGroupItem>
                    <ListGroupItem>24/7 Support</ListGroupItem>
                  </ListGroup>
                </Row>
              </CardBody>
              <CardFooter className="text-center">
                <Button className="btn-simple" color="info">
                  Get plan
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Plans;
