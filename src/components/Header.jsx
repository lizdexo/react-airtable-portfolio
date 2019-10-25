import React, { Component } from 'react'
import Nav from './Nav.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <header className="site-header" style={this.props.style}>
        <NavLink to="/" activeClassName="home-selected"> <h1 className="bubbleblock">{this.props.siteTitle}</h1></NavLink>
        <div className="spacer"></div> 
        {this.props.children}
      </header>
    )
  }
}


export default Header