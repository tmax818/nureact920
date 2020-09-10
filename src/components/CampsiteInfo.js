import React, { Component } from "react";

class CampsiteInfo extends Component {
  render() {
    if (this.props.campsite) {
      return <div className="row"></div>;
    }
    return <div></div>;
  }
}

export default CampsiteInfo;
