import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import ReadMe from './READMECopy.md';
import { Spinner, SpinnerCards } from "./Placeholder.jsx";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readme: '',
    }
  };
  
  
    componentDidMount() {
    fetch(ReadMe).then(res => res.text()).then(text => this.setState({ readme: text }));
  }
  
  
  render() {
    return (
      <article>
        <section className="intro">
        <h1>About</h1>
             </section>
        <section className="content">
          <h2>About Me</h2>
          <p>Hi! I'm a 20-something nerd who loves everything related to organizing and presenting information. Whether it's through UX design, web development, technical writing, or more, my end goal is always to make stuff that is informative and easy to use. 
            I'm still learning and improving my skills every day.</p>
          
        <h3>Experience</h3>
          <p>Here's a very short list of my work experience, along with rough estimates of how much time I've spent in each area.</p>
          <ul>
            <li><b>HTML & CSS</b>—10 years (off and on since 2002. I started at age 11, back in the good ol' days of <a href="http://www.lissaexplains.com/" target="_blank">Lissa Explains</a> and Geocities)</li>
            <li><b>eLearning development</b>—3 years (September 2015 - January 2019)</li>
            <li><b>Javascript</b>—1 year (June 2019 - Present)</li>
            <li><b>UX/UI design</b>—1 year (January 2019 - December 2019*)</li>
            <li><b>Tech writing & Documentation</b>—1 year (July 2019 - Present*)</li>
            <li><b>Content Management & Document Management</b>—1 year (July 2019 - Present*)</li>
         
            
          </ul>
          <small><i>* Plus some related experience while I was doing eLearning development</i></small>
          <p>For more details, find me on <a href="https://www.linkedin.com/in/dudekliz/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        
        </section>
        
  
          
          
           {this.state.readme !== '' ? (
                <section id="readme">
          <ReactMarkdown linkTarget="_blank">
          {this.state.readme}
          </ReactMarkdown>
      </section>
          
          ) : (
       <Spinner />
      )}
          
          
        
       
        
      </article>
    )
  }
}




export default About