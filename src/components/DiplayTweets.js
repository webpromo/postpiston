
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {article_info,save_texts} from '../ducks/reducer';
import axios from 'axios';
import './displayTweets.css';

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
          console.log('########')
        this.setState({
          text1: change 
        })
        console.log("Updated text1 in state to: ",this.state.text1)
      }
      updateText2(change) {
        this.setState({
          text2: change
        })
      }
      updateText3(change) {
        this.setState({
          text3: change
        })
      }

    saveTexts(){
        const SaveMe = {
            article:this.props.reducer2.article,
            text1:this.state.text1,
            text2:this.state.text2,
            text3:this.state.text3,
            pic1:this.props.reducer2.pic1,
            pic2:this.props.reducer2.pic2,
            pic3:this.props.reducer2.pic3,
            fblink:this.props.reducer2.fblink,
            authid:this.props.users.user.authid
        };

        axios.post('/api/posts',SaveMe) // work?
        .then( response => { 
            // console.log("SaveText Axios RESPONSE = ",response.data[0])
            this.props.article_info(response.data[0])
            this.tweetMaker1(this.props.reducer2.article)
        })  
        .catch(function (error) {
            console.log("Error: FB2 CreatePost: ",error);
        });
        // console.log("Reducer2 = ",this.props.reducer2)
    }   

    render() {
        // console.log("this.props ",this.props)

    return (
      <section className="tweet-section">
            <h1>Produce your Twitter Posts</h1><br />
            <div className="row-of-divs">
                <div className="help-text">
                    <h3>Directions</h3> Here are three automatically generated tweets based on your content above. Our years of Social Media Marketing experience show us that simulteously posting three tweets will significantly increase viewer engagement.Feel free to tweak them and "Save" when you like them.</div>
                <div className="twitter-buttons">
                    <div name="text1" className="tweet-textDiv" contentEditable="true"  
                     onInput={e => this.updateText1(e.target.textContent)} spellCheck="true" 
                     placeholder='(Post your content above)'>{this.props.reducer2.text1}</div>
                    {/* <textarea rows="20" className="tweet-text" value={this.props.reducer2.text1} 
                    onChange={e => this.updateText1(e.target.value)} spellcheck="true" 
                     placeholder='(Post your content above)'>{this.props.reducer2.text1}></textarea>       */}
                </div>
                <div className="twitter-buttons">
                    <textarea rows="20" className="tweet-text" value={this.props.reducer2.text2}   // textarea w/ Value
                    onChange={e => this.updateText2(e.target.value)} spellCheck="true" 
                    placeholder='(Post your content above)'></textarea>
                </div>
                <div className="twitter-buttons">
                    <textarea rows="20" className="tweet-text" defaultValue={this.props.reducer2.text3}    // textarea w/ defaultValue
                    onChange={e => this.updateText3(e.target.value)} spellCheck="true"
                    placeholder='(Post your content above)'></textarea>       
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
  export default connect(mapStateToProps, {article_info, save_texts})(DisplayTweets)