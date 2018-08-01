
import React, { Component } from 'react';
import './Login.css';


export default class Login extends Component {
    login(){
        let{REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
        let url = `${window.location.origin}/auth/callback`
        
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }
    render() {
        return (
            <div className = "wrapper">
      
            <article>
                <h1 className="top-h1">Post to Twitter and Facebook at the same time with:</h1><br />
                <h1>PostPiston</h1><br /><br />
      
                <p>Current <strong>Twitter posting tools</strong>, like Hootsuite and Postcron, are nice for distributing promotional content you have <i>already</i> created.</p>
      
                <p><strong>PostPiston</strong> quickly helps you both <u>create</u> <i>and</i> post multiple eye-popping Twitter posts from your Facebook articles or press releases in just seconds!</p>
      
                PostPiston helps you quickly:
                    <ul>
                        <li>Create three unique tweets,</li>
                        <li>Quickly find 3 related eye-popping photos to match,</li>
                        <li>Post them to your company's Twitter account, <br />linking back to your original article, and</li>
                        <li>It allows you to save them for re-use at a later time.</li>
                    </ul>
      
      
                <p>Future features include posting to Instagram, Pinterest, and LinkedIn</p>
      
                <div className="buttons">
                 <button>Register</button> &nbsp; 
                 <button onClick={this.login}> Login </button>
                </div>
            </article>
            <section>
      asdf
              </section>
        </div>
          );
        }
      }
            // <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
