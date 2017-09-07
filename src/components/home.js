import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import SearchBar from './searchbar/SearchBar'

class Home extends Component {

	render(){
		return(
			<div>
        		<Navbar />
          		<SearchBar />
        	</div>
		)
	}

}

export default Home