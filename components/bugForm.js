
import React, { Component } from 'react'
import reactDom from 'react-dom'
import Bug from './bug.js'



class BugForm extends Component {
	constructor(props) {
		super(props)
		
	}
	

	submitBug(event) {
		// var bugText = document.getElementById("bugInput").value
		var input = this.refs.bugInput
		var value = input.value
		input.value = ''

		this.props.addBug(value)
	}

	render () {
		return (
			<div>
	 	  	<input id='bugInput' ref='bugInput' type="text" placeholder="What's your bug?"></input>
	 	  	<button id="bugButton" type="submit" onClick={this.submitBug.bind(this)}>Submit Bug</button>

		 	</div>
		)
	}
}

export default BugForm