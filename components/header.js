import React, { Component } from 'react'
import reactDom from 'react-dom'


class Header extends Component {

    render() {
      return(
        <div className="wrap">
          <h1>SPINNERS</h1>
          <div className="spinner spinner-1"></div>
          <div className="spinner spinner-2"></div>
          <div className="spinner spinner-3"></div>
          <div className="spinner spinner-4"></div>
          <div className="spinner spinner-5"><span></span><span></span><span></span></div>
        </div>)
    }
}

export default Header