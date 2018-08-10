
// import spacer from './../images/spacer.jpg' // could use company logo as third tweet pic
import React, {Component} from 'react'; 
import {connect} from 'react-redux';  
import {loadPick,sorted_1,sorted_2,sorted_3,save_pics1,get_pics,save_pic1,save_pic2,save_pic3} from '../ducks/reducer';
// import axios from 'axios'; 



class PickAPic extends Component  {
    constructor() {
        super()
        this.state = {
            photo1:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
             // https://www.bootcamps.in/wp-content/uploads/2015/05/bootcampsin.png",
            photo2:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
            photo3:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
            PEXELS: "563492ad6f9170000100000145e3ffa0294445cd9fbce4be1b757988",
            similar1:0,
            similar2:0,
            similar3:0,
            diff1:0,
            diff2:0,
            diff3:0,
            photoSet1: [],
            keyword1: "",
            keyword2: "",
            keyword3: ""

        }
        this.getSimilar1 = this.getSimilar1.bind(this);
        this.getDiff1 = this.getDiff1.bind(this);
    }



    getSimilar1(){
        // increments SIMILAR counter
        let loopy = (this.state.similar1+1) % 10;
        this.setState({
            similar1:loopy
        })
    }

    getDiff1(){
        // increments DIFF counter
        let loopy = (this.state.diff1+1) % 10;
        this.setState({
            diff1:loopy
        })
     const newKeyword = this.props.reducer2.sorted1[loopy];
     console.log("NewKeyword = ",newKeyword)
     this.props.get_pics(newKeyword);
     this.setState({
         keyword1:newKeyword,
    
     })
    }

    saveTweet1(){
        // get current photo
       let image1url = this.props.reducer2.picArr1.length > 0 ? 
        this.props.reducer2.picArr1[this.state.similar1].src.medium : this.state.photo1
        // save image to Redux store
        this.props.save_pic1(image1url);
        console.log("Saved pic1: ",this.props.reducer2.pic1)
    }

    render () {

    return(
        // if(this.props.reducer2.picArr1[0])

      <section className="picture-section">
            <h1>Pick a Pic</h1><br />
            <div className="row-of-divs">

                <div className="help-text">
                    <h3>Directions</h3>You can use the photos picked for you, find similar ones, try something different, OR, use a link you like. Remember to be sure to only use images to which you have a right to use.
                </div>

                <div className="twitter-buttons">
                    <img src={this.props.reducer2.picArr1.length > 0 ? 
                        this.props.reducer2.picArr1[this.state.similar1].src.medium : this.state.photo1} 
                    width="200" alt="credit photog"/><br />
                    <input defaultValue="(your image link)" /><button onClick={() => this.saveTweet1()}>Use</button><br />
                    <button onClick={() => this.getSimilar1()}>Same theme</button><br />
                    <button onClick={() => this.getDiff1(1)}>Diff. theme</button>
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
  export default connect(mapStateToProps, {loadPick,sorted_1,sorted_2,sorted_3,save_pics1,get_pics,save_pic1,save_pic2,save_pic3})(PickAPic)