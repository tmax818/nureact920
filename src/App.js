import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Directory from "./components/Directory";
///What does the line below do?
import { CAMPSITES } from "./shared/campsites";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        {/* what is the campsites attribute doing in the line below? */}
        <Directory campsites={this.state.campsites} />
      </div>
    );
  }
}

export default App;
