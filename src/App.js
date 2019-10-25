import React, { Component } from "react";
import LazyLoad from "react-lazyload";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
import Gallery from "./components/AirtableGallery.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";

/* setting up some cool icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faTimes, faSpinner);

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
        <Header siteTitle="Portfolio">
          <Nav pages={route} />
        </Header>

        <Main>
          <section className="content">
            
         <LazyLoad once placeholder={<Spinner />}>
           <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/gallery" component={Gallery} />
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>   
           </Switch>
            </LazyLoad>
          </section>
        </Main>
        <Footer text="I'm gonna put some useful links here" />
      </div>
    );
  }
}

export default App;
