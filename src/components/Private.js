import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUserData } from './../ducks/users';

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
        <h1>Account Information</h1>
        {user.username ? (
          <div>
            <p>Account Holder: {user.username}</p>
            <p>Account number: {user.id}</p>
            <a href="http://localhost:3005/api/logout">
              <button>Logout</button>
            </a>
          </div>
        ) : (
          <p>Please log in.</p>
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
