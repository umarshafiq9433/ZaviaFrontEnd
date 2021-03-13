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
import JobsTab from "components/Jobs/JobsTab";
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

export default function SearchForm() {
  const [inputFocus, setInputFocus] = React.useState(false);
  return (
    <div className="section section-tabs">
      <Container>
        <Row>
          <Col lg="3" sm="6">
            <InputGroup
              className={classnames({
                "input-group-focus": inputFocus,
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Enter Search Keywords"
                type="text"
                onFocus={(e) => setInputFocus(true)}
                onBlur={(e) => setInputFocus(false)}
              />
            </InputGroup>
          </Col>
          <Col lg="3" sm="6">
            <InputGroup>
              <Input placeholder="Search Jobs" type="select">
                <option value="">Full Time</option>
                <option value="">Part Time</option>
              </Input>
            </InputGroup>
          </Col>
          <Col lg="3" sm="6">
            <InputGroup>
              <Input placeholder="Category" type="select">
                <option value="">Web Development</option>
                <option value="">Graphic Designer</option>
              </Input>
            </InputGroup>
          </Col>
          <Col lg="3" sm="6">
            <InputGroup>
              <Input placeholder="Minimum Salary" type="number" />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="tim-icons ic_search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
        <div className="text-center">
          <Button color="primary">Search</Button>
        </div>
        <JobsTab />
      </Container>
    </div>
  );
}
