
import React, {Component} from 'react'; 
import {connect} from 'react-redux';  
import {get_pics} from '../ducks/reducer';
import axios from 'axios';

class Preview extends Component  {

    saveThenPost(){
    // load up info to save to db
        const SaveMe = {
            article:this.props.reducer2.article,
            text1:(this.props.reducer2.text1),
            text2:(this.props.reducer2.text2),
            text3:(this.props.reducer2.text3),
            pic1:this.props.reducer2.pic1,
            pic2:this.props.reducer2.pic2,
            pic3:this.props.reducer2.pic3,
            fblink:this.props.reducer2.fblink,
            id:this.props.reducer2.id
        };

        // save the above data to the database
        axios.put('/api/puts',SaveMe)
        .then( response => { 
    // post to Twitter
console.log("Pretending to post to Twitter ",response.data)
        }) 
        .catch(function (error) {
            console.log("Error: DisplayTweets.js CreatePost: ",error);
        });



    }

  render(){

    return (
      <section className="preview-section">
            <h1>Preview &amp; Post</h1><br />
            <div className="row-of-divs">

                <div className="help-text">
                    <h3>Directions</h3>If you like the tweet previews, go ahead and his "Post". Otherwise, scroll back up and tweak them until you do like them.
                </div>

                <div className="twitter-buttons">
                    <img src={this.props.reducer2.pic1} alt="pic1" width="200"/><br />
                    "This is the greatest tweet ever to be tweeted. "
                </div>

                <div className="twitter-buttons">
                <img src={this.props.reducer2.pic2} alt="pic2" width="200"/><br />
                "Here's our test tweet. This is an amazing tweet, filled with passion and enthusiasm."<br />
                    <button onClick={() => this.saveThenPost()}>Post to Twitter</button>
                </div>

                <div className="twitter-buttons">
                <img src={this.props.reducer2.pic3} alt="pic3" width="200"/><br />
                    "This is another amazing tweet. You just can't get tweets like this these days."
                </div>
                <div className="fb-buttons">(spacer)</div>
            </div>
      </section>
    )
}}
function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {get_pics})(Preview)