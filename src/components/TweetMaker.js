
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {article_info,make_tweets} from './../ducks/reducer';

class TweetMaker extends Component {
    render() {
    // console.log("Article ID? ",this.props.reducer2.article_info)
    return (
      <section className="tweet-section">
            <h1>Produce your Twitter Posts</h1><br />
            <div className="row-of-divs">
                <div className="help-text"><h3>Directions</h3> Click "Create" to automatically generate 3 tweets. Experience shows us that simulteously posting three tweets will significantly increase viewer engagement.</div>
                <div className="twitter-buttons">
                    <textarea className="tweet-text" value={this.props.reducer2.article_info.text1}></textarea>
                </div>
                <div className="twitter-buttons">
                    <textarea className="tweet-text" value={this.props.reducer2.article_info.text2}></textarea>        </div>
                <div className="twitter-buttons">
                    <textarea className="tweet-text" value={this.props.reducer2.article_info.text3}></textarea>       
                </div>
                <div className="fb-buttons"><button onClick={(e) => {
                    this.props.make_tweets(this.props.reducer2.article_info.id)}}>Create</button>
                </div>
            </div>
      </section>
    )}
}

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {article_info,make_tweets})(TweetMaker)