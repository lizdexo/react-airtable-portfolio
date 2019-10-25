import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <NavLink to={this.props.url} activeClassName="selected">
          {this.props.label}
        </NavLink>
      </li>
    );
  }
}


class Nav extends Component {
   constructor(props) {
    super(props);
  } 

  render() {
    return (
      <nav>
        <ul>
          {this.props.pages.map((page, index, label) => (
             <li>
        <NavLink to={page.url} activeClassName="selected">
          {page.label}
        </NavLink>
      </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
