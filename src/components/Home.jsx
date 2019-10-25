import React, { Component } from 'react'
import { Link } from "react-router-dom";



class Home extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <article>
        <h2>Hi there!</h2>
        <h3>This site is under construction</h3>
        
       <p>Skip to the <Link to="/Gallery">Gallery</Link> to see my portfolio stuff</p>
        
      </article>
    )
  }
}




export default Home