import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = { song: '' }

		this.handleSongInput = this.handleSongInput.bind(this)
	}

	handleSongInput = (e) => {
		this.setState({ song: e.target.value})
	}

	render () {
		return (
			<MuiThemeProvider>
				<div>
					<TextField
				      floatingLabelText="Search Songs"
				      value={this.state.value}
				      onChange={this.handleSongInput}
				    />
				    <br />
				    <RaisedButton label="Search" onClick={this.searchSong} />
			    </div>
			</MuiThemeProvider>
		)
	}

	searchSong = () => {
		console.log(this.state.song)
	}
}

export default SearchBar