import React, { Component } from "react";
import SeasonsDisplay from "../src/components/SeasonsDisplay";
import Spinner from "../src/components/spinner";

class SeasonsApp extends Component {
  constructor(props) {
    super(props);
  }

  state = { lat: null, errMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),

      (err) => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errMessage && !this.state.let) {
      return <h1>Err: {this.state.errMessage} </h1>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonsDisplay lat={this.state.lat} />;
    }
    return <Spinner />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SeasonsApp;
