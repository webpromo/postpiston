
import React, { Component } from 'react';
import axios from 'axios';

export default class Oldposts extends Component {
  constructor() {
    super();

    this.state = {
      postinfo: {}
    };
  }

  componentDidMount() {
    return axios.get(`http://localhost:3005/api/posts/`).then( results => {
      this.setState({
        postinfo: results.data
      });
      console.log("Results: "+results.data)
    });
  }
    
  render() {
    for (let i=0; i<2;i++){
            // console.log("Post: "+this.state.postinfo[i].id)
    }
    return (
  
      <div className='one-post' key={this.state.postinfo.id}>
        <button>Use</button> | {this.state.postinfo.article} <img src={this.state.postinfo.img1} alt="Tweet 1" />
        <img src={this.state.postinfo.img1} alt="Tweet 2" />  <img src={this.state.postinfo.img1} alt="Tweet 3" />
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
