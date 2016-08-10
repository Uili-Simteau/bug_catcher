import React, { Component } from 'react'
import reactDom from 'react-dom'

import BugChecklist from './bugChecklist.js'

class BugLog extends Component {
  constructor(props) {
    super(props)
    console.log("bugs coming through", this.props.bugs)
    }

  render() {
    return(
      <div id="bugLog">
        <h1>Bug Log</h1>
        <BugChecklist bugs={this.state.bugs} solutions={this.state.solutions} />
      </div>
      )
  }
}

export default BugLog