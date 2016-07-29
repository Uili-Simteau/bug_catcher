import React, { Component } from 'react'
import reactDom from 'react-dom'

import Bug from './bug.js'

class BugChecklist extends Component{
    constructor(props) {
        super(props)
        console.log("bugs BugChecklist got from App", this.props.bugs)
      }

    submitSolution(event) {
        var input = this.refs.solutionInput
        var value = input.value
        input.value = ''

        this.props.addSolution(value)
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
                              <input id="solution" ref="solution" type="text" placeholder="Solution?"></input>
                              <button id="solutionButton" type="submit" onClick={this.submitSolution.bind(this)}>Submit solution</button>
                          </div>
                      )
                    })}
                </ul>
            </div>
        )
    }
}

export default BugChecklist