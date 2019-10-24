import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './sass/index.scss';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';

import { Card } from './components/Library.jsx';
import LoremIpsum, { Spinner, SpinnerCards } from './components/Placeholder.jsx';
import Gallery from './components/AirtableGallery.jsx';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faTimes, faSpinner)

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header text="Portfolio" />
      <Main>
           
      
        <section className="content">
          
 
        <LoremIpsum />
          
           <LazyLoad once placeholder={<Spinner />}>
          <Gallery /> 
          </LazyLoad>
          
      </section> 
        
        </Main>
        <Footer text="Hello, Goodbye" />
        
        </div>
    );
  }
}

export default App;
