
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {article_info} from '../ducks/reducer';

class DisplayTweets extends Component {
    constructor () {
        super();
        this.state = {
          text1: '',
          text2: '',
          text3: ''
        }
      }
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      
    render() {
        // console.log("this.props ",this.props)
    return (
      <section className="tweet-section">
            <h1>Produce your Twitter Posts</h1><br />
            <div className="row-of-divs">
                <div className="help-text"><h3>Directions</h3> Here are three automatically generated tweets based on your content above. Our years of Social Media Marketing experience show us that simulteously posting three tweets will significantly increase viewer engagement.Feel free to tweak them and "Save" when you like them.</div>
                <div className="twitter-buttons">
                    <div name="text1" rows="20" className="tweet-text" defaultValue={this.state.text1}
                     onChange={e => this.handleChange(e)}></div>
                </div>
                <div className="twitter-buttons">
                    <textarea name="text2" rows="20" className="tweet-text" defaultValue={this.props.reducer2.text2}onChange={e => this.handleChange(e)}></textarea>        </div>
                <div className="twitter-buttons">
                    <textarea  name="text3" rows="20" className="tweet-text" defaultValue={this.props.reducer2.text3}onChange={e => this.handleChange(e)}></textarea>       
                </div>
                <div className="fb-buttons"><button>Save?</button>
                </div>
            </div>
      </section>
    )}
}

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {article_info})(DisplayTweets)