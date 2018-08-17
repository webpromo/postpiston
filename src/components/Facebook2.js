

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update_Article,update_URL,article_info,save_text1,save_text2,save_text3,load_set} from './../ducks/reducer';
import axios from 'axios';
import './private.css';
// var _ = require('lodash');

class Facebook2 extends Component {

    componentDidMount() {

      }

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
        let sentencesArr = article.match(/\(?[A-Z][^.]+[.!?]\)?(\s+|$)/g);
    
    // FOR TEXT1

        let firstParagraph = "";
        let testParagraph = "";
        // loop through article's sentences one by one, 
        for (let i = 0; i<sentencesArr.length; i++) {

            // Prep to see if adding the next sentence would push over the limit
            let testParagraph = testParagraph+=sentencesArr[i]
            let testLength =testParagraph.length
            
            // if next sentence does not contain RETURN (and is not too long)
            if (testLength < 120) {
                // then append to firstParagraph.
                firstParagraph+=sentencesArr[i];
            } 
            // if adding the next sentence would exceed limit, quit looking.
            if (testLength > 119) break;

            let pauseHere = 1;
        }
        this.props.save_text1(firstParagraph);

    // FOR TEXT 2
        let firstSentences = "";
        let testResults2 = [];
        let count2 = 0;
    // loop through the the sentences 
    for (let i = 0; i<sentencesArr.length; i++) {
        // if the tweet is already long enough, exit
        if (firstSentences.length > 110) break;
        // if it's the last sentence of a paragraph...
        testResults2[i]= /\r|\n/.exec(sentencesArr[i]);
        if (testResults2[i]) {
            // then append the next sentence to firstSentences.
            firstSentences+=sentencesArr[i+1];
            count2++;
        } 
        if (count2>1) {break}
    }
    // chop it off if it's too long
    if (firstSentences.length > 120) {
        var trimmed = firstSentences.replace(/^(.{118}[^\s]*).*/, "$1"); 
        firstSentences = trimmed+="...";
    }
        this.props.save_text2(firstSentences);



    // FOR TEXT 3
        let lastSentences = "";
        let testResults3 = [];
        let count3 = 0;
    // loop through the the sentences 
    for (let i = 0; i<sentencesArr.length; i++) {
        // if it's the last sentence of a paragraph...
        testResults3[i]= /\r|\n/.exec(sentencesArr[i]);
        if (testResults3[i]) {
            // then append that sentence to lastSentences.
            lastSentences+=sentencesArr[i];
            count3++;
        } 
        if (count3 > 0) {break};
    }
    // Use the very last sentence as the first of the tweet
        let newLast = sentencesArr[sentencesArr.length-1]+=lastSentences;

    // chop it off if it's too long
        if (newLast.length > 120) {
            var trimmed = newLast.replace(/^(.{119}[^\s]*).*/, "$1"); 
            newLast = trimmed+="...";
        }
    // update Redux state
        this.props.save_text3(newLast);
    }

    render() {
        // console.log("Props: ",this.props)
    return (
       <section className="fb-section">

           <div className="banner"><h1 style={{marginTop:'10px', marginLeft:'20px'}}>Paste your Press Release or Article</h1></div><br clear='all'/>
            <div className="row-of-divs">
                <div className="help-text">
                    <h3><strong>Directions:</strong></h3>
                    <ol><li>Just paste the text of your article in the field to the right. </li>
                    <li>Then paste the URL to where you want visitors to go to read more.</li>
                    <li>Then click "Save".</li></ol>
                    </div>
                <div><textarea cols="60" rows="15" 
                    onChange={(e) => this.props.update_Article(e.target.value)} 
                       defaultValue={this.props.reducer2.article}/>
                </div>
                <div className="fb-buttons">
                    <input placeholder="Paste target URL here" onChange={(e) => this.props.update_URL(e.target.value)} 
                       defaultValue={this.props.reducer2.fblink}></input>
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
  export default connect(mapStateToProps, {update_Article,update_URL,article_info,save_text1,save_text2,save_text3,load_set})(Facebook2)
