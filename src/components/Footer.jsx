import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Footer extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <footer style={this.props.style}>
      
        
        <ul>
       <li><a href="https://www.linkedin.com/in/dudekliz/" target="_blank" rel="noopener noreferrer" tabIndex="1" title="Connect with me on LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} />  LinkedIn</a></li> 
      
      <li><a href="https://dribbble.com/dexoplanet" target="_blank" rel="noopener noreferrer" tabIndex="2" title="See me on Dribbble"><FontAwesomeIcon icon={['fab', 'dribbble-square']} /> Dribbble</a></li>
        </ul>
        
       <small>Last updated: <time dateTime={this.props.YYYY + "-" + this.props.MM + "-" + this.props.DD}>{this.props.MM + "/" + this.props.DD + "/" + this.props.YYYY}</time></small>
        
      </footer>
    )
  }
}



export default Footer