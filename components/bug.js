
import React, { Component } from 'react'
import reactDom from 'react-dom'

class Bug extends Component {


	render() {

		return (
      <div>
        <li>{this.props.bug}</li>
      </div>
		)
	}
}

export default Bug
