import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';
import ReadMe from './READMECopy.md';
import { Spinner, SpinnerCards } from "./Placeholder.jsx";
import { WIP, Draft } from "./Library.jsx";
import { Link } from "react-router-dom";

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
          <p>Hi! I'm a history nerd who got a degree in Political Economy but then realized I love design & development too much to totally get away from tech-related jobs. Currently, I work as a documentation specialist and do a variety of creative projects in my free time. </p>
          <p>My interests range from art & illustration to front-end coding to technical documentation and everything in between.  
          If it involves managing/developing informational resources or making useful things that look nice, I'm probably into it.</p>
          
          
          <h3>Skills & Experience</h3>
          <ul>
            <li><b>HTML & CSS</b>—10 years</li>
            <li><b>Graphic Design</b>—8 years</li>
            <li><b>eLearning development</b>—3 years</li>
            <li><b>Javascript (including React)</b>—1 year</li>
            <li><b>UX/UI design</b>—1 year</li>
            <li><b>Tech writing & Documentation</b>—1 year</li>
            <li><b>Web Administration</b>—6 months</li> 
          </ul>
          
          <p>
            For more details, find me on <a href="https://www.linkedin.com/in/dudekliz/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        
       
        <h3>Projects</h3>
          
          
          
          <p><em>&#8618; Go to the <Link to="/gallery">gallery</Link> see all of my projects.</em></p>
          
          
          <p>
            Listed below are a few side projects from around the web that I haven't really added to the gallery yet. They're not all finished, and I plan to remake or update most of these this year. </p>
          <ul>
            <li><a href="https://www.redbubble.com/people/dexoplanet/" target="_blank">Redbubble: dexoplanet</a>—An online shop featuring a variety of designs that I've made just for fun. </li>
            <li><a href="https://www.notion.so/German-Media-Directory-4dec0fc1159f426aab82a0ff4a0ad595" target="_blank">German Media Directory</a> <WIP />—A curated list of German-language media meant for learners to get immersed in the language through fun stuff like tv shows, movies, podcasts, eBooks, and more.</li>
            <li><a href="https://sciencelearningdirectory.wordpress.com/" target="_blank">Science Learning Directory & Archive</a>—Another directory of useful online resources. It's a <em>very</em> old project that I originally started for a defunct student organization, aimed at promoting science education. This was meant to be an ongoing project that we could share with teachers & parents who are interested in finding supplemental teaching materials.</li>
            <li><a href="https://airtable.com/universe/expQtQJfZFC0PU7Hz/uxui-design-resources?explore=true" target="_blank">UX/UI Design Resources</a>—A collection of articles and tools for aspiring UX/UI designers.</li>
          <li><a href="https://codepen.io/dexoplanet/full/oKXorG" target="_blank">Web Dev Dump: Resources for Learning Web Development</a> <WIP />—A list of resources that I assembled for a friend who wanted to learn web development. I plan to migrate this from codepen to an actual website.</li>
          <li><a href="https://www.dexo.dev/" target="_blank">Dexo.dev</a> <WIP />—There's not much here yet. This will be my central repository for all the upgraded versions of the web projects listed above, plus whatever else I feel like putting there.</li>
          </ul>
       
        
        </section>
        
  
          
          
           
                <section id="readme">
            
            {this.state.readme !== '' ? (
            <>
          <ReactMarkdown linkTarget="_blank">
          {this.state.readme}
          </ReactMarkdown>
            </>
                 ) : (
       <Spinner />
      )}
          
                   <h3 id="to-do-list">To Do List</h3> 
          
          
            
            <iframe className="airtable-embed" src="https://airtable.com/embed/shrWMvqN9C8GR0pe0?backgroundColor=purple" frameborder="0" width="100%" height="900" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe>
            
                     
           
      </section>
          
     
          
       
          
        
       
        
      </article>
    )
  }
}




export default About