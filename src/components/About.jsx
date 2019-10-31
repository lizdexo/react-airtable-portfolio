import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import ReadMe from './READMECopy.md';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readme: '',
    }
  };
  
  
    componentDidMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(ReadMe).then(res => res.text()).then(text => this.setState({ readme: text }));
  }
  
  
  render() {
    return (
      <article>
             
        <section className="content">
          <h2>About Me</h2>
          <p>I'm gonna put some stuff about me here</p>
        </section>
        
        <section id="readme">
          <ReactMarkdown source={this.state.readme} linkTarget="_blank" />
        </section>
        
      </article>
    )
  }
}




export default About