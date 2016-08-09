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
                <form id="checklistUl">
                    { bugs.map( (singleBug, i) => {
                        return (
                            <div className="checklist" key={i}>
                                    <label htmlFor="bugCount">Frequency: </label><input id="bugCount" type="number" rows="1" cols="1"/>
                                    <Bug className="singleBug" bug={singleBug} index={ i } />
                                    <label htmlFor="solutionInput">Solution: </label>
                                    <textarea rows="4" cols="50" placeholder="Solution?">
                                    </textarea>
                                    <hr />
                            </div>
                        )
                    })}
                </form>
            </div>
        )
    }
}

export default BugChecklist
