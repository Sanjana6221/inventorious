import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 6 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counterId),
    });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    console.log("will handle reset in the last");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
