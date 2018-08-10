
function grabAndProcessALLthoseWords(text) {  

    var _ = require ('lodash');  // calls the package lodash

    // SORT TEXT WORDS BY LENGTH
    // Use spread operator to get array of words
     let textWords = text.split(" ");
        // console.log("textWords",textWords);
                
    // Sort Text by length
        let newTextWords = textWords.sort(function(a, b) {
         return b.length - a.length
        }).filter(word => {  // get rid of smaller words
         return word.length > 5});
         newTextWords=_.uniq(newTextWords);
        //  newTextWords=_.map(newTextWords, word => {
        //      word.replace("/'s/g","");
        //      word.replace("/'/g","");
        //  })
        // console.log("Sorted :",newTextWords);

    // return the sorted word lists
        return newTextWords;
}

export {
    grabAndProcessALLthoseWords
}