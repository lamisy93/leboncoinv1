import React, { Component } from "react";
import "./Logo.css";

class Logo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <img src={this.props.src} alt="" />;
  }
}

export default Logo;
