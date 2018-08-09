

/////    NOT USING   /////

import React, {Component} from 'react'; 
import {connect} from 'react-redux';  
import {loadPick,save_pics1,save_pics2,save_pics3} from '../ducks/reducer';
const PexelsAPI = require('pexels-api-wrapper');


class FetchPics extends Component  {

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
        console.log("fetched photo1: ",this.state.photo1)
    }

    render (){

        
      return (
         <h1>This is AppName!</h1>
        )   
    }    
}

function mapStateToProps( state ) {
    return state;
  }
  export default connect(mapStateToProps, {loadPick,save_pics1,save_pics2,save_pics3})(FetchPics)

    