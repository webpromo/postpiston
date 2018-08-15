
import React, { Component } from 'react';
import axios from 'axios';
import Store from './../ducks/store'
import './Login.css'
import './oldposts.css'
import bkgnd from '../images/power-twitter-business.jpg'

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

  useThisSet(){

  }

    
  render() {
     let wholeList = this.state.postinfo.map((post,i) => {
        return (
        <div className='one-post' key={i}>
            <div className="buttonColumn"> 
              <button onClick={()=>this.useThisSet(i)}>Use</button></div>
            <div className="postArticle">{post.article} </div>
            <div className="pics">
              <img src={post.pic1} alt="Tweet 1" width="100" />
              <img src={post.pic2} alt="Tweet 2"  width="100"/>  
              <img src={post.pic3} alt="Tweet 3"  width="100" />
            </div>
      </div>
        )
     })

    return (
        <div style={{backgroundImage:`url(${bkgnd})`}}>
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
