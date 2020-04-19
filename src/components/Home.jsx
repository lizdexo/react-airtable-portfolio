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
        <h2>This site is a work in progress</h2>
    
       <p>I'm slowly adding stuff and improving things in my spare time. 
         <br />
         See <Link to="/About">About</Link> for more details.</p>
        </section>
        <section className="content">  
        <h2>My Projects</h2>
    
          <h3>Art & Design</h3>
       <p>Skip to the <Link to="/Gallery">Gallery</Link> to see a collection of all my design-related projects.
          <br />
         <p><small><b>Please note:</b> If you're on mobile, some items in the gallery might load a little slowly. There's a bunch of large images in there that need to be optimized, which is on my <Link to="/About">to-do list</Link>.</small></p>
          
          </p>
          
          <h3>Around the Web</h3>
          <p>Here's a few personal side projects I've put together in my free time. They're not all finished yet, and I plan to remake or update most of these this year.</p>
          <ul>
            <li><a href="https://www.notion.so/German-Media-Directory-4dec0fc1159f426aab82a0ff4a0ad595" target="_blank">German Media Directory</a>—A curated list of German-language media meant for learners to get immersed in the language through fun stuff like tv shows, movies, podcasts, eBooks, and more.</li>
            <li><a href="https://sciencelearningdirectory.wordpress.com/" target="_blank">Science Learning Directory & Archive</a>—Another directory of fun online resources. It's a very old project that I originally started for a defunct student organization, aimed at promoting science education. This was meant to be an ongoing project that we could share with teachers & parents who are interested in finding supplemental teaching materials.</li>
            <li><a href="https://airtable.com/universe/expQtQJfZFC0PU7Hz/uxui-design-resources?explore=true" target="_blank">UX/UI Design Resources</a>—A collection of articles and tools for aspiring UX/UI designers.</li>
          <li><a href="https://codepen.io/dexoplanet/full/oKXorG" target="_blank">Web Dev Dump: Resources for Learning Web Development</a>—A list of resources that I assembled for a friend who wanted to learn web development. I plan to migrate this from codepen to actual website.</li>
          <li><a href="https://www.dexo.dev/" target="_blank">Dexo.dev</a>—There's nothing here yet. This will be my central respository for all the upgraded versions of the web projects listed above, plus whatever else I feel like putting there.</li>
          </ul>
        </section>
      </article>
    )
  }
}




export default Home