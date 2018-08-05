
import React, {Component} from 'react';
import {connect} from 'react-redux';

class TweetMaker extends Component {
    render() {
    console.log("Article ID? ",this.props.reducer2.article_info)
    return (
      <section className="tweet-section">
            <h1>Produce your Twitter Posts</h1><br />
            <div className="row-of-divs">
                <div className="help-text"><h3>Directions</h3> Just past your existing or Future Facebook post's text here. Click the Post button over on the right, or, if it's already posted to FB, just hit "Save"</div>
                <div className="twitter-buttons">
                    {/* <button>1st &para;</button><br /> */}
                    <textarea rows="30">{this.props.reducer2.article_info.text1}</textarea>
                </div>
                <div className="twitter-buttons">
                    {/* <button>1st Sentences</button><br /> */}
                    <textarea rows="30">{this.props.reducer2.article_info.text2}</textarea>
                </div>
                <div className="twitter-buttons">
                    {/* <button>Mixed</button><br /> */}
                    <textarea rows="30">{this.props.reducer2.article_info.text3}</textarea>
                </div>
                <div className="fb-buttons">(spacer)</div>
            </div>
      </section>
    )}
}

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {})(TweetMaker)