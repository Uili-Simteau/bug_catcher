import React, { Component } from 'react'
import reactDom from 'react-dom'

class Text extends Component {

    render() {

        return (
            // <li>{this.props.text}</li>
          <div className="debugging">
            <h1>Debugging</h1>
            <h2>strategies when stuff breaks :</h2>
              <div>
                <h3>Read the error</h3>
                <h3>console.log</h3>
                <p>Add a bunch with strings</p>
                <h3>"what did you expect, what did you get, how do you know you got that"</h3>
                <h3>Put in comments to confirm where you've reached in the code</h3>
                <h3>Configuration env which helps you debug: e.g. watchify .... --dv</h3>
                <h3>Read your tooling docs for sweet trick, talk with friends</h3>
                <h3>Write down your error messages, helps you when you see it again</h3>
                <h3>Fix your indentation</h3>
                <h3>Google</h3>
                <h3>Collect keywords</h3>
                <h3>Iterate</h3>
                <h3>"Rubber ducking"</h3>
                <h3>Talking someone through your thinking reveals assumptions</h3>
                <h3>Timeboxing</h3>
                <h3>Walk away / give it some time</h3>
                <h3>Get some fresh eyes on a thing</h3>
                <h3>Reinstall your node_modules</h3>
                <h3>Try something / break it some more</h3>
                <h3>Keep deleting code until something works</h3>
                <h3>Whittle back till you're solving ONE problem</h3>
                <h3>Add things in slowly</h3>
                <h3>Save points when code is working</h3>
                <h3>Git checkout . - you can wipe away all changes since the last commit (doesn't include new files)</h3>
                <h3>Pull from master after every commit</h3>
              </div>
          </div>
        )
    }
}

export default Text
