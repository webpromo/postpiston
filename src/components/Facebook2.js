

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update_Article,update_URL} from './../ducks/reducer';
import axios from 'axios';

class Facebook2 extends Component {

createPost(){
    console.log("Article: ",this.props )
    axios.post('/api/posts',{
        article:this.props.reducer2.article,
        pic1:"",
        pic2:"",
        pic3:"",
        authid:this.props.users.user.authid,
        fblink:this.props.reducer2.fblink})
        .then( response => {
       console.log("Response: ",response); //this.setState({ products: response.data }
      })
}   

    render() {
    return (
       <section className="fb-section">
            <h1> Paste your Press Release (or Article)</h1>
            <div className="row-of-divs">
                <div className="help-text"><h3>Directions</h3>Just post the text of your article here. Then paste the URL to where you want visitors to go to read more.  Then click "Save".</div>
                <textarea cols="120" rows="30" onChange={(e) => this.props.update_Article(e.target.value)} defaultValue={this.props.reducer2.article}/>
                <div className="fb-buttons">
                    <input placeholder="Paste target URL here" onChange={(e) => this.props.update_URL(e.target.value)} defaultValue={this.props.reducer2.fblink}></input>
                    <button onClick={() => this.createPost()}>Save</button>
                </div>
            </div>
        </section>
    )
    }
}

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {update_Article,update_URL})(Facebook2)
