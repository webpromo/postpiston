

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update_Article,update_URL,article_info,save_text1} from './../ducks/reducer';
import axios from 'axios';
var _ = require('lodash');

class Facebook2 extends Component {

    createPost(){
        const PostMe = {
            article:this.props.reducer2.article,
            text1:"",
            text2:"",
            text3:"",
            authid:this.props.users.user.authid,
            fblink:this.props.reducer2.fblink
        };

        axios.post('/api/posts',PostMe) // works!  Saves to database
        .then( response => { 
            console.log("RESPONSE = ",response.data[0])
            this.props.article_info(response.data[0])
            this.tweetMaker1(this.props.reducer2.article)
        })  
        .catch(function (error) {
            console.log("Error: FB2 CreatePost: ",error);
        });
        // console.log("Reducer2 = ",this.props.reducer2)
    }   

    tweetMaker1(article){
        let firstParagraph = "";
        let sentencesArr = article.match(/\(?[A-Z][^.]+[.!?]\)?(\s+|$)/g);
        // loop through article's sentences one by one, 
        let testResults = [];
        for (let i=0; i<sentencesArr.length;i++){
            testResults[i]= /\r|\n/.exec(sentencesArr[i]);
      // if next sentence does not contain RETURN
            if (!testResults[i]) {
            // then append to firstParagraph.
                firstParagraph+=sentencesArr[i];
            // if RETURN then save and quit looking.
            } else {break;}
        }
        this.props.save_text1(firstParagraph);
        console.log("First para =",firstParagraph)
        console.log("Save_text -> Props =",this.props)
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

function mapStateToProps(state) {
    return state;
  }
  export default connect(mapStateToProps, {update_Article,update_URL,article_info,save_text1})(Facebook2)
