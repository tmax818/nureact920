import React, { Component } from "react";

// Component Imports
import Header from "./Header";
import Footer from "./Footer";
import Directory from "./Directory";
import Contact from "./Contact";
import CampsiteInfo from "./CampsiteInfo";
import About from "./About";
import Home from "./Home";

// React Router
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// React-Redux Stuff
import { connect } from "react-redux";
import { actions } from "react-redux-form";

// Actions
import { addComment, fetchCampsites } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};

const mapDispatchToProps = {
  addComment: (campsiteId, rating, author, text) =>
    addComment(campsiteId, rating, author, text),
  fetchCampsites: () => fetchCampsites(),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchCampsites();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.featured
            )[0]
          }
          campsitesLoading={this.props.campsites.isLoading}
          campsitesErrMess={this.props.campsites.errMess}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          partner={this.props.partners.filter((partner) => partner.featured)[0]}
        />
      );
    };

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          isLoading={this.props.campsites.isLoading}
          errMess={this.props.campsites.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.props.campsites} />}
          />
          <Route
            exact
            path="/contactus"
            render={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Route
            exact
            path="/aboutus"
            render={() => <About partners={this.props.partners} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
