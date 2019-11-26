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
          <p>I'm gonna put some stuff about me here</p>
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