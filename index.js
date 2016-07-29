
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
            bugs: ["thing", "other thing"]
        }
    },

    addBug (bug) {
        console.log("this is the bug", bug)
        console.log("here's what I think this is:", this)

        const caughtBugs = this.state.bugs

        console.log("here's the new bugs state", [...caughtBugs, bug])

        this.setState({
            bugs: [...caughtBugs, bug]
        })
        console.log('caught bugs!', this.state.bugs)
    },


    render() {
        return (
            <div>
                <Title name={this.props.name} saying={this.props.saying} />
                <BugForm addBug={this.addBug.bind(this)}/>
                <BugChecklist bugs={this.state.bugs}/>
            </div>
        )
    }
}


const appendStuff = document.getElementById('App')

reactDom.render(
    <App name="DevBug Catcher" saying="Catch those DevBugs!" />,
    appendStuff
)
