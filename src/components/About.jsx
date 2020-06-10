import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import ReadMe from "./READMECopy.md";
import { Spinner, SpinnerCards } from "./Placeholder.jsx";
import { WIP, Draft } from "./Library.jsx";
import { Figma, Codepen } from "./Embed.jsx";
import { Link } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readme: ""
    };
  }

  componentDidMount() {
    fetch(ReadMe)
      .then(res => res.text())
      .then(text => this.setState({ readme: text }));
  }

  render() {
    return (
      <article>
        <section className="intro">
          <h1>About</h1>
        </section>
        <section className="content">
          <h2>About Me</h2>
          <p>
            <img className="profilepic" src="https://cdn.glitch.com/49f5bf1b-a021-4e17-ade2-7ae4a5ef4a28%2Fhi.png?v=1591829335617" />
          
            Hi! I've have this website for a year and I'm still not quite sure what to put here. I like doing art & design, web development, technical
            documentation, and everything in between. If it involves
            managing and developing informational resources or making useful things
            that look nice, I'm probably into it.
            
             <dl className="tags">
                      
                      <dt style={{'width': '100%'}}>Skills & Experience</dt>
                      
                        <dd>HTML & CSS</dd>
            <dd>Graphic Design</dd>
            <dd>eLearning Development</dd>
            <dd>Javascript</dd>
            <dd>UX/UI Design</dd>
            <dd>Documentation</dd>
            <dd>Web Administration</dd>

         
                    </dl>
            
          </p>
          

         


          <h3>Projects</h3>

          <p>
            <em>
              &#8618; Go to the <Link to="/gallery">gallery</Link> see all of my
              projects.
            </em>
          </p>
        </section>

        <section id="readme">
          <h2>About This Website</h2>

          <p>
            The main purpose of this site is to showcase a portfolio of my
            personal & professional work, but behind the scenes it's also one
            big practice project. It's a constant work in progress, and I'm learning new things as I go.
          </p>

          <h3>Planning & Design</h3>

          <p><em>&#8618; See it <Link to="/gallery/recbKLKvHqUSxT3wP">here</Link>.</em></p>
          
          

          {this.state.readme !== "" ? (
            <>
              <ReactMarkdown linkTarget="_blank">
                {this.state.readme}
              </ReactMarkdown>
            </>
          ) : (
            <Spinner />
          )}
          

          <h3 id="to-do-list">To Do List</h3>

          

          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/shrWMvqN9C8GR0pe0?backgroundColor=purple"
            frameborder="0"
            width="100%"
            height="900"
            style={{ background: "transparent", border: "1px solid #ccc" }}
          ></iframe>
        </section>
      </article>
    );
  }
}

export default About;
