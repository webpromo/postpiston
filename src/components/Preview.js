
import React, {Component} from 'react'; 
import {connect} from 'react-redux';  
import {get_pics} from '../ducks/reducer';
import axios from 'axios';
import './private.css';
import swal from 'sweetalert'

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
         
        // save SaveMe to the database
        axios.put('/api/puts',SaveMe).then( response => { 
            // do something?
        }) 
        .catch(function (error) {
            console.log("Error: DisplayTweets.js CreatePost: ",error);
        });
        swal("Your three tweets have been sent.\nIF, and only if, TweetyMail.com is running\nyour tweets will show on @Top10Traffic.");
        this.postEm(SaveMe)

    }

   async postEm (SaveMe){

    // prep to send tweets
                
    const emailAddress = "tweet@tweetymail.com" //trigger@applet.ifttt.com"; 

    let tweetSubject=SaveMe.pic1;
    let tweetText=SaveMe.text1+" - "+SaveMe.fblink;
    let attachment = SaveMe.pic1;

    const tweetSubject2=SaveMe.pic2;
    const tweetText2=SaveMe.text2+" - "+SaveMe.fblink;
    const attachment2 = SaveMe.pic2;

    const tweetSubject3=SaveMe.pic3;
    const tweetText3=SaveMe.text3+" - "+SaveMe.fblink;
    const attachment3 = SaveMe.pic3;


        // post1 to Twitter
        await  axios.post('/api/email',{emailAddress,tweetSubject,tweetText,attachment})
           .catch(function (error) {
            console.log("Error: DisplayTweets.js Post1 to Twitter: ",error);
        });
        console.log("Email 1 sent")
        
        // post2 to Twitter
        tweetSubject = tweetSubject2;
        tweetText = tweetText2;
        attachment = tweetSubject2;
        await axios.post('/api/email',{emailAddress,tweetSubject,tweetText,attachment})
        .catch(function (error) {
            console.log("Error: DisplayTweets.js Post2 to Twitter: ",error);
        });
        console.log("Email 2 sent")
        
        // // post3 to Twitter
        tweetSubject = tweetSubject3;
        tweetText = tweetText3;
        attachment = tweetSubject3;
        await axios.post('/api/email',{emailAddress,tweetSubject,tweetText,attachment}) 
        .catch(function (error) {
            console.log("Error: DisplayTweets.js Post3 to Twitter: ",error);
        });
        console.log("Email 3 sent")
    }

  render(){

    return (
      <section className="fb-section" style={{paddingBottom:'90px',marginBottom:'90px'}}>
        <div className="banner" style={{marginBottom:'40px',paddingBottom:'11px'}}><h1 style={{marginTop:'10px', marginLeft:'20px'}}>
            Preview &amp; Post</h1>
        </div>
            <div className="row-of-divs">
                <div className="help-text">
                    <h3>Directions:</h3>If you like the tweet previews,<br /> go ahead and click "Post". Otherwise, scroll back up and tweak (and Save) them until you do. 
                </div>

                <div className='alignTop'>
                    <div className="twitter-buttons">
                        <div className="twit-pic">
                            <img src={this.props.reducer2.pic1} alt="pic1" width="200"/>
                        </div>
                        <div className="keyword">
                            {this.props.reducer2.text1} - {this.props.reducer2.fblink}
                        </div> 
                    </div>

                    <div className="twitter-buttons">
                        <div className="twit-pic">
                            <img src={this.props.reducer2.pic2} alt="pic2" width="200"/>
                        </div>
                        <div className="keyword">
                            {this.props.reducer2.text2} - {this.props.reducer2.fblink}
                        </div> 
                    </div>

                    <div className="twitter-buttons">
                        <div className="twit-pic">
                            <img src={this.props.reducer2.pic3} alt="pic3" width="200"/>
                        </div>
                    <div className="keyword">                   
                        {this.props.reducer2.text3} - {this.props.reducer2.fblink}</div> 
                    </div>
                    <div className="fb-buttons" style={{width:'210px'}} > &nbsp; </div>
                </div>
            </div>
            <div style={{alignSelf:'center',marginTop:'40px'}}>
                <button onClick={() => this.saveThenPost()}>Post</button>
            </div>
                    
      </section>
    )
}}
function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {get_pics})(Preview)