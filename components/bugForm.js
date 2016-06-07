
import React, { Component } from 'react'
import reactDom from 'react-dom'



class BugForm extends Component {
	constructor(props) {
		super(props)
	}


	render () {
		return (
			<div>
		 	  <form>{this.props.name}
		 	  	<input id='bugInput' placeholder="What's your bug?"></input><button id="bugButton" type="submit">Submit Bug</button>
		 	  	<p></p>
		 	  	<input id='bugSolution' placeholder="What's the solution?"></input><button id="bugButton" type="submit">Solution!</button>
		 	  </form>
		 	</div>
		)
	}
}

export default BugForm