
import React, { Component } from 'react';
import axios from 'axios';
import Store from './../ducks/store';
import { connect } from 'react-redux';
import { load_set } from './../ducks/reducer';
import './Login.css';
import './archive.css'
import './oldposts.css';
import bkgnd from '../images/power-twitter-business.jpg';
import { Link } from 'react-router-dom';

class Oldposts extends Component {
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

  useThisSet(post){
    this.props.load_set(post);
    console.log("Updated")
  }

  deleteMe(id){
    return axios.delete(`/api/posts/`+id).then( results => {
      console.log("tried to delete post id",id);
    this.setState({
      postinfo: results.data
    });
  });
  }

    
  render() {
     let wholeList = this.state.postinfo.map((post) => {
        return (
        <div className='one-post' key={post.id}>
            <div className="buttonColumn"> 
              <Link to='../twitter-marketing'><button onClick={()=>this.useThisSet(post)}>Use</button></Link><br />
              <button onClick={()=>this.deleteMe(post.id)}>Delete</button>
             </div>
            <div className="postArticle">{post.article}</div>
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
function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(
mapStateToProps,
{load_set }
)(Oldposts);
