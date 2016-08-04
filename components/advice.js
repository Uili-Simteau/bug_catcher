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
                <h1>Useful terminal commands</h1>
                <p>
                    Create a new file touch newfile.js create a new folder mkdir newfolder ReMove rm MoVe mv CoPy cp LiSt ls
                    You can add a custom sublime shortcut that inserts the text console.log(). I made this because it is the command I use most often. Open Sublime, click Sublime Text from the menu, preferences, key bindings - user. My file looks like this: [{"keys": ["alt+z"], "command": "insert_snippet", "args": {"contents": "console.log()"}},] This means I can press alt-z in sublime, and console.log() appears before my cursor.
                    Move whole lines up or down the page in sublime without copying or pasting anything:
                    'ctrl +cmd + up arrow or down arrow'
                    Copy whole lines of code:
                    'cmd + shft + d'
                    Clean up node_modules folders

                    A few weeks ago I discovered over 6Gb worth of node modules on my computer. These folders build up, and you forget about them. You can git rid of them all one command line action. First navigate to your workspace/ directory, where you keep all your projects. The command: $ find . -name "node_modules" -exec rm -rf "{}" \; will recursively search and delete files and fodlers called 'node_modules'.
                    Save on focus loss

                    I had been using the sublimetext 3 package 'autosave', but saving on every tiny change had been interfering with the handy dropdown thing in sublime. This is way cooler and less annoying:
                    Save "save_on_focus_lost": true to preferences  setting-user
                </p>
                <p>
                    <h2>Debugging</h2>

                    ###strategies when stuff breaks :
                    read the error
                    console.log
                    add a bunch with strings
                    "what did you expect, what did you get, how do you know you got that"
                    put in comments to confirm where you've reached in the code
                    configuration env which helps you debug:
                    e.g. watchify .... --dv
                    read your tooling docs for sweet trick, talk with friends
                    write down your error messages
                    helps you when you see it again
                    fix your indentation
                    google
                    collect keywords
                    iterate
                    "rubber ducking"
                    talking someone through your thinking reveals assumptions
                    timeboxing
                    walk away / give it some time
                    get some fresh eyes on a thing
                    reinstall your node_modules
                    try something / break it some more
                    keep deleting code until something works
                    whittle back till you're solving one problem
                    add things in slowly
                    save points when code is working
                    git checkout . - you can wipe away all changes since the last commit (doesn't include new files)
                    pull from master after every commit
                </p>
            </div>
        )
    }
}

export default Advice
