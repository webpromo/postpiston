
import React, {Component} from 'react'; 
import {connect} from 'react-redux';  
import {loadPick,sorted_1,sorted_2,sorted_3,save_pics1,save_pics2,save_pics3,get_pics,get_pics2,get_pics3,save_pic1,save_pic2,save_pic3} from '../ducks/reducer';


class PickAPic extends Component  {
    constructor() {
        super()
        this.state = {
            photo1:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
             // https://www.bootcamps.in/wp-content/uploads/2015/05/bootcampsin.png",
            photo2:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
            photo3:"https://www.getaprop.com/image/cache/catalog/OBSP-200x200.jpg",
            similar1:0,
            similar2:0,
            similar3:0,
            diff1:0,
            diff2:0,
            diff3:0,
            keyword1: "(None yet)",
            keyword2: "(None yet)",
            keyword3: "(None yet)"

        }
        this.getSimilar1 = this.getSimilar1.bind(this);
        this.getSimilar2= this.getSimilar2.bind(this);
        this.getSimilar3 = this.getSimilar3.bind(this);
        this.getDiff1 = this.getDiff1.bind(this);
        this.getDiff2 = this.getDiff2.bind(this);
        this.getDiff3 = this.getDiff3.bind(this);
    }

    getSimilar1(){
        // increments SIMILAR counter
        let loopy = (this.state.similar1+1) % 10;
        // loop back to zero if not 10 photos
        if (loopy > this.props.reducer2.picArr1.length) {
            loopy = 0;
        }
        this.setState({
            similar1:loopy
        })
    }
    
    getDiff1(){
        // increments DIFF counter
        let loopy = (this.state.diff1+1) % 10;
        if (loopy > this.props.reducer2.sorted1.length) {
            loopy = 0;
        }
        this.setState({
            diff1:loopy
        })
        console.log("Diff1 ",this.state.diff1)
        const newKeyword = this.props.reducer2.sorted1[loopy];
        console.log("NewKeyword = ",newKeyword)
        this.props.get_pics(newKeyword);
        this.setState({
            keyword1:newKeyword
        })
    }
    
    saveTweet1(){
        // get current photo
        let image1url = this.props.reducer2.picArr1.length > 0 ? 
        this.props.reducer2.picArr1[this.state.similar1].src.medium : this.state.photo1
        // save image to Redux store
        this.props.save_pic1(image1url);
    }
    
    getSimilar2(){
        // increments SIMILAR counter
        let loopy = (this.state.similar2+1) % 10;
        console.log("loopy ",loopy)
        
        // loop back to zero if not 10 photos
        if (loopy > this.props.reducer2.picArr2.length) {
            loopy = 0;
        }
        this.setState({
            similar2:loopy
        })
    }
    
    getDiff2(){
        // increments DIFF counter
        let loopy = (this.state.diff2+1) % 10;
        if (loopy > this.props.reducer2.sorted2.length) {
            loopy = 0;
        }
        this.setState({
            diff2:loopy
        })
        const newKeyword2 = this.props.reducer2.sorted2[loopy];
        console.log("NewKeyword2 = ",newKeyword2)
        this.props.get_pics2(newKeyword2);
        this.setState({
            keyword2:newKeyword2
        })
    }
    
    saveTweet2(){
        // get current photo
        let image2url = this.props.reducer2.picArr2.length > 0 ? 
        this.props.reducer2.picArr2[this.state.similar2].src.medium : this.state.photo2
        // save image to Redux store
        this.props.save_pic2(image2url);
    }
    
    getSimilar3(){
        // increments SIMILAR counter
        let loopy = (this.state.similar3+1) % 10;
        
        // loop back to zero if not 10 photos
        if (loopy > this.props.reducer2.picArr3.length) {
            loopy = 0;
        }
        this.setState({
            similar3:loopy
        })
    }
    
    getDiff3(){
        // increments DIFF counter
        let loopy = (this.state.diff3+1) % 10;
        if (loopy > this.props.reducer2.sorted3.length) {
            loopy = 0;
        }
        this.setState({
            diff3:loopy
        })
        const newKeyword3 = this.props.reducer2.sorted3[loopy];
        console.log("NewKeyword 3 = ",newKeyword3)
        this.props.get_pics3(newKeyword3);
        this.setState({
            keyword3:newKeyword3
        })
    }
    
