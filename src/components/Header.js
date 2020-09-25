import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin = (event) => {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>NuCamp</h1>
                <h2>a better way to camp</h2>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="/assets/images/logo.png"
                height="30"
                width="30"
                alt="NuCamp Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/directory">
                    <i className="fa fa-list fa-lg" /> Directory
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              {/* add button here */}
              <span className="navbar-text ml-auto">
                <Button outline onClick={this.toggleModal}>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>
        {/* add modal here */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            {/* uncontrolled form here */}
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
