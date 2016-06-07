import React, { Component } from 'react'
import reactDom from 'react-dom'

import Bug from './bugChecklist.js'

class BugChecklist extends Component{
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div>
				<ul>
					<li>{this.props.bug}hello</li>
				</ul>
			</div>
			)
	}
}

export default BugChecklist