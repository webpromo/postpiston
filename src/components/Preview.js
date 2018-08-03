

import React from 'react';

export default function Preview()  {
    return (
      <section className="preview-section">
            <h1>Preview &amp; Post</h1><br />
            <div className="row-of-divs">

                <div className="help-text">
                    <h3>Directions</h3>If you like the tweet previews, go ahead and his "Post". Otherwise, scroll back up and tweak them until you do like them.
                </div>

                <div className="twitter-buttons">
                    <img src="https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg" alt="pic1" /><br />
                    "This is the greatest tweet ever to be tweeted. "
                </div>

                <div className="twitter-buttons">
                <img src="https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg" alt="pic2" /><br />
                "Here's our test tweet. This is an amazing tweet, filled with passion and enthusiasm."<br />
                    <button>Post to Twitter</button>
                </div>

                <div className="twitter-buttons">
                <img src="https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg" alt="pic3" /><br />
                    "This is another amazing tweet. You just can't get tweets like this these days."
                </div>
                <div className="fb-buttons">(spacer)</div>
            </div>
      </section>
    )
}