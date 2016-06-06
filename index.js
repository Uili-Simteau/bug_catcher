
import React, { Component } from 'react'
import reactDom from 'react-dom'


class Title extends Component {
	constructor(props) {
		super(props)

		this.state = {
			clicked: false
		}
	}

  toggleClickedState() {
  this.setState({clicked: !this.state.clicked})
  console.log(this.state)
}

	render(){
		<div
		onClick={this.toggleClickedState.bind(this)}
		style={ this.state.clicked ? {'fontSize': '100px'} : {'color': 'red', 'fontSize': '50px'} }
	 >
	 		<h1>Welcome to {this.props.name}!</h1>
	}
}

class App extends Component {

	render() {
		return (
			<div>
				<Title name={this.props.name} />
				<BugCatcher saying={this.props.saying} />
			</div>
		)
	}
}


const appendStuff = document.getElementById('App')

reactDom.render(
	<App name="Bug Catcher" saying="Catch those Bugs!")