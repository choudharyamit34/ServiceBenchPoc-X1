import React, { Component } from 'react';
import Header from '../components/templates/header';
import Body from '../components/templates/Body';
import Footer from '../components/templates/Footer';
import '../Stylesheets/mystyles.css';

class App extends Component {
 
    render() {
   
      let navHeader =  window.location.pathname !=='/login' ? <Header /> : '';
         return (
         <div>
          {navHeader}
          <Body />
          <Footer />
         </div>
         );
     }
 }
 
 export default App;