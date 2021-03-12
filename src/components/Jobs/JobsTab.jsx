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
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";

export default function JobsTab() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">Hot Jobs</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Col sm="3" xs="6" className="float-left">
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow"
                    src={require("assets/img/james.jpg").default}
                    style={{ width: "150px" }}
                  />
                </Col>
                <h1 className="d-inline">Job Title</h1>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                </p>
              </CardHeader>
              <CardBody>
                <h5 className="float-left">Salary:10000</h5>
                <h5 className="float-right">Timming: 09:00am to 05:00pm</h5>
              </CardBody>
              <CardFooter className="text-right">
                <Button color="success">Apply Now</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Col sm="3" xs="6" className="float-left">
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow"
                    src={require("assets/img/james.jpg").default}
                    style={{ width: "150px" }}
                  />
                </Col>
                <h1 className="d-inline">Job Title</h1>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                </p>
              </CardHeader>
              <CardBody>
                <h5 className="float-left">Salary:10000</h5>
                <h5 className="float-right">Timming: 09:00am to 05:00pm</h5>
              </CardBody>
              <CardFooter className="text-right">
                <Button color="success">Apply Now</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Col sm="3" xs="6" className="float-left">
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow"
                    src={require("assets/img/james.jpg").default}
                    style={{ width: "150px" }}
                  />
                </Col>
                <h1 className="d-inline">Job Title</h1>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                </p>
              </CardHeader>
              <CardBody>
                <h5 className="float-left">Salary:10000</h5>
                <h5 className="float-right">Timming: 09:00am to 05:00pm</h5>
              </CardBody>
              <CardFooter className="text-right">
                <Button color="success">Apply Now</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Col sm="3" xs="6" className="float-left">
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow"
                    src={require("assets/img/james.jpg").default}
                    style={{ width: "150px" }}
                  />
                </Col>
                <h1 className="d-inline">Job Title</h1>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                </p>
              </CardHeader>
              <CardBody>
                <h5 className="float-left">Salary:10000</h5>
                <h5 className="float-right">Timming: 09:00am to 05:00pm</h5>
              </CardBody>
              <CardFooter className="text-right">
                <Button color="success">Apply Now</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <div className="text-center">
          <Button color="primary">Load More</Button>
        </div>
      </Container>
    </div>
  );
}
