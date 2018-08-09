

//  USING BACK-END CALL INSTEAD /////////

function fetchPics(keyword) {  

    // connect to Pexels
        const PexelsAPI = require('pexels-api-wrapper');
        //Create Client instance by passing in API key
         var pexelsClient = new PexelsAPI(key);

    // Search API for set of photos
        let picArr = [];
         pexelsClient.search(keyword, 10, 1)
         .then( (result) => {
            let picArr = result.photos.src.small})
         .catch(function(e){
             console.err(e);
         });

        console.log("picArr :",picArr);

    // return the picArr
        return picArr;
}

export {
    fetchPics
}