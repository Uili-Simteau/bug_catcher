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
					{ bugs.map( (singleBug) => { 
						  return <Bug bug={singleBug} /> 
					  }) 
				  }
				</ul>
			</div>
			)
	}
}

export default BugChecklist