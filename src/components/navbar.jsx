import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        Navbar
        <span className="badge badge-secondary ">
          {this.props.totalCounter}
        </span>
      </div>
    );
  }
}

export default NavBar;
