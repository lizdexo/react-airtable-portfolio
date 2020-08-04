import React, { Component } from 'react'
import ContactForm, { Basic } from "./Form.jsx";


class Contact extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <article>
         <section className="intro">
        <h1>Contact</h1>
        </section>
        <section className="content">
          
          <h2>Email Me</h2>
       
          
          <ContactForm />
  
          
          
          
         <p>Or, find me on <a href="https://www.linkedin.com/in/dudekliz/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p> 
          
        </section>
      </article>
    )
  }
}




export default Contact