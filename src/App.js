import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import dc_logo from './dc_logo.png'
import marvel_logo from './avengers.jpeg'
import batman from './batman.jpeg'
import batwoman from './batwoman.jpeg'
import robin from './robin.jpg'
import deadpool from './deadpool.jpeg'
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to REACT BABY</h1>
      <div className="container">
        <Link to="/dc-comics" className="column">
          <img src={dc_logo} className="App-logo" />
        </Link>
        <Link to="/marvel-comics" className="column">
          <img src={marvel_logo} className="App-logo" />
        </Link>
        <div className="column">
          <img src={deadpool} className="App-logo" />
        </div>
      </div>
    </div>
  )
}

function Hero(props) {
  return (
    <div className="column">
      <h1>{props.name}</h1>
      <h3>{props.powers}</h3>
      <img src={props.src} class="App-logo" />
    </div>
  )
}

function DCComics() {
  return (
    <div>
      <h1> This is the DC Comics page </h1>
      <div className="container">
        <Hero name="batman" src={batman} powers="strong"/>
        <Hero name="robin" src={robin} powers="sneaky"/>
        <Hero name="wonderwoman" src={batwoman} powers="sexy"/>
      </div>
    </div>
  )
}

function MarvelComics() {
  return (
    <div>
      <h1> This is the Marvel Comics page </h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/dc-comics" component={DCComics} />
          <Route exact path="/marvel-comics" component={MarvelComics} />
        </div>
      </Router>
    );
  }
}

export default App;
