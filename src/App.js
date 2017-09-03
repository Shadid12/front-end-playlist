import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import SearchBar from './components/searchbar/SearchBar'


class App extends Component {
  render() {
    return (
      <div>
        <div>
        	<Navbar />
          <SearchBar />
        </div>
        Welp this is gonna be
      </div>
    );
  }
}

export default App;
