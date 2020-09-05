import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
// Add the import statement below:
import Directory from "./components/Directory";
// Add the above:

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        {/* paste the following */}
        <Directory />
        {/* paste the above */}
      </div>
    );
  }
}

export default App;
