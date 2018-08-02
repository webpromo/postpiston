

import React from 'react';

export default function PickAPic()  {
    return (
      <section className="tweet-section">
            <h1>Produce your Twitter Posts</h1><br />
            <div className="row-of-divs">

                <div className="help-text">
                    <h3>Directions</h3>You can use the photos picked for you, find similar ones, try something different, OR, use a link you like. Remember to be sure to only use images to which you have a right to use.
                </div>

                <div className="twitter-buttons">
                    <img src="" height="200" /><br />
                    <input>(your image link)</input><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>

                <div className="twitter-buttons">
                <img src="" height="200" /><br />
                    <input>(your image link)</input><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>

                <div className="twitter-buttons">
                <img src="" height="200" /><br />
                    <input>(your image link)</input><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>
                <div className="fb-buttons">(spacer)</div>
            </div>
      </section>
    )
}