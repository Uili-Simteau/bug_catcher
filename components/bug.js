
import React, { Component } from 'react'
import reactDom from 'react-dom'

class Bug extends Component {


	render() {

		return (
      <div>
        <p>{this.props.bug}</p>
      </div>
		)
	}
}

export default Bug
