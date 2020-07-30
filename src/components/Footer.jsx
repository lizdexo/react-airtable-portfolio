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
          <li><a href="https://dev.to/lizdexo">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Liz's DEV Profile" height="17" width="17" style={{backgroundColor: '#CCFFFF'}}/> Dev.to
</a></li>
          <li><a href="https://www.redbubble.com/people/dexoplanet/shop?asc=u" target="_blank" tabIndex="2" title="Get cute pillows and stuff"><FontAwesomeIcon icon={['fa', 'tag']} /> Redbubble</a></li>
        </ul>
        
        
        
        <img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/lizdexo/react-airtable-portfolio/master?color=%239489CC&label=Last%20updated&logo=github" />
        
       
        
      </footer>
    )
  }
}



export default Footer