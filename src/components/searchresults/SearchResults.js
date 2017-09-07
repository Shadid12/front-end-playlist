import React from 'react'
import {List, ListItem} from 'material-ui/List'

class SearchResults extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		if(!this.props.videos){
			return null
		}
		return(
			<div>
			<List>
				{
					this.props.videos.map(function(video){
						return (<ListItem primaryText={video.title} 
										  key={video.id} 
										  onClick={() => {
											console.log(video)
						}}/>)
					})
				}
			</List>
			</div>
		)
	}
}

export default SearchResults