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



export default Footer