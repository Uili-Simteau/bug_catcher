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
                <ul id="checklistUl">
                    { bugs.map( (singleBug, i) => {
                        return (
                            <div className="checklist">
                            <label for="bugCount">How often bug cought : </label><input id="bugCount" type="number" value="0"/>
                                <Bug className="singleBug" bug={singleBug} index={ i } />
                                {/* <Solution className="singleBug" solution={singleSolution} index={ i } /> */}
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
