import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

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
										  leftAvatar={<Avatar src={video.thumbnails.default.url} />} 
										  key={video.id} 
										  onClick={() => {
										  	window.location.href=`/add/query?lunch=${video.id}`
						}}/>)
					})
				}
			</List>
			</div>
		)
	}
}

export default SearchResults