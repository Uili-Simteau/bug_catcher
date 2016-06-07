
import React, { Component } from 'react'
import reactDom from 'react-dom'

import Title from './components/title.js'
import BugForm from './components/bugForm.js'
import BugChecklist from './components/bugChecklist.js'
import Bug from './components/bug.js'



class App extends Component {
	constructor(props){
		super(props)
		this.addBug = this.addBug.bind(this)
		this.state = {
			bugs: [] 
		}
	}

	addBug (bug) {
		const caughtBugs =this.state.bugs
		caughtBugs.push(bug)
		this.setState({
			bugs: caughtBugs
		})
		console.log('caught bugs!', this.state.caughtBugs)
	}


	render() {
		return (
			<div>
				<Title name={this.props.name} />
				<BugForm addBug={this.addBug}/>
				<BugChecklist bugs={this.state.bugs}/>
			</div>
		)
	}
}


const appendStuff = document.getElementById('App')

reactDom.render(
	<App name="Bug Catcher" saying="Catch those Bugs!" />,
	appendStuff
)