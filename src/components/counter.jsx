import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags ? (
            this.state.tags.map(tag => <li key={tag}>{tag}</li>)
          ) : (
            <p>There are no tags!</p>
          )}
        </ul> */}
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
