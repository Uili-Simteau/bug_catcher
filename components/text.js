import React, { Component } from 'react'
import reactDom from 'react-dom'

class Text extends Component {

    render() {

        return (
            <li>{this.props.text}</li>
        )
    }
}

export default Text
