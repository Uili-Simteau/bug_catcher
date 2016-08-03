import React, { Component } from 'react'
import reactDom from 'react-dom'

import Bug from './bug.js'

class BugChecklist extends Component{
    constructor(props) {
        super(props)
        console.log("bugs BugChecklist got from App", this.props.bugs)
      }

    submitSolution(event) {
        var input = this.refs.solutionInput
        var value = input.value
        input.value = ''

        this.props.addSolution(value)
    }

    render () {
        const bugs = this.props.bugs
        return (
            <div>
                <ul>
                    { bugs.map( (singleBug, i) => {
                        return (
                            <div>
                            <!-- LikeBtn.com BEGIN -->
                                <span class="likebtn-wrapper" data-theme="google" data-i18n_like="caught" data-identifier="item_1" data-dislike_enabled="false" data-icon_dislike_show="false" data-voting_frequency="2" data-counter_clickable="true" data-counter_zero_show="true" data-popup_hide_on_outside_click="false">
                                </span>
                                <script>(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");</script>
                            <!-- LikeBtn.com END -->
                                <input id="solution" ref="solution" type="text" placeholder="Solution?"></input>
                                <button id="solutionButton" type="submit" onClick={this.submitSolution.bind(this)}>Submit solution</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default BugChecklist
