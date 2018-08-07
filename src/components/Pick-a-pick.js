
import spacer from './../images/spacer.jpg' // could use company logo as third tweet pic
import React, {Component} from 'react'; 
const PexelsAPI = require('pexels-api-wrapper');

class PickAPic extends Component  {
    constructor() {
        super()
        this.state = {
            photo1:"",
            PEXELS: "563492ad6f9170000100000145e3ffa0294445cd9fbce4be1b757988"
        }
    }

    fetchPhotos(keyword){                                  /// WORKS
        //Create Client instance by passing in API key
        var pexelsClient = new PexelsAPI(this.state.PEXELS);
        pexelsClient.search(keyword, 10, 1)
        .then( (result) => {
            this.setState({
               photo1:result.photos[0].src.small});
        }).catch(function(e){
            console.err(e);
        });
    }

    componentDidMount() {
        // this.fetchPhotos("food") //  ON PAUSE FOR NOW
    }

    render () {
        console.log("photo1: ",this.state.photo1)
        return(
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
         ) }
}

export default PickAPic;