import React, { Component } from 'react'
import reactDom from 'react-dom'

class Text extends Component {

    render() {

        return (
            // <li>{this.props.text}</li>
            <div>
              <p>
                <h1>Debugging</h1>
                <h2>strategies when stuff breaks :</h2>
                <ul style={{text-dectoration: none}}>
                  <li>read the error</li>
                  <li>console.log</li>
                  <li>add a bunch with strings</li>
                  <li>"what did you expect, what did you get, how do you know you got that"</li>
                  <li>put in comments to confirm where you've reached in the code</li>
                  <li>configuration env which helps you debug: e.g. watchify .... --dv</li>
                  <li>read your tooling docs for sweet trick, talk with friends</li>
                  <li>write down your error messages</li>
                  <li>helps you when you see it again</li>
                  <li>fix your indentation</li>
                  <li>google</li>
                  <li>collect keywords</li>
                  <li>iterate</li>
                  <li>"rubber ducking"</li>
                  <li>talking someone through your thinking reveals assumptions</li>
                  <li>timeboxing</li>
                  <li>walk away / give it some time</li>
                  <li>get some fresh eyes on a thing</li>
                  <li>reinstall your node_modules</li>
                  <li>try something / break it some more</li>
                  <li>keep deleting code until something works</li>
                  <li>whittle back till you're solving one problem</li>
                  <li>add things in slowly</li>
                  <li>save points when code is working</li>
                  <li>git checkout . - you can wipe away all changes since the last commit (doesn't include new files)</li>
                  <li>pull from master after every commit</li>
                </ul>
              </p>
            </div>
        )
    }
}

export default Text
