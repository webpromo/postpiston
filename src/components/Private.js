import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUserData } from './../ducks/users';
import { Link } from 'react-router-dom';
import './archive.css'

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
    let { user } = this.props;
    return (
      <div>
        {!user.username ? (
            <p>Please log in.</p>
        ) : (
            <div>

            <h3>Welcome {user.username}!</h3>
            {/* <p>Account number: {user.id}</p> */}
           <div className="navbuttons">
                <a href="http://localhost:3005/api/logout">
                <button>Logout</button>
                </a>
               <Link to='/facebook-to-twitter/archive'> <button> Archive </button></Link>
            </div>

          </div>
        )}
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
)(Private);
