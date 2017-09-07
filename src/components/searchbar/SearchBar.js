import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SearchResults from '../searchresults/SearchResults'
import search from 'youtube-search'

class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = { song: '',
					   videos: ''}

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
				      value={this.state.song}
				      onChange={this.handleSongInput}
				    />
				    <br />
				    <RaisedButton label="Search" onClick={this.searchSong} />
				    <SearchResults videos={this.state.videos} />
			    </div>
			</MuiThemeProvider>
		)
	}
	searchSong = () => {
	    var opts = {
	    	maxResults: 3,
	    	key: 'AIzaSyCc42k6MDwNMDkjwzs8Nt8MZ8WwITNoWFo'
	    }
	    search(this.state.song, opts, (err, res) => {
	    	if(err){
	    		console.log(err)
	    	}
	    	this.setState({videos: res})
	    	this.setState({song: ''})
	    	console.log(this.state.videos)
	    })
	}
}

export default SearchBar