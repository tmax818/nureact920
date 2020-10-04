import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors } from "react-redux-form";

//Validator functions
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      feedback: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    // alert("Current state is: " + JSON.stringify(values));
    this.props.postFeedback(values);
    this.props.resetFeedbackForm();
    console.log("values", values, typeof values);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <h2>Contact Us</h2>
            <hr />
          </div>
        </div>

        <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <h5>Our Address</h5>
            <address>
              1 Nucamp Way
              <br />
              Seattle, WA 98001
              <br />
              U.S.A.
            </address>
          </div>
          <div className="col">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone"></i> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeemail@fakeemail.co"
            >
              <i className="fa fa-envelope-o"></i> campsites@nucamp.co
            </a>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Send us your Feedback</h2>
            <hr />
          </div>
          <div className="col-md-10">
            {/* FORM */}
            <Form
              model="feedbackForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phoneNum" md={2}>
                  Phone
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".phoneNum"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone number"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(10),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phoneNum"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 10 numbers",
                      maxLength: "Must be 15 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                </Col>
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    validEmail: "Invalid email address",
                  }}
                />
              </Row>
              <Row className="form-group">
                <Col md={{ size: 4, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={4}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".feedback"
                    id="feedback"
                    name="feedback"
                    rows="12"
                    className="form-control"
                  ></Control.textarea>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
