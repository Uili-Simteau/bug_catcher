
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

    render () {
        return (
            <div
            onClick={this.toggleClickedState.bind(this)}
            style={ this.state.clicked ? {'fontSize': '20pt'} : {'color': 'black', 'fontSize': '30px'} }>
                <h1>Welcome to {this.props.name}</h1>
                <h2>{this.props.saying}</h2>
            </div>
        )
    }
}

export default Title
