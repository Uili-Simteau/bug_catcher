import React, { Component } from 'react'
import reactDom from 'react-dom'

class Text extends Component {

    render() {

        return (
            // <li>{this.props.text}</li>
          <div className="debugging">
            <h1>Debugging</h1>
            <h2>Strategies for when stuff breaks :</h2>
              <div>
                <h3>Read the error</h3>
                <p>Take a breath, read the error slowly.</p>
                <p>Does it point to where the error may lie?</p>
                <p>Google it.</p>
                <hr/>
                <h3>console.log('thing', thing)</h3>
                <p>Add a bunch of them where you think the programme is breaking down.</p>
                <p>Have a descriptive string before the called function.</p>
                <hr/>
                <h3>"what did you expect, what did you get, how do you know you got that"</h3>
                <p></p>
                <hr/>
                <h3>Put in comments, or allerts, to confirm where you've reached in the code</h3>
                <p>This helps identify where the code is breaking down.</p>
                <hr/>
                <h3>Configuration env which helps you debug: e.g. watchify .... --dv</h3>
                <p></p>
                <hr/>
                <h3>Write down your error messages, helps you when you see it again</h3>
                <p></p>
                <hr/>
                <h3>Fix your indentation</h3>
                <p>This makes your code clearer and easier to read.</p>
                <p>Nice rule of thumb: 'Any more than three levels of indentation and you're screwed' -Bevan Arpes, 2016.</p>
                <hr/>
                <h3>Google it</h3>
                <p></p>
                <hr/>
                <h3>Collect keywords for Google searches</h3>
                <p></p>
                <hr/>
                <h3>Iterate</h3>
                <p></p>
                <hr/>
                <h3>"Rubber ducking"</h3>
                <p>Talking someone through your thinking reveals assumptions</p>
                <hr/>
                <h3>Timeboxing</h3>
                <p></p>
                <hr/>
                <h3>Walk away / give it some time</h3>
                <p></p>
                <hr/>
                <h3>Get some fresh eyes on the problem</h3>
                <p></p>
                <hr/>
                <h3>Reinstall your node_modules</h3>
                <p></p>
                <hr/>
                <h3>Try something / break it some more</h3>
                <p></p>
                <hr/>
                <h3>Keep deleting code until something works</h3>
                <p></p>
                <hr/>
                <h3>Whittle back till you're solving ONE problem</h3>
                <p></p>
                <hr/>
                <h3>Add things in slowly</h3>
                <p></p>
                <hr/>
                <h3>Save points when code is working</h3>
                <p></p>
                <hr/>
                <h3>Git checkout . </h3>
                <p>You can wipe away all changes since the last commit</p>
                <p>(doesn't include new files)</p>
                <hr/>
                <h3>Pull from master after every commit</h3>
                <p></p>
                <hr/>
              </div>
          </div>
        )
    }
}

export default Text
