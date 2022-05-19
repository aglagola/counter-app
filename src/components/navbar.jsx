import React, { Component } from "react";
// Stateless Functional Components, can use just a function
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary text-success">
              {this.props.totalCounter}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
