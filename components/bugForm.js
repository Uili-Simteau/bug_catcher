
import React, { Component } from 'react'
import reactDom from 'react-dom'
import Bug from './bug.js'



class BugForm extends Component {
	constructor(props) {
		super(props)
	}

	submitBug(event) {
		// read the form, find the value in it
		// use addBug to submit that value
		this.props.addBug('dog')
	}

	render () {
		return (
			<div>
	 	  	<input id='bugInput' placeholder="What's your bug?"></input>
	 	  	<button id="bugButton" type="submit" onClick={this.submitBug.bind(this)}>Submit Bug</button>

		 	</div>
		)
	}
}

export default BugForm