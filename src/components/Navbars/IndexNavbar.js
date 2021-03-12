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
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
} from "reactstrap";

export default function IndexNavbar() {
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <img src={require("assets/img/logo.png").default} width="50px" />
            {/* <span>ZAVIA</span> */}
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Creative Tim
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  BLK•React
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Jobs
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/jobs">
                  <i className="tim-icons icon-paper" />
                  Find Job
                </DropdownItem>
                <DropdownItem tag={Link} to="/">
                  <i className="tim-icons icon-bullet-list-67" />
                  Post Job
                </DropdownItem>
                <DropdownItem tag={Link} to="/aboutUs">
                  <i className="tim-icons icon-image-02" />
                  About Us
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                onClick={() => setFormModal(true)}
              >
                <i className="tim-icons icon-single-02" /> Sign In
              </Button>
            </NavItem>
            {/* <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={scrollToDownload}
              >
                <i className="tim-icons icon-cloud-download-93" /> Download
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
        {/* Sign In Modal */}
        <Modal
          modalClassName="modal-black"
          isOpen={formModal}
          toggle={() => setFormModal(false)}
        >
          <div className="modal-header justify-content-center">
            <button className="close" onClick={() => setFormModal(false)}>
              <i className="tim-icons icon-simple-remove text-white" />
            </button>
            <div className="text-muted text-center ml-auto mr-auto">
              <h3 className="mb-0">Sign in with</h3>
            </div>
          </div>
          <div className="modal-body">
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <img alt="..." src={require("assets/img/github.svg").default} />
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <img alt="..." src={require("assets/img/google.svg").default} />
              </Button>
            </div>
            <div className="text-center text-muted mb-4 mt-3">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup
                  className={classnames("input-group-alternative", {
                    "input-group-focus": emailFocus,
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-email-85" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    onFocus={(e) => setEmailFocus(true)}
                    onBlur={(e) => setEmailFocus(false)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup
                  className={classnames("input-group-alternative", {
                    "input-group-focus": passwordFocus,
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-key-25" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    onFocus={(e) => setPasswordFocus(true)}
                    onBlur={(e) => setPasswordFocus(false)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup check className="mt-3">
                <Label check>
                  <Input defaultChecked type="checkbox" />
                  <span className="form-check-sign" />
                  Remember me!
                </Label>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Sign in
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
        {/* End Form Modal */}
      </Container>
    </Navbar>
  );
}
