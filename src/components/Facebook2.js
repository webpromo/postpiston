

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update_Article,update_URL} from './../ducks/reducer';
import axios from 'axios';

class Facebook2 extends Component {

createPost(){

    axios.post('/api/posts',{
        article:this.props.article,
        pic1:"",
        pic2:"",
        pic3:"",
        user:this.props.authid})
        .then( response => {
        this.setState({ products: response.data });
      })
}   

    render() {
    return (
       <section className="fb-section">
            <h1> Paste your Press Release (or Article)</h1>
            <div className="row-of-divs">
                <div className="help-text"><h3>Directions</h3>Just post the text of your article here. Then paste the URL to where you want visitors to go to read more.  Then click "Save".</div>
                <textarea cols="120" rows="30" onChange={(e) => this.props.update_Article(e.target.value)} defaultValue={this.props.article}/>
                <div className="fb-buttons">
                    <input placeholder="Paste target URL here"></input>
                    <button onClick={() => this.createPost()}>Save</button>
                </div>
            </div>
            {console.log("props = ",this.props)}
        </section>
    )
    }
}

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {update_Article,update_URL})(Facebook2)
