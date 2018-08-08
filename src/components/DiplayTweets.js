
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
        this.setState({
          text1: change 
        })
        console.log("Updated text1 localstate to: ",this.state.text1)
      }
      updateText2(change) {
        this.setState({
          text2: change
        })
        console.log("Updated text2 in localstate to: ",this.state.text2)
      }
      updateText3(change) {
        this.setState({
          text3: change
        })
        console.log("Updated text3 in localstate to: ",this.state.text3)
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
            authid:this.props.users.user.authid
        };

        axios.post('/api/posts',SaveMe) // work?
        .then( response => { 
            // console.log("SaveText Axios RESPONSE = ",response.data[0])
            this.props.article_info(response.data[0])
            // this.tweetMaker1(this.props.reducer2.article) // delete?
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
  export default connect(mapStateToProps, {article_info, save_texts})(DisplayTweets)