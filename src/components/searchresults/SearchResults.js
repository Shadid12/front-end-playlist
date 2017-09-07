import React from 'react'

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
				{
					this.props.videos.map(function(video){
						return (<li key={video.id}>{video.title}</li>)
					})
				}
			</div>
		)
	}
}

export default SearchResults