import React, { Component } from 'react'


class Footer extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <footer style={this.props.style}>
        <small>{this.props.text}</small>
      </footer>
    )
  }
}


//More header types will be added to this file soon

export default Footer