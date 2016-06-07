
import React, { Component } from 'react'
import reactDom from 'react-dom'

import Title from './components/title.js'
import BugForm from './components/bugForm.js'
import BugChecklist from './components/bugChecklist.js'



class App extends Component {

	render() {
		return (
			<div>
				<Title name={this.props.name} />
				<BugForm />
				<BugChecklist />
			</div>
		)
	}
}


const appendStuff = document.getElementById('App')

reactDom.render(
	<App name="Bug Catcher" saying="Catch those Bugs!" />,
	appendStuff
)