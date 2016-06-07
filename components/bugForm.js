
import React, { Component } from 'react'
import reactDom from 'react-dom'
import Bug from './bug.js'



class BugForm extends Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div>
		 	  <form>{this.props.name}
		 	  	<input id='bugInput' placeholder="What's your bug?"></input><button id="bugButton" type="submit" >Submit Bug</button>
		 	  </form>
		 	</div>
		)
	}
}

export default BugForm