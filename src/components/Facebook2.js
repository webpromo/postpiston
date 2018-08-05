

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update_Article,update_URL,article_info} from './../ducks/reducer';
import axios from 'axios';

class Facebook2 extends Component {

createPost(){
    const text1 = 'testing1' // pull first paragraph from article
    const text2 = "testing2" // topic sentences from article
    const text3 = 'testing3' // mix of the above or something cool like that 

    axios.post('/api/posts',{
        article:this.props.reducer2.article,
        text1,
        text2,
        text3,
        authid:this.props.users.user.authid,
        fblink:this.props.reducer2.fblink})
        .then( response => this.props.article_info(response.data[0]))  
}   

    render() {
        // console.log("Props: ",this.props)
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
  export default connect(mapStateToProps, {update_Article,update_URL,article_info})(Facebook2)
