import React, { Component } from 'react'
import Nav from './Nav.jsx'

class Header extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <header className="site-header" style={this.props.style}>
        <h1 className="bubbleblock">{this.props.text}</h1>
        <div className="spacer"></div>
        <Nav />
      </header>
    )
  }
}


export default Header