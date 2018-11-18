import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer.js'
import Header from './Header.js'
import Home from './Home.js'
import PreGame from './PreGame.js'
import Services from './Services.js'
import Rules from './Rules.js'
import Gallery from './Gallery.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Router>
          <div>

            <Route exact path="/" component={Home} />
            <Route exact path="/pregame" component={PreGame} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/gallery" component={Gallery} />

            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
