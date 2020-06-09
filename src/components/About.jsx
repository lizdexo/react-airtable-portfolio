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
            Hi! I'm a documentation specialist and I do a variety of creative
            projects in my free time.{" "}
          </p>
          <p>
            I like doing art & design, web development, technical
            documentation, and everything in between. If it involves
            managing/developing informational resources or making useful things
            that look nice, I'm probably into it.
          </p>

          <h3>Skills & Experience</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>Graphic Design</li>
            <li>eLearning Development</li>
            <li>Javascript</li>
            <li>UX/UI Design</li>
            <li>Documentation</li>
            <li>Web Administration</li>
          </ul>

          <p>
            For more details, find me on{" "}
            <a
              href="https://www.linkedin.com/in/dudekliz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
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
          <h2>About this Website</h2>

          <p>
            The main purpose of this site is to showcase a portfolio of my
            personal & professional work, but behind the scenes it's also one
            big practice project.{" "}
          </p>

          <p>
            I coded it from scratch as a way to exercise my development
            skills, and because I like having the flexibility of a totally blank
            canvas. It's a constant <a href="#to-do-list">work in progress.</a>
          </p>

          <h3>Planning & Design</h3>

          <p>
            I used <a href="https://www.figma.com/" target="_blank">Figma</a>, <a href="https://milanote.com/" target="_blank">Milanote</a>, and <a href="https://codepen.io/" target="_blank">Codepen</a> to plan out what I wanted to do.
          </p>

          <h4>Mood Board & Mock-ups</h4>
          <Figma src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMwhf2ldcOKLsZF1NfqGP6M%2FPortfolio-Mood-Board-and-Design%3Fnode-id%3D0%253A1&chrome=DOCUMENTATION" />

          <h4>Planning Notes</h4>

          <img src="https://dl.airtable.com/.attachments/2d3d47bf95c4c1c2037abb093dd98761/13fe2b96/milanote-portfolio-planning.png" />

          <h4>Rough Draft</h4>
          <Codepen src="https://codepen.io/dexoplanet/embed/gOYZRGR?height=265&theme-id=light&default-tab=result" />
          
          <h3>Implementation</h3>
          <p>After considering various options, I decided to start with <a href="https://reactjs.org/" target="_blank">React</a> because I was already familiar with the basics of it and I wanted to get something put together quickly.</p>
          <p>Since all of my project info was already organized in Airtable, I just had to learn how to work with the Airtable API so I continue using that for content management.</p>
            
            <p>Eventually I'd like to rebuild it with something meant for simple static websites like this, such as <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>.</p>

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

          <p>
            There's a lot left to do when it comes to building and improving
            this site, and I'm learning new things as I go. I'm a bit of a
            perfectionist so I'm constantly finding things to fix & improve.{" "}
          </p>

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
