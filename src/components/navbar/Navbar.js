import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class Navbar extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      	<AppBar 
      	title="Shizzle Life"
      	iconElementRight={<RaisedButton label="Sign out" secondary={true} />}
      	/>
      </MuiThemeProvider>
    );
  }
}

export default Navbar