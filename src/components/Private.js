import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';  
import { updateUserData } from './../ducks/users';  
// import { Link } from 'react-router-dom';
import './archive.css'
import './private.css'
import Facebook2 from './Facebook2'
import DiplayTweets from './DiplayTweets'
import PickAPic from './Pick-a-pic'
import Preview from './Preview'

class Private extends Component { 
  componentDidMount() {
    axios.get('/api/user-data').then(res => {
      // invoke action creator to update redux state
      this.props.updateUserData(res.data);
    });
  }

  logout() {
    axios.get('/api/logout').then(res => {
      this.props.history.push('/');
    });
  }

  render() {
    // let { user } = this.props;
    return (
      <span>
        {/* {!user.username ? (
            <p>Please <a href="http://localhost:3000/">log in</a>.</p>
        ) : ( */}
            <div className="main">

              {/* <h3>Welcome {user.username}!</h3>  TURN BACK ON WITH AUTH0 */}
              {/* <p>Account number: {user.id}</p> */}
              <menu>
                <div className="logo"><a href="http://localhost:3000/#"><img src={require("../images/power-of-twitter-for-business.png")} alt="Harness the power of Twitter for business!" height="100" /></a></div>
                <div><h1 className="off-white">Best Twitter Marketing Software</h1></div>
                <div className="nav-buttons">
                    <div className="hvr-float-shadow"><a href="http://localhost:3000/#/" title="Harness the Power of Twitter for Business Marketing">Home</a></div>
                    <div className="hvr-float-shadow"><a href="#/twitter-marketing/archive" title="">Archive</a></div>
                    <div className="hvr-float-shadow"><a href="/#contact" title="http://localhost:3005/api/logout">Logout</a></div>
                </div>
            </menu>

            <section><Facebook2 /></section><DiplayTweets /> <br /> <PickAPic /> <br /> <Preview />

          </div>
        
         {/* }  this one */}
      </span>
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
  { updateUserData }  // 
)(Private);
