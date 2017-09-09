import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/home'
import AddToRoom from './components/addtoroom'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add/:id" component={AddToRoom}/>
        </div>
      </Router>
    );
  }
}

export default App;
