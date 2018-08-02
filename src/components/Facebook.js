

import React from 'react';

export default function Facebook()  {
    return (
       <section className="fb-section">
            <h1> Paste your Press Release </h1>
            <div className="row-of-divs">
                <div className="help-text"><h3>Directions</h3> Just past your existing or Future Facebook post's text here. Click the Post button over on the right, or, if it's already posted to FB, just hit "Save"</div>
                <textarea cols="130" rows="30" />
                <div className="fb-buttons">
                    <button>Post</button>
                    <button>Save</button>
                </div>
            </div>
        </section>

  )
}
