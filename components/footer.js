
import React, { Component } from 'react'
import reactDom from 'react-dom'



class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
              <div id="footer">
                <div id="contact" className="bottomMenu">
                  <div className="twelve columns">
                    <ul>
                      <li className="gitHub">
                        <a href="https://github.com/Uili-Simteau" target="_blank">
                          <img src="images/Github_64.png" alt="" />
                          <i className="fa fa-gitHub fa-lg"></i>
                        </a>
                      </li>
                      <li className="linkedIn">
                        <a href="http://www.linkedin.com/in/uili-fecteau" target="_blank">
                          <img src="images/Linkedin_64.png"/>
                          <i className="fa fa-linkedIn fa-lg"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="https://twitter.com/Simteau" target="_blank">
                          <img src="images/Twitter_64.png"/>
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="copyright">All Content &copy; 2016</span>
              </div>
            </div>
        )
    }
}

export default Footer