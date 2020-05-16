import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { WIP, Draft } from "./Library.jsx";



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
        <h2>This site is a work in progress</h2>
    
       <p>I'm slowly adding stuff and improving things in my spare time. 
         
         See <Link to="/about">about</Link> for more details.</p>
          
          
           <p>Skip to the <Link to="/gallery">gallery</Link> to see a collection of all my design-related projects.
          <br />
         
          </p>
        </section>
        
      </article>
    )
  }
}




export default Home