
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
                  <h1>Welcome to {this.props.name}</h1>
                  <div className="spinner spinner-1"></div>
                  <div className="spinner spinner-2"></div>
                  <div className="spinner spinner-3"></div>
                  <div className="spinner spinner-4"></div>
                  <div className="spinner spinner-5"><span></span><span></span><span></span></div>
                  <h2>{this.props.saying}</h2>
                </div>
            </div>
        )
    }
}

export default Title
