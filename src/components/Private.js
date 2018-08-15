import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';  
import { updateUserData } from './../ducks/users';  
import { Link } from 'react-router-dom';
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
      <div>
        {/* {!user.username ? (
            <p>Please <a href="http://localhost:3000/">log in</a>.</p>
        ) : ( */}
            <div>

              {/* <h3>Welcome {user.username}!</h3>  TURN BACK ON WITH AUTH0 */}
              {/* <p>Account number: {user.id}</p> */}
            <div className="navbuttons">
                  <a href="http://localhost:3005/api/logout">
                  <button>Logout</button>
                  </a>
                <Link to='/twitter-marketing/archive'> <button> Archive </button></Link>
              </div>

            <Facebook2 />
            <DiplayTweets />
            <PickAPic />
            <Preview />

          </div>
        )
         {/* }  this one */}
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
  { updateUserData }  // 
)(Private);
