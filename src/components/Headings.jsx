import React, { Component } from 'react'


class H1 extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <h1 style={this.props.style}>{this.props.text}</h1>
    )
  }
}


export {H1}

class H2 extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <h1 style={this.props.style}>{this.props.text}</h1>
    )
  }
}


export {H2}