import React, { Component } from 'react'
import reactDom from 'react-dom'

import Text from './text.js'

class Advice extends Component{
    constructor(props) {
        super(props)
        console.log("text for Advice", this.props.text)
    }

    render () {
        return (
            <div>
                <div className="spinnerDiv">
                    <div className="spinner spinner-4"></div>
                </div>
                <Text className="adviceText" />
            </div>
        )
    }
}

export default Advice
