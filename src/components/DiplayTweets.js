
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {article_info,save_texts,sorted_1,sorted_2,sorted_3,save_pics1,get_pics} from '../ducks/reducer';
import axios from 'axios';

import './private.css';
import './displayTweets.css';
import { grabAndProcessALLthoseWords } from '../services/crunch-text-service';
// import { updateUser } from './UpdateSQL';

class DisplayTweets extends Component {
    constructor () {
        super();
        this.state = {
          text1: '',
          text2: '',
          text3: ''
        }
      }
      updateText1(change) {
        this.setState({
          text1: change 
        })
        // console.log("Updated text1 localstate to: ",this.state.text1)
      }
      updateText2(change) {
        this.setState({
          text2: change
        })
        // console.log("Updated text2 in localstate to: ",this.state.text2)
      }
      updateText3(change) {
        this.setState({
          text3: change
        })
        // console.log("Updated text3 in localstate to: ",this.state.text3)
      }

      crunchData(){  // WORKING!  8/9 at 4:10pm

        // sort the words in text1 by length
        const text1Sorted = grabAndProcessALLthoseWords(this.props.reducer2.text1); // works as of 8/9 at 10:22am
        // and save to props
        this.props.sorted_1(text1Sorted); 
    // sort the words in text2 by length
        const text2Sorted = grabAndProcessALLthoseWords(this.props.reducer2.text2);
        // and save to props
        this.props.sorted_2(text2Sorted); 
    // sort the words in text1 by length
        const text3Sorted = grabAndProcessALLthoseWords(this.props.reducer2.text3);
        // and save to props
        this.props.sorted_3(text3Sorted); 
      }

    fetchPics(){
        // figure which keyword to search for
        let keyword = this.props.reducer2.sorted1[0];
        let firstSetOfPics = this.props.get_pics(keyword);
        // update Redux props
        this.props.save_pics1(firstSetOfPics);
      }

    saveTexts(){
        const SaveMe = {
            article:this.props.reducer2.article,
            text1:(this.state.text1 ? this.state.text1 : this.props.reducer2.text1),
            text2:(this.state.text2 ? this.state.text2 : this.props.reducer2.text2),
            text3:(this.state.text3 ? this.state.text3 : this.props.reducer2.text3),
            pic1:this.props.reducer2.pic1,
            pic2:this.props.reducer2.pic2,
            pic3:this.props.reducer2.pic3,
            fblink:this.props.reducer2.fblink,
            id:this.props.reducer2.id
        };

        // save the above data to the database
        axios.put('/api/puts',SaveMe)
        .then( response => { 
            // And save the post to Redux-state
            this.props.article_info(response.data[0]); // works as of 8/9 at 3:48pm
            this.crunchData();
            this.fetchPics(); 
        }) 
        .catch(function (error) {
            console.log("Error: DisplayTweets.js CreatePost: ",error);
        });
    
    }   

    render() {
        // console.log("fetchedPics = ",this.state.photoSet1)
        // console.log("this.props = ",this.props) 
    return (
      <section className="fb-section">
        <div className="banner"><h1 style={{marginTop:'10px', marginLeft:'10px'}}>
            Produce your Twitter Posts</h1>
        </div>
        <br clear='all'/>
            <div className="row-of-divs">
                <div className="help-text"> 
                    <h3>Directions:</h3> Here are three automatically-generated tweets based on your content above. Our years of Social Media Marketing experience show us that simulteously posting three tweets will significantly increase viewer engagement.Feel free to tweak them and "Save" when you like them.</div>
                <div className="twitter-buttons">
                    <div name="text1" className="tweet-textDiv" contentEditable="true"  
                     onInput={e => this.updateText1(e.target.textContent)} 
                     spellCheck="true">{this.props.reducer2.text1}</div>
                </div>
                <div className="twitter-buttons">
                    <div name="text2" className="tweet-textDiv" contentEditable="true"  
                     onInput={e => this.updateText2(e.target.textContent)} 
                     spellCheck="true">{this.props.reducer2.text2}</div>
                 {/* <textarea rows="20" className="tweet-text" default={this.props.reducer2.text2}   // WON'T UPDATE WHEN REDUX STATE DOES
                    onChange={e => this.updateText2(e.target.value)} spellCheck="true" 
                    placeholder='(Post your content above)'></textarea>*/}
                </div> 
                <div className="twitter-buttons">
                    <div name="text3" className="tweet-textDiv" contentEditable="true"  
                        onInput={e => this.updateText3(e.target.textContent)} 
                        spellCheck="true">{this.props.reducer2.text3}</div>   
                    </div>
                <div className="fb-buttons">
                    <button onClick={(e) => {this.saveTexts()}}>Save</button>
                </div>
            </div>
      </section>
    )}
}

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {article_info, save_texts, sorted_1, sorted_2, sorted_3,save_pics1,get_pics})(DisplayTweets)