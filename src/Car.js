import React, { Component } from "react";

export default class Car extends React.Component {
  constructor() {
    super();
    this.shoot = this.shoot.bind(this);
  }
  shoot = (a, b) => {
    debugger;
    alert(a);
  };

  render() {
    return (
      <div>
        <button onClick={this.shoot.bind(this, "test")}>Take the shot!</button>
      </div>
    );
  }
}
