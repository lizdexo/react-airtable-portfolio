import React, { Component } from 'react'
import { Link } from "react-router-dom";



class Home extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <article>
         <section className="intro">
        <h1>Hi there!</h1>
        </section>
        <section className="content">  
        <h2>This site is under construction</h2>
    
       <p>Skip to the <Link to="/Gallery">Gallery</Link> to see my portfolio stuff</p>
        </section>
      </article>
    )
  }
}




export default Home