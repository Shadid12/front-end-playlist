import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class AddToRoom extends Component {
	render(){
		return(
			<div>
				<Navbar />
				<Route path="/add/:id" component={Modal}/>
			</div>
		)
	}
}

const Modal = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default AddToRoom