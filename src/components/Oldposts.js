
import React, { Component } from 'react';
import axios from 'axios';
import Store from './../ducks/store'

export default class Oldposts extends Component {
  constructor() {
    super();

    this.state = {
      postinfo: []
    };
  }

  componentDidMount() {
    return axios.get(`/api/posts`).then( results => {
        console.log("state = ",Store.getState())
      this.setState({
        postinfo: results.data
      });
    });
  }

    
  render() {
     let wholeList = this.state.postinfo.map((post,i) => {
        return (
        <div className='one-post' key={i}>
            <button>Use</button> | {post.article} <img src={post.pic1} alt="Tweet 1" width="60" />
            <img src={post.pic2} alt="Tweet 2"  width="100"/>  <img src={post.pic3} alt="Tweet 3"  width="100" />
      </div>
        )
     })

    return (
        <div>
         {wholeList} 
        </div>
    )
  }
}
// function mapStateToProps(state) {
// return {
// user: state.user
// };
// }

// export default connect(
// mapStateToProps,
// { updateUserData }
// )(Oldposts);
