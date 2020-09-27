import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LocalForm, Control } from "react-redux-form";

class CommentForm extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }
  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Label htmlFor="rating" md={12}>
                Rating
              </Label>
              <Col md={12}>
                <Control.select
                  model=".rating"
                  id="rating"
                  name="rating"
                  placeholder="rating"
                  className="form-control"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
              </Col>
              <Label htmlFor="author" md={12}>
                Author
              </Label>
              <Col>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="Your Name"
                  className="form-control"
                />
              </Col>
              <Col>
                <Label htmlFor="text">Comment</Label>
                <Control.textarea
                  model=".text"
                  id="text"
                  name="text"
                  placeholder=""
                  className="form-control"
                  rows={6}
                />
              </Col>
              <Col>
                <Button type="submit" value="submit" color="primary">
                  Submit Comment
                </Button>
              </Col>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  console.log(comments);
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <p>
                {comment.author} -{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          );
        })}
        <CommentForm />
      </div>
    );
  }
  return <div></div>;
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default CampsiteInfo;
