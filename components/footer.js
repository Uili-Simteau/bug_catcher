
import React, { Component } from 'react'
import reactDom from 'react-dom'



class Title extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
              <div class="row u-full-width">
                <div id="contact" class="bottomMenu">
                  <div class="twelve columns">
                    <ul>
                      <li class="gitHub">
                        <a href="https://github.com/Uili-Simteau" target="_blank">
                          <img src="images/Github_64.png" alt="" />
                          <i class="fa fa-gitHub fa-lg"></i>
                        </a>
                      </li>
                      <li class="linkedIn">
                        <a href="http://www.linkedin.com/in/uili-fecteau" target="_blank">
                          <img src="images/Linkedin_64.png"/>
                          <i class="fa fa-linkedIn fa-lg"></i>
                        </a>
                      </li>
                      <li class="twitter">
                        <a href="https://twitter.com/Simteau" target="_blank">
                          <img src="images/Twitter_64.png"/>
                          <i class="fa fa-twitter fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <span class="copyright">All Content &copy; 2016</span>
              </div>
            </div>
        )
    }
}

export default Footer