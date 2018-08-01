import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { updateUserData } from './../ducks/users';
import { Link } from 'react-router-dom';
import './archive.css'


class Private extends Component {
  componentDidMount() {

  }


render() {
    // let { user } = this.props;
    return (

                <div>
<Link to='/facebook-to-twitter'><button>Logo</button></Link>
                <h1>Post Archive</h1>

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
