import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { updateUserData } from './../ducks/users';
// import { Link } from 'react-router-dom';
import './archive.css'
import Oldposts from './Oldposts';


class Archive extends Component { 
  componentDidMount() {

  }


render() {
    // let { user } = this.props;
    return (

         <div className="wrapper">
            <menu>
                <div className="logo"><a href="http://localhost:3000/$/"><img src={require("../images/power-of-twitter-for-business.png")} alt="Harness the power of Twitter for business!" height="100" /></a></div>
                <div><h1 className="off-white">Best Twitter Marketing Software</h1></div>
                <div className="nav-buttons">
                    <div><a href="http://localhost:3000/#/" title="Harness the Power of Twitter for Business Marketing">Home</a></div>
                    <div><a href="" title="The Best way to use Twitter for marketing and PR">About</a></div>
                    <div><a href="" title="Best Twitter Marketing Software"  onClick={this.login}>Login</a></div>
                    <div><a href="" title="">Contact</a></div>
                </div>
            </menu>
            <h1>Post Archive</h1>

        <Oldposts />
        </div>

    );
}
}

function mapStateToProps(state) {
return {
user: state.user
};
}

export default connect(
mapStateToProps,
{ updateUserData }
)(Archive);
