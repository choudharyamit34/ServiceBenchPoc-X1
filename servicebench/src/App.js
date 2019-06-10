import React, { Component } from 'react';

import './App.css';
import Header, {  } from "./components/templates/Header";
import Footer from './components/templates/Footer';
import Body from './components/templates/Body';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Body />
          <Footer />
      </div>
    );
  }
}

export default App;
