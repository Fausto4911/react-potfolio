import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Portafolio"/>
        <h1>My First Bootstrap Page</h1>

      </div>
    );
  }
}

export default App;
