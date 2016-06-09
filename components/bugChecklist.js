import React, { Component } from 'react'
import reactDom from 'react-dom'

import Bug from './bug.js'

class BugChecklist extends Component{
	constructor(props) {
		super(props)

		console.log("bugs BugChecklist got from App", this.props.bugs)
	}

	render () {
		const bugs = this.props.bugs

		return (
			<div>
				<ul>
					{ bugs.map( (singleBug, i) => { 
						  return (
						  	<div>
							  	<input  id="checkbox" value="#"/><Bug class="singleBug" bug={singleBug} index={ i } />
							  	<input id='solution' ref='solution' type="text" placeholder="Solution?"></input>
							  </div> 
					  	)} 
				  )}
				</ul>
			</div>
			)
	}
}

export default BugChecklist