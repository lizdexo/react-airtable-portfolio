import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Layout Elements */

const Card = (props) => {
  return (
    <div className="gallery-card" id={props.id} style={{...props.style}} >
        
      {props.children}
    
  </div>
  )
}
export {Card};


/* Buttons */


class CloseButton extends Component {
  handleClick = e => {
    e.stopPropagation();  
    this.props.onClick();
  };

  render() {
    return (
      <button className="button-close" onClick={this.handleClick}>
         <FontAwesomeIcon icon="times" />
      </button>       
    )
  }
}

export { CloseButton };






/* Full Library Demo */

class Library extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <article id="library">
       <Card></Card>
        
        
      </article>
    )
  }
}


export default Library