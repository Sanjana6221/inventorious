import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>App Component</h2>
        <h3>
          Owner of {this.props.carinfo.name} is {this.props.carinfo.ownerName}
        </h3>
      </div>
    );
  }
}
