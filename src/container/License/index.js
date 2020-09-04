import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
class License extends Component  {
  componentWillMount() {
    window.location.href="http://218.249.43.69/LicenseManager.htm"
  }
  componentDidMount(){

  }
  render(){
    return(
      <div className='License'></div>
    )
  }
};
export default License;