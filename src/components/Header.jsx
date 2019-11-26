import React, { Component } from 'react'
import {
  NavLink
} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <header className="site-header" style={this.props.style}>
        <NavLink to="/" activeClassName="home-selected" data-link="internal"> 
          <span className="bubbleblock">{this.props.siteTitle}</span>
        </NavLink>
        <div className="spacer"></div> 
        {this.props.children}
      </header>
    )
  }
}


export default Header