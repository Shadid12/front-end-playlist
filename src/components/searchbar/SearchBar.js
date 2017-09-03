import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

class SearchBar extends React.Component {
	render () {
		return (
			<MuiThemeProvider>
				<TextField
			      floatingLabelText="Search Songs"
			    />
			</MuiThemeProvider>
		)
	}
}

export default SearchBar