
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
            <div>
                <div className="wrap">
                  <h1>{this.props.name}</h1>
                  <div className="spinnerDiv">
                      <div className="spinner spinner-1"></div>
                  </div>
                  <h2>{this.props.saying}</h2>
                </div>
            </div>
        )
    }
}

export default Title
