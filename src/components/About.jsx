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
            big practice project. 
          </p>

          <p>
            I coded it mostly from scratch as a way to exercise my development
            skills, and because I figured it would be fun to start with a totally blank
            canvas. It's a constant work in progress, and I'm learning new things as I go.
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
