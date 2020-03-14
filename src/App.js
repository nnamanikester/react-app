import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 4 }
    ]
  };

  handleReset = () => {
    const counter = this.state.counters.map(counter => (counter.value = 0));
    this.setState({ counter });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="main">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
