import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Layout Elements */

const Card = (props) => {
  return (
    <div className="gallery-card" id={props.id} style={{...props.style}} data-category={props.category}>
        
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








/* --- Unused

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

const overlayStyles = {
  position: "absolute",
  filter: "blur(1px)",
  transition: "opacity ease-in 1000ms",
  clipPath: "inset(0)"
};

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { highResImageLoaded: false };
  }
  render() {
    const { overlaySrc } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, "overlaySrc");
    return (
      <span>
        <img
          {...filteredProps}
          onLoad={() => {
            this.setState({ highResImageLoaded: true });
          }}
          ref={img => {
            this.highResImage = img;
          }}
          src={this.props.src}
        />
        <img
          {...filteredProps}
          className={`${this.props.className} ${overlayStyles}`}
          {...highResImageLoaded && { style: { opacity: "0" } }}
          src={overlaySrc}
        />
      </span>
    );
  }
}

export { Image }


/*

<Image
        className={"cover"}
        alt={"woman"}
        overlaySrc={
          "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
        }
        src={
          "https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
      />

*/



/* Full Library Demo */



class Library extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <article id="library">
       <Card></Card>
        <CloseButton />
        
      </article>
    )
  }
}


export default Library