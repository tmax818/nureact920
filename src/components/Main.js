import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Directory from "./Directory";
import Contact from "./Contact";
import CampsiteInfo from "./CampsiteInfo";
import About from "./About";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";

import { CAMPSITES } from "../shared/campsites";
import { COMMENTS } from "../shared/comments";
import { PARTNERS } from "../shared/partners";
import { PROMOTIONS } from "../shared/promotions";

// this is the main function that is passed to App.js
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={
            this.state.campsites.filter((campsite) => campsite.featured)[0]
          }
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
          partner={this.state.partners.filter((partner) => partner.featured)[0]}
        />
      );
    };
    // this expects a id so it can find which campsite to render 
    const CampsiteWithId = ({ match }) => {
      console.log(match.params);
      return (
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
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
            render={() => <Directory campsites={this.state.campsites} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Route exact path="/aboutus" render={() => <About partners={this.state.partners} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
