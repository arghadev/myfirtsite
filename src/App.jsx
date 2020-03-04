import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Nav from './Components/HeaderComponent/navigation';
import Home from './Components/HomePage';
import About from './Components/About';
import Film from './Components/Films'
import Contact from './Components/Contact';
import personPhoto from './Assets/person-icon.png';
import Footer from './Components/FooterComponent/footer';

class App extends Component {
  constructor(){
    super();
    this.state ={
      person: [
        { name: "Argha", age: 28, about: "Author", image: personPhoto },
        { name: "Nikhil", age: 22, about: "Doctor", image: personPhoto },
        { name: "Akash", age: 15, about: "Business Man", image: personPhoto }
      ]
    }
  }

  render(){
    return (
      <div className="site-container">
        <Router>
          <Nav />
          <div className="main-content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About} />
            <Route exact path="/Film" component={Film} />
            <Route exact path="/Contact" render={(routeProps) => (<Contact {...routeProps} personName={this.state.person} />)} />
          </div>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;
