
import reactDom from 'react-dom'
import React, { Component } from 'react'

import Title from './components/title.js'
// import Header from './components/header.js'
import Footer from './components/footer.js'
import BugForm from './components/bugForm.js'
import BugChecklist from './components/bugChecklist.js'
import BugLog from './components/bugLog.js'
import Bug from './components/bug.js'
import Solution from './components/solution.js'
import Advice from './components/advice.js'


class App extends Component {
    constructor(props) {
        super(props)
        this.addBug = this.addBug.bind(this)
        this.addSolution = this.addSolution.bind(this)
        this.state = {
            bugs: ["I am a bug"],
            solutions: []
        }
    }

    addBug (bug) {
        console.log("this is the bug", bug)
        console.log("here's what I think this is:", this)

        const caughtBugs = this.state.bugs

        console.log("here's the new bugs state", [...caughtBugs, bug])

        this.setState({
            bugs: [...caughtBugs, bug]
        })
        console.log('caught bugs!', this.state.bugs)
    }

    addSolution (solution) {
        console.log("this is the solution", solution)
        console.log("here's what I think this is:", this)

        const caughtSolutions = this.state.solutions

        console.log("here's the new bugs state", [...caughtSolutions, solution])

        this.setState({
            solutions: [...caughtSolutions, solution]
        })
        console.log('caught bugs!', this.state.solution)
    }

    searchBug(event) {
        // this is not figured out yet. submit search terms for searching the bugCHecklist
        var input = this.refs.searchInput
        var value = input.value
        input.value = ''
        this.props.addBug(value)
        // <input type='text' ref='searchInput' name='search' placeholder="Search for bugs.."></input>
        // <button id='serachButton' type='submit' onClick={this.searchBug.bind(this)}>Search Bug</button>
    }

    render() {
        return (
            <div>
                <Title name={this.props.name} saying={this.props.saying} />
                <BugForm addBug={this.addBug.bind(this)} />
                <div id="bugLog">
                    <h1>Bug Log</h1>
                    <BugChecklist bugs={this.state.bugs} solutions={this.state.solutions}/>
                </div>
                <Advice advice={this.props.advice} />
                <div className="spinnerDiv">
                    <div className="spinner spinner-3"></div>
                </div>
                <Footer />
            </div>
        )
    }
}


const appendStuff = document.getElementById('App')

reactDom.render(
    <App name="DevBug Catcher" saying="Catch those Bugs!" />,
    appendStuff
)
