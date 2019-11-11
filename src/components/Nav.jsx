import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";



class Nav extends Component {
   constructor(props) {
    super(props);
  } 

  render() {
    return (
      <nav>
        <ul>
          {this.props.pages.map((page, index, label) => (
             <li key={page.id}>
        <NavLink to={page.url} activeClassName="selected" data-link="internal">
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
