
import React, { Component } from 'react';
import './Login.css';
import bkgnd from '../images/power-twitter-business.jpg'


export default class Login extends Component {

    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    render() {
        return ( 
            <div className = "wrapper">
            <menu>
                <div className="logo"><a href="/#/"><img src={require("../images/power-of-twitter-for-business.png")} alt="Harness the power of Twitter for business!" height="100" /></a></div>
                <div><h1 className="off-white" style={{textShadow: '3px 2px #333'}} >Best Twitter Marketing Software</h1></div>
                <div className="nav-buttons">
                    <div className="hvr-float-shadow"><a href="/#/" title="Harness the Power of Twitter for Business Marketing">Home</a></div>
                    <div className="hvr-float-shadow"><a href="https://www.linkedin.com/in/jessefisherwebdev/" title="Jesse Fisher, Salem, Utah" target="_blank" rel="noopener noreferrer">About</a></div>
                    <div className="hvr-float-shadow"  onClick={() => this.login()}>Login!</div>
                    <div className="hvr-float-shadow"><a href="/#contact" title="The Best way to use Twitter for marketing and PR">Contact</a></div>
                </div>
            </menu>

            {/* "Power of Twitter for Business" section */}
            <section className="section-one">
                <div className="evenly">
                    <div><img src={require("../images/the-best-way-to-use-twitter-for-marketing.png")} alt="PostPiston is the best way to use twitter for marketing" height="300" /></div>
                    <div><img src={require("../images/best-twitter-marketing-software.png")} alt="PostPiston is the best twitter marketing software" height="400" /></div>
                    <div><img src={require("../images/twitter-as-a-marketing-tool.jpg")} alt="We use Twitter as a marketing tool" height="300" /></div>
                </div>
                <div className="c" style={{float:'right'}}>
                    <h1 style={{color:'#CA873F'}}>Quickly Harness the Power of Twitter for Business!</h1>
                </div>  
            </section>

             {/* "Twitter as a marketing tool" portion */}
            <section className="section-two">
                <div>
                  <h3 className="pt30 upper off-white" style={{textShadow: '3px 2px #333'}}>Three Fast Steps</h3>
                  <p className="off-white pt18">...to Use Twitter as a Marketing Tool with PostPiston </p>
                </div>
                <div className="wide900">
                    <div className="box">
                        <div className="box-image">
                        <img src={require("../images/content-marketing-on-twitter.png")} alt="content-marketing-on-twitter" height="180" />
                        </div>
                        <div className="box-title">1. Paste your content</div>
                        <div className="box-text">It's simply copying and pasting the text &amp; URL of your press release, article, or blog post into PostPiston,</div>
                    </div>
                    <div className="box">
                        <div className="box-image">
                        <img src={require("../images/post-to-twitter-automatically.jpg")} alt="content-marketing-on-twitter" height="180" />
                        </div>
                        <div className="box-title">2. Tweak your 3 tweets</div>
                        <div className="box-text">PostPiston automatically creates three tweets linking back to your content, you just tweak the proposed text, and </div>
                    </div>
                    <div className="box">
                        <div className="box-image">
                             <img src={require("../images/twitter-marketing-software.jpg")} alt="twitter-marketing-software" height="180" />
                        </div>
                        <div className="box-title">3. Pick your Pics!</div>
                        <div className="box-text">PostPiston automatically finds 3 free, eye-popping pics to capture attention for your tweets. </div>
                    </div>
                </div>

                <div className="c two-together">
                    <h3 className="pt24 off-white">That's it!</h3>
                    <p>(OK, well... you <i>do</i> have to click a button to publish your tweets.)</p>
                </div>
            </section>

          
             {/* "The Best way to use twitter for business" area */}
            <section className="section-three c two-together" style={{backgroundImage:`url(${bkgnd})`}}>
             
            <h3 className="off-white">Why PostPiston is the best way to use Twitter for Marketing</h3>  
                <div className="wide800 two-together">
                    <p className="c999 p14">Current Twitter posting tools, like Hootsuite and Postcron, are nice for distributing promotional content you have already created.</p>

<p className="c999 p14 padtop8">PostPiston is the best way to use Twitter for Marketing because it quickly helps you both create <em>and</em> post multiple eye-popping social networking posts from your Facebook articles or press releases in just seconds!</p>
                </div>
    <div>
        <h3 className="pt18 off-white">PostPiston helps you by:</h3>
        <ul  className="c999 p16" >
        <li>Automatically creating three unique tweets you can tweak, if needed,</li>
        <li>Quickly finding 3 related eye-popping photos to match,</li>
        <li>Posting them to your company's Twitter account,
        linking back to your original article, and</li>
        <li>It allows you to save them for re-use at a later time.</li> 
        </ul>
    </div>


<div><h3 className="pt14 off-white">Future features include posting to Instagram, Pinterest, and LinkedIn.</h3></div>
            </section>
            <footer ref="contact">
                <div className="flex-row">
                    <div><h3 className="off-white">Our Contact Info</h3><br />
                    <span className="c999 padtop8">Jesse Fisher, Developer<br />NewSalem Web Services<br />
                    PO Box 176<br />Salem, Utah 84653<br /><br />(801) 423-6426<br />
                    PostPiston@NewSalemWeb.com</span>
                    </div>

                        <div><h3 className="off-white">Our Other Services</h3><br />
                    <span className="c999 padtop8">Website Development<br />SEO &amp; Website Marketing<br />
                    Social Media Marketing<br />
                    <a href="http://JesseFisherDomains.com/" title="Cheap domain names" className="c999">Cheap Domain Names &amp; Hosting</a></span>
                    </div>

                    <div><h3 className="off-white">Special Thanks to:</h3><br />
                    <span className="c999 padtop8">DevMountain staff, especially:<br />
                    &nbsp; Joe Blank &amp; Brack Carmony<br />
                    &nbsp; Tim Mathews, Nick Hathaway, &amp; Mira Jones<br />&nbsp; Megan Fisher<br />
                    and my fellow DevMountain Student Developers</span>
                    </div>
                </div>
                <div className="c c666"><hr />
                  <center>  &copy; 2018 by Jesse Fisher, All rights reserved.</center></div>
            </footer>

        </div>
          );
        }
      }
            // <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
            // <button onClick={this.login}> Login </button>
