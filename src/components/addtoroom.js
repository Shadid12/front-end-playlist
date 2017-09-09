import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactQueryParams from 'react-query-params'

class AddToRoom extends ReactQueryParams {
	constructor(props){
		super(props)
		this.state = {
			url: this.queryParams.lunch
		}
	}
	

	render(){
		return(
			<div>
				<Navbar />
				<div onClick={() => {console.log(this.state.url)}}>Click</div>
			</div>
		)
	}
}

export default AddToRoom