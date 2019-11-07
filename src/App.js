import React, { Component } from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import logo from "./logo.svg";
import "./sass/index.scss";

/* the basic layout */
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

/* placeholder components */
import LoremIpsum, {
  Spinner,
  SpinnerCards
} from "./components/Placeholder.jsx";

/* pages */
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";

/* setting up some cool icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faSpinner, faEnvelopeSquare, faDribbbleSquare, faLinkedIn, faExternalLinkAlt, faGripHorizontal, faBookOpen, faExpand, faImages} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faTimes, faSpinner, faEnvelopeSquare, faExternalLinkAlt, faGripHorizontal, faBookOpen, faExpand, faImages );

/* navigation */

const route = [

    {
      id: 1,
      url: "/gallery",
      label: "gallery"
    },
    {
      id: 2,
      url: "/about",
      label: "about"
    },
    {
      id: 3,
      url: "/contact",
      label: "contact"
    }
  ];


/* the magic */

class App extends Component {

 
  
  render() {
       
    return (
      <div className="app-container">
        <Header siteTitle="Liz Dudek">
          <Nav pages={route} />
        </Header>

        <Main>
          <section className="main-inner">
            
       
           <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/gallery">
             <Gallery />
             </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>   
           </Switch>
            
          </section>
        </Main>
        <Footer
          MM="11"
          DD="06"
          YYYY="2019"         
          />
      </div>
    );
  }
}

export default App;