    saveTweet3(){
        // get current photo
        let image3url = this.props.reducer2.picArr3.length > 0 ? 
        this.props.reducer2.picArr3[this.state.similar3].src.medium : this.state.photo3
        // save image to Redux store
        this.props.save_pic3(image3url);
        console.log("Saved pic3: ",this.props.reducer2.pic3)
    }
    
    render () {
        
        return(
            
            <section className="fb-section">
        <div className="banner" style={{marginBottom:'40px',paddingBottom:'11px'}}><h1 style={{marginTop:'10px', marginLeft:'20px'}}>
            Pick Some Pics</h1>
        </div>
            <div className="row-of-divs">

                <div className="help-text">
                    <h3>Directions:</h3>You can use the photos we find for you, find similar ones in the same theme, or try different themes.

                    These photos are provided by Pexels.com. Other free photo providers to be included soon.
                </div>
    {/* FIRST PIC */}
                <div className="twitter-buttons">
                    <div className="twit-pic">
                        <img src={this.props.reducer2.picArr1.length > 0 ? 
                        this.props.reducer2.picArr1[this.state.similar1].src.medium : this.props.reducer2.pic1} 
                        width="200" alt="credit photog"/>
                    </div>
                    {/* Theme1 */}
                    {console.log("sorted[0]",this.props.reducer2.sorted)}
                    {console.log("keyword1",this.state.keyword1)}
                    <div class="keyword">
                        <span style={{fontSize:'10pt'}}>Theme:</span> {this.props.reducer2.sorted ? this.props.reducer2.sorted[0] : this.state.keyword1}
                       &nbsp; - ({this.props.reducer2.picArr1.length})
                    </div>
                    <button onClick={() => this.saveTweet1()}>Use</button>
                    <button onClick={() => this.getSimilar1()}>Same theme</button>
                    <button onClick={() => this.getDiff1(1)}>Diff. theme</button>
                </div>
    {/* SECOND PIC */}
                <div className="twitter-buttons">
                    <div className="twit-pic">
{console.log("picArr2.len ",this.props.reducer2.picArr2.length)}
{console.log("Sim2 ",this.state.similar2)}
{console.log("picArr2 ",this.props.reducer2.picArr2)}

                        <img src={this.state.similar2 < this.props.reducer2.picArr2.length ? 
                        this.props.reducer2.picArr2[this.state.similar2].src.medium : this.props.reducer2.pic2} 
                        width="200" alt="credit photog"/>
                    </div>
                    {/* Theme2 */}
                    <div class="keyword">
                        <span style={{fontSize:'10pt'}}>Theme:</span> {this.state.keyword2}
                        &nbsp; - ({this.props.reducer2.picArr2.length})
                    </div>
                    {/* Theme 2 buttons */}
                    <button onClick={() => this.saveTweet2()}>Use</button>
                    <button onClick={() => this.getSimilar2()}>Same theme</button>
                    <button onClick={() => this.getDiff2(1)}>Diff. theme</button>
                </div>
    {/* THIRD PIC */}
                <div className="twitter-buttons">
                    <div className="twit-pic">
                        <img src={this.props.reducer2.picArr3.length > 0 ? 
                        this.props.reducer2.picArr3[this.state.similar3].src.medium : this.props.reducer2.pic3} 
                        width="200" alt="credit photog"/>
                    </div>
                    {/* Theme3 */}
                    <div class="keyword">
                        <span style={{fontSize:'10pt'}}>Theme:</span> {this.state.keyword3}
                        &nbsp; - ({this.props.reducer2.picArr3.length})
                    </div>
                    <button onClick={() => this.saveTweet3()}>Use</button>
                    <button onClick={() => this.getSimilar3()}>Same theme</button>
                    <button onClick={() => this.getDiff3(1)}>Diff. theme</button>
                </div>
                <div className="fb-buttons">&nbsp;</div>
            </div>
      </section>
         ) }
}

// export default PickAPic;

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {loadPick,sorted_1,sorted_2,sorted_3,save_pics1,save_pics2,save_pics3,get_pics,get_pics2,get_pics3,save_pic1,save_pic2,save_pic3})(PickAPic)