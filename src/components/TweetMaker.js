

import React from 'react';

export default function TweetMaker()  {
    return (
      <section className="tweet-section">
            <h1>Produce your Twitter Posts</h1><br />
            <div className="row-of-divs">
                <div className="help-text"><h3>Directions</h3> Just past your existing or Future Facebook post's text here. Click the Post button over on the right, or, if it's already posted to FB, just hit "Save"</div>
                <div className="twitter-buttons">
                    <button>1st &para;</button><br />
                    <textarea rows="30"> Tweet 1 text goes here</textarea>
                </div>
                <div className="twitter-buttons">
                    <button>1st Sentences</button><br />
                    <textarea rows="30"> Tweet 2 text goes here</textarea>
                </div>
                <div className="twitter-buttons">
                    <button>Mixed</button><br />
                    <textarea rows="30"> Tweet 3 text goes here</textarea>
                </div>
                <div className="fb-buttons">(spacer)</div>
            </div>
      </section>
    )
}