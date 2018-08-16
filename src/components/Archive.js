import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './archive.css'
// import Oldposts from './Oldposts';
import axios from 'axios';
// import Store from './../ducks/store';
import { connect } from 'react-redux';
import { updateUserData } from './../ducks/users';
import { load_set } from './../ducks/reducer';
import bkgnd from '../images/power-twitter-business.jpg';
import { Link } from 'react-router-dom';

class Archive extends Component {
    constructor() {
      super();
  
      this.state = {
        postinfo: []
      };
    }

  componentDidMount() {
    return axios.get(`/api/posts`).then( results => {
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
    this.setState({
      postinfo: results.data
    });
  });
  }

getEntries(){
    console.log("GetEntries runs")
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

render() {
    
    // let { user } = this.props;
    return (

         <div className="wrapper">
              <menu>
                <div className="logo"><a href="/#"><img src={require("../images/power-of-twitter-for-business.png")} alt="Harness the power of Twitter for business!" height="100" /></a></div>
                <div><h1 className="off-white">Best Twitter Marketing Software</h1></div>
                <div className="nav-buttons">
                    <div className="hvr-float-shadow"><a href="#/twitter-marketing" title="Harness the Power of Twitter for Business Marketing">Main</a></div>
 
                    <div className="hvr-float-shadow"><a href="/api/logout" title="">Logout</a></div>
                </div>
            </menu>
            <h1 style={{marginTop:'10px', marginLeft:'10px'}}>Post Archive</h1>

        {this.getEntries()}
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
{ updateUserData,load_set }
)(Archive);
