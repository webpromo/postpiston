
// import spacer from './../images/spacer.jpg' // could use company logo as third tweet pic
import React, {Component} from 'react'; 
import {connect} from 'react-redux';  
import {loadPick} from '../ducks/reducer';
const PexelsAPI = require('pexels-api-wrapper');


class PickAPic extends Component  {
    constructor() {
        super()
        this.state = {
            photo1:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
             // https://www.bootcamps.in/wp-content/uploads/2015/05/bootcampsin.png",
            photo2:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
            photo3:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
            PEXELS: "563492ad6f9170000100000145e3ffa0294445cd9fbce4be1b757988"
        }
    }

    componentDidMount() {

    }

    render () {

    return(
      <section className="picture-section">
            <h1>Pick a Pic</h1><br />
            <div className="row-of-divs">

                <div className="help-text">
                    <h3>Directions</h3>You can use the photos picked for you, find similar ones, try something different, OR, use a link you like. Remember to be sure to only use images to which you have a right to use.
                </div>

                <div className="twitter-buttons">
                    <img src={this.state.photo1} alt="pic1" /><br />
                    <input defaultValue="(your image link)" /><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>

                <div className="twitter-buttons">
                <img src={this.state.photo2} alt="pic2" /><br />
                    <input defaultValue="(your image link)" /><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>

                <div className="twitter-buttons">
                <img src={this.state.photo3} alt="pic3" /><br />
                    <input defaultValue="(your image link)" /><button>Use</button><br />
                    <button>Get similar</button><button>Get diff.</button>
                </div>
                <div className="fb-buttons">(spacer)</div>
            </div>
      </section>
         ) }
}

// export default PickAPic;

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {loadPick})(PickAPic)