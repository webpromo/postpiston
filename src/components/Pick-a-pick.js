
import spacer from './../images/spacer.jpg' // could use company logo as third tweet pic
import React from 'react';

export default function PickAPic()  {
    return (
      <section className="picture-section">
            <h1>Pick a Pic</h1><br />
            <div className="row-of-divs">

                <div className="help-text">
                    <h3>Directions</h3>You can use the photos picked for you, find similar ones, try something different, OR, use a link you like. Remember to be sure to only use images to which you have a right to use.
                </div>

                <div className="twitter-buttons">
                    <img src="https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg" alt="pic1" /><br />
                    <input defaultValue="(your image link)" /><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>

                <div className="twitter-buttons">
                <img src="https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg" alt="pic2" /><br />
                    <input defaultValue="(your image link)" /><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>

                <div className="twitter-buttons">
                <img src={spacer} alt="pic3" /><br />
                    <input defaultValue="(your image link)" /><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>
                <div className="fb-buttons">(spacer)</div>
            </div>
      </section>
    )
}