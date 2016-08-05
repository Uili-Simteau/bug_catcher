import React, { Component } from 'react'
import reactDom from 'react-dom'

import Bug from './bug.js'
import Solution from './solution.js'

class BugChecklist extends Component{
    constructor(props) {
        super(props)
        console.log("solution got from App", this.props.solutionInput)
      }

    submitSolution(event) {
        var input = this.refs.solutionInput
        var value = input.value
        input.value = ''
        this.props.addSolution(value)
    }

    render () {
        const bugs = this.props.bugs
        const solutions = this.props.solutions
        return (
            <div>
                <ul>
                    { bugs.map( (singleBug, i) => {
                        return (
                            <div>
                                <Bug class="singleBug" bug={singleBug} index={ i } />
                                {/* <Solution class="singleBug" solution={singleSolution} index={ i } /> */}
                                <input id="solutionInput" ref="solutionInput" type="text" placeholder="No Solution?"></input>
                                <button id="solutionButton" type="submit" onClick={this.submitSolution.bind(this)}>Submit Solution</button>
                            </div>
                        )
                    })}

                </ul>
            </div>
        )
    }
}

export default BugChecklist
