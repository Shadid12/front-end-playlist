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
import FlatButton from 'material-ui/FlatButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import axios from 'axios'

class AddToRoom extends ReactQueryParams {
	constructor(props){
		super(props)
		this.state = {
			url: this.queryParams.lunch,
			value: 1,
			rooms: []
		}

		axios.get('http://localhost:3001/rooms')
			.then( (res) => {
				this.setState({rooms: res.data,
							   value: res.data[0].id})
				console.log(this.state.rooms)
			})
	}
	
	handleChange = (event, index, value) => {
		this.setState({value})
	}

	buttonClicked = (e) => {
		console.log(this.state.url + ' ' + this.state.value)
	}

	render(){
		return(
			<MuiThemeProvider>
			<div>
				<Navbar />
				<br />
				<DropDownMenu value={this.state.value} onChange={this.handleChange}>
				 	{
				 		this.state.rooms.map(function(item){
				 			return(
				 				<MenuItem value={item.id} primaryText={item.name} key={item.id} />
				 			)
				 		})
				 	}
		        </DropDownMenu>
				<FlatButton label="Add" primary={true} onClick={this.buttonClicked} />
			</div>
			</MuiThemeProvider>
		)
	}
}

export default AddToRoom