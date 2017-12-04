import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from './About';

class App extends Component {
  render() {
    return (
      //router goes around everything
      <Router>
        <div className="App">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

