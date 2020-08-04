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
       <li><a href="https://www.linkedin.com/in/dudekliz/" target="_blank" rel="noopener noreferrer"  title="Connect with me on LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} />  LinkedIn</a></li> 
      
      <li><a href="https://dribbble.com/dexoplanet" target="_blank" rel="noopener noreferrer" title="See me on Dribbble"><FontAwesomeIcon icon={['fab', 'dribbble-square']} /> Dribbble</a></li>
          <li><a href="https://dev.to/lizdexo"  target="_blank" rel="noopener noreferrer" >
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"alt="Liz's DEV Profile" height="17" width="17" style={{backgroundColor: '#CCFFFF'}}/> Dev.to
</a></li>
          <li><a href="https://www.redbubble.com/people/dexoplanet/shop?asc=u" target="_blank" title="Get cute pillows and stuff"><FontAwesomeIcon icon={['fa', 'tag']} /> Redbubble</a></li>
        </ul>
        
        
        <small>&copy; 2020 Liz Dudek</small>
       <a href="https://github.com/lizdexo/react-airtable-portfolio/commits/master" target="_blank" rel="noopener noreferrer"><img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/lizdexo/react-airtable-portfolio/master?color=%239489CC&label=Last%20updated" /></a> 
        
       
        
      </footer>
    )
  }
}



export default Footer