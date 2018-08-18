
function grabAndProcessALLthoseWords(oldText) {  

    var _ = require ('lodash');  // calls the package lodash

    // clean text of code-breaking apostrophes and the like
    let text = oldText.replace(/[.,\/#!$%?\^&\*;:{}=_`~'()]/g," ")

    // replace line breaks
    text = text.replace(/(\r\n\t|\n|\r\t)/gm,"");

    // Use split operator to get array of words
     let textWords = text.split(" ");
              
    // Sort Text by length
        let newTextWords = textWords.sort(function(a, b) {
            return b.length - a.length
            }).filter(word => {  // gets rid of smaller words
            return word.length > 4});

    // de-dupe
         newTextWords=_.uniq(newTextWords);  // lodash rocks!

        //  console.log(newTextWords);
         
             // return the sorted word lists
        return newTextWords;
}

export {
    grabAndProcessALLthoseWords
}