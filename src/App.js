import React, { Component } from 'react';

import './App.css';

class App extends Component {
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
           <button>Register</button> &nbsp; <button>Login</button>
          </div>
      </article>
      <section>
asdf
        </section>
  </div>
    );
  }
}

export default App;
