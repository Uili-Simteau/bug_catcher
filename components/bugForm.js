
import React, { Component } from 'react'
import reactDom from 'react-dom'
import Bug from './bug.js'
import { Button, Col, Form, FormGroup } from 'react-bootstrap'


class BugForm extends Component {
    constructor(props) {
        super(props)

    }

    submitBug(event) {
        // var bugText = document.getElementById("bugInput").value
        var input = this.refs.bugInput
        var value = input.value
        input.value = ''
        this.props.addBug(value)
    }

    render () {
        return (
            <Form horzontal id='bugForm'>
                <FormGroup controleId="formHorizontalBug">
                    <Col ComponentClass={ControlLabel} sm={2}>
                        Your Bug?
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" id='bugInput' ref='bugInput' placeholder="What is your bug?" />
                    </Col>
                </FormGroup>

                <FormGroup controleId="formHorizontalSolution">
                    <Col ComponentClass={ControlLabel} sm={2}>
                        Solution?
                    </Col>
                    <Col sm={10}>
                        <ForControl type="text" placeholder="Solution?" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button id='bugButton' type='submit' onClick={this.submitBug.bind(this)}>
                            Submit Bug
                        </Button>
                    </Col>
                </FormGroup>
                <input id='bugInput' ref='bugInput' type='text' placeholder="What's your bug?"></input>

            </Form>
        )
    }
}

export default BugForm
