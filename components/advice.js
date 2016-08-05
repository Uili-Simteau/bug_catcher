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
                <Text class="adviceText" />
            </div>
        )
    }
}

export default Advice
